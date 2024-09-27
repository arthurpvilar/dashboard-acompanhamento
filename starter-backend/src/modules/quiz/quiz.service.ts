// src/services/quiz.service.ts
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

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(QuizAttempt)
    private readonly quizAttemptRepository: Repository<QuizAttempt>,
  ) {}

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    const owner = await this.userRepository.findOne({
      where: { id: createQuizDto.ownerId },
    });
    if (!owner) {
      throw new NotFoundException(
        `User with ID ${createQuizDto.ownerId} not found`,
      );
    }
    const quiz = this.quizRepository.create({
      ...createQuizDto,
      owner,
    });
    return this.quizRepository.save(quiz);
  }

  async findAll(options: {
    page: number;
    limit: number;
    search?: string;
    status?: 'draft' | 'published' | 'archived';
  }): Promise<{ data: Quiz[]; total: number }> {
    const { page, limit, search, status } = options;

    const findOptions: FindManyOptions<Quiz> = {
      skip: (page - 1) * limit,
      take: limit,
      relations: ['questions', 'sociologicalData', 'owner'],
      where: {},
    };

    if (search) {
      findOptions.where = [
        { title: Like(`%${search}%`) },
        { identifier: Like(`%${search}%`) },
      ];
    }

    if (status) {
      findOptions.where = {
        ...findOptions.where,
        status,
      };
    }

    const [data, total] = await this.quizRepository.findAndCount(findOptions);
    return { data, total };
  }

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

  async update(id: number, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    const quiz = await this.quizRepository.preload({
      id,
      ...updateQuizDto,
    });
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
    return this.quizRepository.save(quiz);
  }

  async remove(id: number): Promise<void> {
    const result = await this.quizRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }
  }

  async findByOwner(ownerId: string): Promise<Quiz[]> {
    return this.quizRepository.find({
      where: { owner: { id: ownerId } },
      relations: ['questions', 'sociologicalData'],
    });
  }

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

  private calculateScore(quiz: Quiz, answers: any): number {
    // Implement your scoring logic here
    let score = 0;

    for (const question of quiz.questions) {
      const userAnswer = answers[question.id];
      if (question.answer && question.answer === userAnswer) {
        score += 1; // Assign points as needed
      }
    }

    return score;
  }
}
