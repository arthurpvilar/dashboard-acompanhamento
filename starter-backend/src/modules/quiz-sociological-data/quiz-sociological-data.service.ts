// src/quiz-sociological-data/quiz-sociological-data.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizSociologicalDataDto } from './dto/create-quiz-sociological-data.dto';
import { UpdateQuizSociologicalDataDto } from './dto/update-quiz-sociological-data.dto';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizSociologicalData } from './entities/quiz-sociological-data.entity';

@Injectable()
export class QuizSociologicalDataService {
  constructor(
    @InjectRepository(QuizSociologicalData)
    private readonly sociologicalDataRepository: Repository<QuizSociologicalData>,
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>,
  ) {}

  async create(
    createDto: CreateQuizSociologicalDataDto,
  ): Promise<QuizSociologicalData> {
    const { ...rest } = createDto;

    const sociologicalData = this.sociologicalDataRepository.create(rest);
    return this.sociologicalDataRepository.save(sociologicalData);
  }

  async findAll(): Promise<QuizSociologicalData[]> {
    return this.sociologicalDataRepository.find();
  }

  async findOne(id: number): Promise<QuizSociologicalData> {
    const sociologicalData = await this.sociologicalDataRepository.findOne({
      where: { index: id },
    });
    if (!sociologicalData) {
      throw new NotFoundException(`SociologicalData with ID ${id} not found`);
    }
    return sociologicalData;
  }

  async update(
    id: number,
    updateDto: UpdateQuizSociologicalDataDto,
  ): Promise<QuizSociologicalData> {
    const sociologicalData = await this.sociologicalDataRepository.preload({
      id,
      ...updateDto,
    });

    if (!sociologicalData) {
      throw new NotFoundException(`SociologicalData with ID ${id} not found`);
    }

    return this.sociologicalDataRepository.save(sociologicalData);
  }

  async remove(id: number): Promise<void> {
    const result = await this.sociologicalDataRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`SociologicalData with ID ${id} not found`);
    }
  }
}
