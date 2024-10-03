// src/quiz-question-answer/quiz-question-answer.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizQuestionAnswer } from './entities/quiz-question-answer.entity';
import { CreateQuizQuestionAnswerDto } from './dto/create-quiz-question-answer.dto';
import { UpdateQuizQuestionAnswerDto } from './dto/update-quiz-question-answer.dto';
import { QuizAttempt } from '../quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { User } from '../user/entities/user.entity';
import { Quiz } from '../quiz/entities/quiz.entity';

@Injectable()
export class QuizQuestionAnswerService {
  constructor(
    @InjectRepository(QuizQuestionAnswer)
    private readonly quizQuestionAnswerRepository: Repository<QuizQuestionAnswer>,

    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(QuizAttempt)
    private readonly quizAttemptRepository: Repository<QuizAttempt>,

    @InjectRepository(QuizQuestion)
    private readonly quizQuestionRepository: Repository<QuizQuestion>,

    @InjectRepository(QuizQuestionOption)
    private readonly quizQuestionOptionRepository: Repository<QuizQuestionOption>,
  ) {}

  async create(createDto: CreateQuizQuestionAnswerDto): Promise<QuizQuestionAnswer> {
    const { attemptId, questionId, optionId, startedAt, completedAt } = createDto;

    // Verifica se o QuizAttempt existe
    const attempt = await this.quizAttemptRepository.findOne({ where: { index: attemptId } });
    if (!attempt) {
      throw new NotFoundException(`Tentativa com ID ${attemptId} não encontrada.`);
    }

    // Verifica se o QuizQuestion existe
    const question = await this.quizQuestionRepository.findOne({ where: { index: questionId } });
    if (!question) {
      throw new NotFoundException(`Pergunta com ID ${questionId} não encontrada.`);
    }

    // Verifica se o QuizQuestionOption existe, se fornecido
    let option: QuizQuestionOption = null;
    if (optionId) {
      option = await this.quizQuestionOptionRepository.findOne({ where: { index: optionId } });
      if (!option) {
        throw new NotFoundException(`Opção com ID ${optionId} não encontrada.`);
      }
    }

    const answer = this.quizQuestionAnswerRepository.create({
      attempt,
      question,
      option,
      startedAt,
      completedAt,
    });

    return await this.quizQuestionAnswerRepository.save(answer);
  }

  async update(id: number, updateDto: UpdateQuizQuestionAnswerDto): Promise<QuizQuestionAnswer> {
    const answer = await this.quizQuestionAnswerRepository.findOne({
      where: { index: id },
      relations: ['option'],
    });

    if (!answer) {
      throw new NotFoundException(`Resposta com ID ${id} não encontrada.`);
    }

    const { optionId, startedAt, completedAt } = updateDto;

    if (optionId !== undefined) {
      if (optionId === null) {
        answer.option = null;
      } else {
        const option = await this.quizQuestionOptionRepository.findOne({ where: { index: optionId } });
        if (!option) {
          throw new NotFoundException(`Opção com ID ${optionId} não encontrada.`);
        }
        answer.option = option;
      }
    }

    if (startedAt !== undefined) {
      answer.startedAt = startedAt;
    }

    if (completedAt !== undefined) {
      answer.completedAt = completedAt;
    }

    return await this.quizQuestionAnswerRepository.save(answer);
  }

  async findOrCreateAttempt(
    quizId: number,
    userId?: string,
    email?: string,
  ): Promise<QuizAttempt> {
    if (!userId && !email) {
      throw new Error('É necessário fornecer um userId ou email.');
    }
  
    const whereCondition: any = { quiz: { index: quizId }, isCompleted: false };
  
    if (userId) {
      whereCondition.user = { index: userId };
    } else {
      whereCondition.email = email;
    }
  
    let attempt = await this.quizAttemptRepository.findOne({
      where: whereCondition,
      relations: ['quiz', 'quiz.questions', 'answers'],
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
}
