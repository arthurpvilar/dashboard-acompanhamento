// src/quiz-question/quiz-question.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizQuestionDto } from './dto/create-quiz-question.dto';
import { UpdateQuizQuestionDto } from './dto/update-quiz-question.dto';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizQuestion } from './entities/quiz-question.entity';

@Injectable()
export class QuizQuestionService {
  constructor(
    @InjectRepository(QuizQuestion)
    private readonly quizQuestionRepository: Repository<QuizQuestion>,
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
    @InjectRepository(QuizQuestionOption)
    private readonly quizQuestionOptionRepository: Repository<QuizQuestionOption>,
  ) {}

  async create(
    createQuizQuestionDto: CreateQuizQuestionDto,
  ): Promise<QuizQuestion> {
    const { quizId, options, ...rest } = createQuizQuestionDto;

    const quizQuestion = this.quizQuestionRepository.create(rest);

    if (quizId) {
      const quiz = await this.quizRepository.findOne({
        where: { index: quizId },
      });
      if (!quiz) {
        throw new NotFoundException(`Quiz with ID ${quizId} not found`);
      }
      quizQuestion.quiz = quiz;
    }

    /*
    if (parentQuestionId) {
      const parentQuestion = await this.quizQuestionRepository.findOne({
        where: { id: parentQuestionId },
      });
      if (!parentQuestion) {
        throw new NotFoundException(
          `Parent question with ID ${parentQuestionId} not found`,
        );
      }
      quizQuestion.parentQuestion = parentQuestion;
    }
      */

    if (options && options.length > 0) {
      const createdOptions = options.map((optionDto) =>
        this.quizQuestionOptionRepository.create(optionDto),
      );
      quizQuestion.options =
        await this.quizQuestionOptionRepository.save(createdOptions);
    }

    /*
    if (subQuestions && subQuestions.length > 0) {
      const createdSubQuestions = subQuestions.map((subQuestionDto) =>
        this.quizQuestionRepository.create({
          ...subQuestionDto,
          parentQuestion: quizQuestion,
        }),
      );
      quizQuestion.subQuestions =
        await this.quizQuestionRepository.save(createdSubQuestions);
    }
    */

    return this.quizQuestionRepository.save(quizQuestion);
  }

  async findAll(): Promise<QuizQuestion[]> {
    return this.quizQuestionRepository.find({
      relations: ['options', 'subQuestions', 'quiz', 'parentQuestion'],
    });
  }

  async findOne(id: number): Promise<QuizQuestion> {
    const quizQuestion = await this.quizQuestionRepository.findOne({
      where: { index: id },
      relations: ['options', 'subQuestions', 'quiz', 'parentQuestion'],
    });
    if (!quizQuestion) {
      throw new NotFoundException(`QuizQuestion with ID ${id} not found`);
    }
    return quizQuestion;
  }

  async update(
    id: number,
    updateQuizQuestionDto: UpdateQuizQuestionDto,
  ): Promise<QuizQuestion> {
    const { options, ...rest } = updateQuizQuestionDto;

    const quizQuestion = await this.quizQuestionRepository.preload({
      index: id,
      ...rest,
    });

    if (!quizQuestion) {
      throw new NotFoundException(`QuizQuestion with ID ${id} not found`);
    }

    if (options) {
      await this.quizQuestionOptionRepository.delete({ question: { index: id } });
      const updatedOptions = options.map((optionDto) =>
        this.quizQuestionOptionRepository.create({
          ...optionDto,
          question: quizQuestion,
        }),
      );
      quizQuestion.options =
        await this.quizQuestionOptionRepository.save(updatedOptions);
    }

    /*
    if (subQuestions) {
      await this.quizQuestionRepository.delete({ parentQuestion: { id } });
      const updatedSubQuestions = subQuestions.map((subQuestionDto) =>
        this.quizQuestionRepository.create({
          ...subQuestionDto,
          parentQuestion: quizQuestion,
        }),
      );
      quizQuestion.subQuestions =
        await this.quizQuestionRepository.save(updatedSubQuestions);
    }
    */
    return this.quizQuestionRepository.save(quizQuestion);
  }

  async remove(id: number): Promise<void> {
    const result = await this.quizQuestionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`QuizQuestion with ID ${id} not found`);
    }
  }
}
