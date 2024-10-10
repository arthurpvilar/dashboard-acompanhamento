import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizAttempt } from './entities/quiz-attempt.entity';
import { User } from '../user/entities/user.entity';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizQuestionAnswer } from '../quiz-question-answer/entities/quiz-question-answer.entity';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { AnswerDto } from './dto/record-attempt.dto';
import { UserQuizAttemptDto } from './dto/user-quiz-attempt.dto';
import { QuizQuestionDto } from '../quiz/dto/quiz-details.dto';
import { QuizStatisticalSociologicalDataDto } from '../quiz/dto/quiz-statistical-sociological-data.dto';
import { QuizAttemptDetailsDto } from './dto/quiz-attempt-details.dto';

@Injectable()
export class QuizAttemptService {
  constructor(
    @InjectRepository(QuizAttempt)
    private readonly quizAttemptRepository: Repository<QuizAttempt>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,

    @InjectRepository(QuizQuestionAnswer)
    private readonly quizQuestionAnswerRepository: Repository<QuizQuestionAnswer>,

    @InjectRepository(QuizQuestion)
    private readonly quizQuestionRepository: Repository<QuizQuestion>,

    @InjectRepository(QuizQuestionOption)
    private readonly quizQuestionOptionRepository: Repository<QuizQuestionOption>,
  ) {}

  // Função para registrar uma tentativa
  async recordAttempt(
    userId: string | null,
    email: string | null,
    quizId: number,
    answers: AnswerDto[],
  ): Promise<QuizAttempt> {
    // Buscar ou criar a tentativa
    const attempt = await this.findOrCreateAttempt(quizId, userId, email);

    // Buscar todas as perguntas e opções do quiz
    const questions = await this.quizQuestionRepository.find({
      where: { quiz: { index: quizId } },
      relations: ['options'],
    });

    const questionMap = new Map<number, QuizQuestion>();
    const optionMap = new Map<number, QuizQuestionOption>();

    for (const question of questions) {
      questionMap.set(question.index, question);
      for (const option of question.options) {
        optionMap.set(option.index, option);
      }
    }

    // Processar cada resposta
    for (const answerData of answers) {
      const { questionId, optionId, startedAt, completedAt } = answerData;

      // Obter a pergunta do mapa
      const question = questionMap.get(questionId);
      if (!question) {
        throw new NotFoundException(
          `Pergunta com ID ${questionId} não encontrada.`,
        );
      }

      // Obter a opção do mapa, se fornecida
      let option: QuizQuestionOption = null;
      if (optionId) {
        option = optionMap.get(optionId);
        if (!option) {
          throw new NotFoundException(
            `Opção com ID ${optionId} não encontrada.`,
          );
        }
      }

      // Criar ou atualizar a resposta
      const quizQuestionAnswer = this.quizQuestionAnswerRepository.create({
        attempt,
        question,
        option,
        startedAt,
        completedAt,
      });

      // Salvar a resposta
      await this.quizQuestionAnswerRepository.save(quizQuestionAnswer);
    }

    // Verificar se a tentativa foi concluída
    await this.checkCompletion(attempt);

    return attempt;
  }

  // Método para encontrar ou criar uma tentativa
  async findAttempt(
    quizId: number,
    userId?: string,
    email?: string,
  ): Promise<QuizAttempt> {
    if (!userId && !email) {
      throw new BadRequestException(
        'É necessário fornecer um userId ou email.',
      );
    }

    const whereCondition: any = {
      quiz: { index: quizId },
      isCompleted: false,
    };

    if (userId) {
      whereCondition.user = { index: userId };
    } else if (email) {
      whereCondition.email = email;
    }

    const attempt = await this.quizAttemptRepository.findOne({
      where: whereCondition,
      relations: ['quiz', 'answers'],
    });

    if (!attempt) {
      throw new NotFoundException(
        `Tentativa de quiz com ID ${quizId} não encontrada.`,
      );
    }

    return attempt;
  }

  // Método para encontrar ou criar uma tentativa
  async findOrCreateAttempt(
    quizId: number,
    userId?: string,
    email?: string,
  ): Promise<QuizAttempt> {
    if (!userId && !email) {
      throw new BadRequestException(
        'É necessário fornecer um userId ou email.',
      );
    }

    const whereCondition: any = {
      quiz: { index: quizId },
      isCompleted: false,
    };

    if (userId) {
      whereCondition.user = { index: userId };
    } else if (email) {
      whereCondition.email = email;
    }

    let attempt = await this.quizAttemptRepository.findOne({
      where: whereCondition,
      relations: ['quiz', 'answers'],
    });

    if (!attempt) {
      // Verificar se o `quiz` está corretamente carregado
      const quiz = await this.quizRepository.findOne({
        where: { index: quizId },
        relations: ['questions'],
      });
      if (!quiz) {
        throw new NotFoundException(`Quiz com ID ${quizId} não encontrado.`);
      }

      let user: User | null = null;
      if (userId) {
        user = await this.userRepository.findOne({ where: { index: userId } });
        if (!user) {
          throw new NotFoundException(
            `Usuário com ID ${userId} não encontrado.`,
          );
        }
      }

      // Criar um novo `attempt` somente se `quiz` e `user` estão corretos
      attempt = this.quizAttemptRepository.create({
        quiz,
        user,
        email: email || null,
        attemptedAt: new Date(),
        isCompleted: false,
        answers: [],
      });
      attempt = await this.quizAttemptRepository.save(attempt);
    }

    return attempt;
  }

  // Função para obter todas as tentativas de quiz de um usuário específico
  async getUserAttempts(
    userId: string,
    email: string | null = null,
  ): Promise<UserQuizAttemptDto[]> {
    const whereCondition: any = email ? { email } : { user: { index: userId } };

    const attempts = await this.quizAttemptRepository.find({
      where: whereCondition,
      relations: ['quiz', 'quiz.questions', 'answers'],
    });

    // Mapeia cada tentativa para incluir os detalhes do quiz e a porcentagem de conclusão
    const attemptsDetails: UserQuizAttemptDto[] = attempts.map((attempt) => {
      const totalQuestions = attempt.quiz.questions.length;
      const answeredQuestions = attempt.answers.length;
      const completionRate =
        totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;

      return {
        index: attempt.index,
        quizTitle: attempt.quiz.title,
        quizId: attempt.quiz.index,
        quizImage: attempt.quiz.image,
        quizCategory: attempt.quiz.category,
        quizIdentifier: attempt.quiz.identifier,
        quizDescription: attempt.quiz.description,
        completionRate: parseFloat(completionRate.toFixed(2)),
        totalQuestions,
        answeredQuestions,
        isCompleted: attempt.isCompleted,
      };
    });

    return attemptsDetails;
  }

  // Método para obter os detalhes de uma tentativa de quiz
  async getQuizAttemptDetails(
    attemptId: number,
  ): Promise<QuizAttemptDetailsDto> {
    const attempt = await this.quizAttemptRepository.findOne({
      where: { index: attemptId },
      relations: [
        'quiz',
        'quiz.owner',
        'quiz.questions',
        'quiz.questions.options',
        'quiz.questions.options.sociologicalData', // Adicionando esta relação para garantir que os dados sociológicos sejam carregados
        'answers',
        'answers.option',
        'answers.option.sociologicalData',
        'answers.question',
      ],
    });

    if (!attempt) {
      throw new NotFoundException(
        `Tentativa de quiz com ID ${attemptId} não encontrada.`,
      );
    }

    // Criar um mapa para as respostas dadas pelo usuário
    const answerMap = new Map<number, number>(); // questionId -> selectedOptionId
    for (const answer of attempt.answers) {
      if (answer.option) {
        answerMap.set(answer.question.index, answer.option.index);
      }
    }

    // Mapear as perguntas e respostas da tentativa de quiz para QuizQuestionDto
    const questions: QuizQuestionDto[] = attempt.quiz.questions.map(
      (question) => {
        const options = question.options.map((option) => ({
          id: option.index,
          title: option.title,
          isChecked: answerMap.get(question.index) === option.index, // Verifica se a opção foi selecionada pelo usuário
          weight: option.weight,
          sociologicalData: option.sociologicalData
            ? {
                id: option.sociologicalData.index,
                name: option.sociologicalData.name,
                color: option.sociologicalData.color,
              }
            : null,
        }));

        return {
          id: question.index,
          type: question.type,
          question: question.question,
          answer: question.answer,
          options,
        };
      },
    );

    // Coletar os dados sociológicos para a tentativa de quiz
    const sociologicalDataMap = new Map<
      number,
      QuizStatisticalSociologicalDataDto
    >();
    for (const answer of attempt.answers) {
      if (answer.option?.sociologicalData) {
        const data = answer.option.sociologicalData;
        if (!sociologicalDataMap.has(data.index)) {
          sociologicalDataMap.set(data.index, {
            id: data.index,
            name: data.name,
            color: data.color,
            value: 0,
          });
        }
        const dataDto = sociologicalDataMap.get(data.index);
        dataDto.value += answer.option.weight;
      }
    }

    const sociologicalDataStatistics = Array.from(sociologicalDataMap.values());

    return {
      attemptId: attempt.index,
      quizTitle: attempt.quiz.title,
      quizDescription: attempt.quiz.description,
      quizOwnerFullName: attempt.quiz.owner.fullName,
      quizCategory: attempt.quiz.category,
      quizImage: attempt.quiz.image,
      questions,
      sociologicalDataStatistics,
    } as QuizAttemptDetailsDto;
  }

  // Método para verificar se a tentativa foi concluída
  async checkCompletion(attempt: QuizAttempt): Promise<void> {
    // Certifique-se de que as relações estão carregadas
    if (!attempt.quiz || !attempt.quiz.questions || !attempt.answers) {
      attempt = await this.quizAttemptRepository.findOne({
        where: { index: attempt.index },
        relations: ['quiz', 'quiz.questions', 'answers'],
      });
    }

    const totalQuestions = attempt.quiz.questions.length;
    const answeredQuestions = attempt.answers.length;

    if (answeredQuestions >= totalQuestions) {
      attempt.isCompleted = true;
      attempt.completedAt = new Date();
      await this.quizAttemptRepository.save(attempt);
    }
  }

  // Função para obter todas as tentativas de quiz
  async findAll(): Promise<QuizAttempt[]> {
    return await this.quizAttemptRepository.find({
      relations: ['quiz', 'user', 'answers'],
    });
  }

  // Função para obter uma tentativa de quiz por ID
  async findOne(id: number): Promise<QuizAttempt> {
    const attempt = await this.quizAttemptRepository.findOne({
      where: { index: id },
      relations: ['quiz', 'user', 'answers'],
    });

    if (!attempt) {
      throw new NotFoundException(
        `Tentativa de quiz com ID ${id} não encontrada.`,
      );
    }

    return attempt;
  }

  // Método para deletar uma tentativa de quiz pelo ID
  async deleteAttempt(id: number): Promise<void> {
    const attempt = await this.quizAttemptRepository.findOne({
      where: { index: id },
    });

    if (!attempt) {
      throw new NotFoundException(
        `Tentativa de quiz com ID ${id} não encontrada.`,
      );
    }

    await this.quizAttemptRepository.remove(attempt);
  }
}
