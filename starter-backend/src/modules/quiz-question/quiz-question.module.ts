// src/quiz-question/quiz-question.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestionService } from './quiz-question.service';
import { QuizQuestionController } from './quiz-question.controller';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { Quiz } from '../quiz/entities/quiz.entity';
import { QuizQuestion } from './entities/quiz-question.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuizQuestion, QuizQuestionOption, Quiz])],
  controllers: [QuizQuestionController],
  providers: [QuizQuestionService],
  exports: [QuizQuestionService],
})
export class QuizQuestionModule {}
