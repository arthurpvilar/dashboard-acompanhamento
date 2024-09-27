// src/quiz-question-option/quiz-question-option.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestionOptionService } from './quiz-question-option.service';
import { QuizQuestionOptionController } from './quiz-question-option.controller';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '../quiz-sociological-data/entities/quiz-sociological-data.entity';
import { QuizQuestionOption } from './entities/quiz-question-option.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuizQuestionOption,
      QuizQuestion,
      QuizSociologicalData,
    ]),
  ],
  controllers: [QuizQuestionOptionController],
  providers: [QuizQuestionOptionService],
  exports: [QuizQuestionOptionService],
})
export class QuizQuestionOptionModule {}
