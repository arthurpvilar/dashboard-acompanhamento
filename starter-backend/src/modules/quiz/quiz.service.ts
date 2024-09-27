import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions, Like } from 'typeorm';
import { QuizAttempt } from '../quiz-attempt/entities/quiz-attempt.entity';
import { User } from '../user/entities/user.entity';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '../quiz-sociological-data/entities/quiz-sociological-data.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(QuizAttempt)
    private quizAttemptRepository: Repository<QuizAttempt>,
    @InjectRepository(QuizQuestion)
    private readonly quizQuestionRepository: Repository<QuizQuestion>,
    @InjectRepository(QuizSociologicalData)
    private readonly sociologicalDataRepository: Repository<QuizSociologicalData>,
    @InjectRepository(QuizQuestionOption)
    private readonly quizQuestionOptionRepository: Repository<QuizQuestionOption>,
  ) {}

  // Função para verificar ou criar os dados sociológicos
  private async verifyOrCreateSociologicalData(
    sociologicalData: QuizSociologicalData[],
  ): Promise<QuizSociologicalData[]> {
    const verifiedData: QuizSociologicalData[] = [];

    for (const item of sociologicalData) {
      let existingData = await this.sociologicalDataRepository.findOne({
        where: { name: item.name, value: item.value, color: item.color },
      });

      if (!existingData) {
        existingData = await this.sociologicalDataRepository.save(item);
      }

      verifiedData.push(existingData);
    }

    return verifiedData;
  }

  // Função para atualizar as opções das perguntas com os sociologicalIds corretos
  private async updateOptionsWithSociologicalIds(
    questions: QuizQuestion[],
    verifiedData: QuizSociologicalData[],
  ) {
    for (const question of questions) {
      for (const option of question.options) {
        const matchedSociological = verifiedData.find(
          (data) => data.name === option.sociological.name,
        );

        if (matchedSociological) {
          option.sociologicalId = matchedSociological.id; // Atribui o sociologicalId correto
          delete option.sociological; // Remove o objeto sociological para manter apenas o ID
        }
      }
    }
  }

  // Criação do quiz, com verificação de usuário e dados sociológicos
  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const owner = await this.userRepository.findOne({
      where: { id: createQuizDto.ownerId },
    });

    if (!owner) {
      throw new NotFoundException(`User with ID ${createQuizDto.ownerId} not found`);
    }

    // Verifica ou cria os dados sociológicos
    const verifiedSociologicalData = await this.verifyOrCreateSociologicalData(
      createQuizDto.sociologicalData,
    );

    // Atualiza as opções das perguntas com os sociologicalIds corretos
    await this.updateOptionsWithSociologicalIds(
      createQuizDto.questions,
      verifiedSociologicalData,
    );

    // Cria o quiz associando o usuário (owner)
    const quiz = this.quizRepository.create({
      ...createQuizDto,
      owner,
    });

    return this.quizRepository.save(quiz);
  }

  // Função para encontrar um quiz
  async findOne(id: number): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne({
      where: { id },
      relations: [
        'questions',
        'questions.options',
        'questions.subQuestions',
        'sociologicalData',
        'owner',
      ],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    return quiz;
  }

  // Função para atualizar um quiz existente
  async update(id: number, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    const quiz = await this.quizRepository.preload({
      id,
      ...updateQuizDto,
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    // Verifica ou cria os dados sociológicos atualizados
    const verifiedSociologicalData = await this.verifyOrCreateSociologicalData(
      updateQuizDto.sociologicalData,
    );

    // Atualiza as opções das perguntas com os sociologicalIds corretos
    await this.updateOptionsWithSociologicalIds(
      updateQuizDto.questions,
      verifiedSociologicalData,
    );

    return this.quizRepository.save(quiz);
  }

  // Função para remover um quiz
  async remove(id: number): Promise<void> {
    const result = await this.quizRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
  }

  // Função para buscar quizzes por dono (owner)
  async findByOwner(ownerId: string): Promise<Quiz[]> {
    return this.quizRepository.find({
      where: { owner: { id: ownerId } },
      relations: ['questions', 'sociologicalData'],
    });
  }

  // Função para registrar uma tentativa de quiz
  async recordAttempt(
    userId: string | null,
    email: string | null,
    quizId: number,
    answers: any,
  ): Promise<QuizAttempt> {
    let user: User | null = null;

    if (userId) {
      user = await this.userRepository.findOne({ where: { id: userId } });
    }

    if (!user && !email) {
      throw new BadRequestException('Either userId or email must be provided');
    }

    const quiz = await this.quizRepository.findOne({
      where: { id: quizId },
      relations: ['questions', 'questions.options'],
    });

    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${quizId} not found`);
    }

    const score = this.calculateScore(quiz, answers);

    const attempt = this.quizAttemptRepository.create({
      user,
      email,
      quiz,
      answers,
      score,
    });

    return this.quizAttemptRepository.save(attempt);
  }

  // Função auxiliar para calcular a pontuação de um quiz
  private calculateScore(quiz: Quiz, answers: any): number {
    let score = 0;

    for (const question of quiz.questions) {
      const userAnswer = answers[question.id];
      if (question.answer && question.answer === userAnswer) {
        score += 1; // Pontuação atribuída conforme necessário
      }
    }

    return score;
  }
}
