import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';  // Importação do Repository
import { QuizAttempt } from './entities/quiz-attempt.entity';
import { User } from '../user/entities/user.entity';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizQuestionAnswer } from '../quiz-question-answer/entities/quiz-question-answer.entity';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { AnswerDto } from './dto/record-attempt.dto';

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
    answers: AnswerDto[], // Array de objetos contendo questionId, optionId, etc.
  ): Promise<QuizAttempt> {
    if (!userId && !email) {
      throw new BadRequestException('É necessário fornecer um userId ou email.');
    }

    // Buscar ou criar a tentativa
    const attempt = await this.findOrCreateAttempt(quizId, userId, email);

    // Processar cada resposta
    for (const answerData of answers) {
      const { questionId, optionId, startedAt, completedAt } = answerData;

      // Verificar se a pergunta existe
      const question = await this.quizQuestionRepository.findOne({ where: { index: questionId } });
      if (!question) {
        throw new NotFoundException(`Pergunta com ID ${questionId} não encontrada.`);
      }

      // Verificar se a opção existe, se fornecida
      let option: QuizQuestionOption = null;
      if (optionId) {
        option = await this.quizQuestionOptionRepository.findOne({ where: { index: optionId } });
        if (!option) {
          throw new NotFoundException(`Opção com ID ${optionId} não encontrada.`);
        }
      }

      // Verificar se já existe uma resposta para essa pergunta nessa tentativa
      let quizQuestionAnswer = await this.quizQuestionAnswerRepository.findOne({
        where: {
          attempt: { index: attempt.index },
          question: { index: questionId },
        },
      });

      if (!quizQuestionAnswer) {
        // Criar nova resposta
        quizQuestionAnswer = this.quizQuestionAnswerRepository.create({
          attempt,
          question,
          option,
          startedAt,
          completedAt,
        });
      } else {
        // Atualizar resposta existente
        quizQuestionAnswer.option = option;
        quizQuestionAnswer.startedAt = startedAt || quizQuestionAnswer.startedAt;
        quizQuestionAnswer.completedAt = completedAt || quizQuestionAnswer.completedAt;
      }

      // Salvar a resposta
      await this.quizQuestionAnswerRepository.save(quizQuestionAnswer);
    }

    // Verificar se a tentativa foi concluída
    await this.checkCompletion(attempt.index);

    return attempt;
  }

  // Método para encontrar ou criar uma tentativa
  async findOrCreateAttempt(
    quizId: number,
    userId?: string,
    email?: string,
  ): Promise<QuizAttempt> {
    if (!userId && !email) {
      throw new BadRequestException('É necessário fornecer um userId ou email.');
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
      // Buscar a entidade Quiz
      const quiz = await this.quizRepository.findOne({ where: { index: quizId } });
      if (!quiz) {
        throw new NotFoundException(`Quiz com ID ${quizId} não encontrado.`);
      }

      let user: User | null = null;
      if (userId) {
        user = await this.userRepository.findOne({ where: { index: userId } });
        if (!user) {
          throw new NotFoundException(`Usuário com ID ${userId} não encontrado.`);
        }
      }

      attempt = this.quizAttemptRepository.create({
        quiz,
        user,
        email: email || null,
        attemptedAt: new Date(),
        isCompleted: false,
      });
      attempt = await this.quizAttemptRepository.save(attempt);
    }

    return attempt;
  }

  // Método para verificar se a tentativa foi concluída
  async checkCompletion(attemptId: number): Promise<void> {
    const attempt = await this.quizAttemptRepository.findOne({
      where: { index: attemptId },
      relations: ['quiz', 'quiz.questions', 'answers'],
    });

    if (!attempt) {
      throw new NotFoundException(`Tentativa com ID ${attemptId} não encontrada.`);
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
      throw new NotFoundException(`Tentativa de quiz com ID ${id} não encontrada.`);
    }

    return attempt;
  }
}
