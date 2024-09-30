// src/quiz-question-option/quiz-question-option.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizQuestionOptionDto } from './dto/create-quiz-question-option.dto';
import { UpdateQuizQuestionOptionDto } from './dto/update-quiz-question-option.dto';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '../quiz-sociological-data/entities/quiz-sociological-data.entity';
import { QuizQuestionOption } from './entities/quiz-question-option.entity';

@Injectable()
export class QuizQuestionOptionService {
  constructor(
    @InjectRepository(QuizQuestionOption)
    private readonly quizQuestionOptionRepository: Repository<QuizQuestionOption>,
    @InjectRepository(QuizQuestion)
    private readonly quizQuestionRepository: Repository<QuizQuestion>,
    @InjectRepository(QuizSociologicalData)
    private readonly sociologicalDataRepository: Repository<QuizSociologicalData>,
  ) {}

  async create(
    createQuizQuestionOptionDto: CreateQuizQuestionOptionDto,
  ): Promise<QuizQuestionOption> {
    const { ...rest } = createQuizQuestionOptionDto;

    const option = this.quizQuestionOptionRepository.create(rest);

    return this.quizQuestionOptionRepository.save(option);
  }

  async findAll(): Promise<QuizQuestionOption[]> {
    return this.quizQuestionOptionRepository.find({
      relations: ['question', 'sociologicalData'],
    });
  }

  async findOne(id: number): Promise<QuizQuestionOption> {
    const option = await this.quizQuestionOptionRepository.findOne({
      where: { index: id },
      relations: ['question', 'sociologicalData'],
    });
    if (!option) {
      throw new NotFoundException(`QuizQuestionOption with ID ${id} not found`);
    }
    return option;
  }

  async update(
    id: number,
    updateDto: UpdateQuizQuestionOptionDto,
  ): Promise<QuizQuestionOption> {
    const option = await this.quizQuestionOptionRepository.preload({
      index: id,
      ...updateDto,
    });

    if (!option) {
      throw new NotFoundException(`QuizQuestionOption with ID ${id} not found`);
    }
    
    if (updateDto.sociologicalId) {
      const sociologicalData = await this.sociologicalDataRepository.findOne({
        where: { index: updateDto.sociologicalId },
      });
      if (!sociologicalData) {
        throw new NotFoundException(
          `SociologicalData with ID ${updateDto.sociologicalId} not found`,
        );
      }
      option.sociologicalData = sociologicalData;
    }

    return this.quizQuestionOptionRepository.save(option);
  }

  async remove(id: number): Promise<void> {
    const result = await this.quizQuestionOptionRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`QuizQuestionOption with ID ${id} not found`);
    }
  }
}
