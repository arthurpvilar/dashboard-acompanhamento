// src/quiz-attempt/quiz-attempt.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { CreateQuizAttemptDto } from './dto/create-quiz-attempt.dto';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizService } from '../quiz/quiz.service';
import { User } from '../user/entities/user.entity';
import { QuizAttempt } from './entities/quiz-attempt.entity';

@Injectable()
export class QuizAttemptService {
  constructor(
    @InjectRepository(QuizAttempt)
    private quizAttemptRepository: Repository<QuizAttempt>,
    private readonly userService: UserService, // Correctly inject UserService
    private readonly quizService: QuizService,
  ) {}

  async createAttempt(
    createQuizAttemptDto: CreateQuizAttemptDto,
  ): Promise<QuizAttempt> {
    const { userId, email, quizId, answers } = createQuizAttemptDto;

    let user: User | null = null;
    if (userId) {
      user = await this.userService.findOne(userId);
    }

    if (!user && !email) {
      throw new BadRequestException('Either userId or email must be provided');
    }

    const quiz = await this.quizService.findOne(quizId);
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

  async findAll(): Promise<QuizAttempt[]> {
    return this.quizAttemptRepository.find({ relations: ['user', 'quiz'] });
  }

  async findOne(id: number): Promise<QuizAttempt> {
    const attempt = await this.quizAttemptRepository.findOne({
      where: { index: id },
      relations: ['user', 'quiz'],
    });
    if (!attempt) {
      throw new NotFoundException(`QuizAttempt with ID ${id} not found`);
    }
    return attempt;
  }

  private calculateScore(quiz: Quiz, answers: any): number {
    // Implement your scoring logic here
    let score = 0;

    for (const question of quiz.questions) {
      const userAnswer = answers[question.index];
      if (question.answer && question.answer === userAnswer) {
        score += 1; // Assign points as needed
      }
    }

    return score;
  }
}
