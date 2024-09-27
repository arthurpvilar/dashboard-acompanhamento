// src/quiz-sociological-data/quiz-sociological-data.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizSociologicalDataService } from './quiz-sociological-data.service';
import { QuizSociologicalDataController } from './quiz-sociological-data.controller';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizSociologicalData } from './entities/quiz-sociological-data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizSociologicalData, Quiz])],
  controllers: [QuizSociologicalDataController],
  providers: [QuizSociologicalDataService],
  exports: [QuizSociologicalDataService],
})
export class QuizSociologicalDataModule {}
