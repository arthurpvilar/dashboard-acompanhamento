// src/modules/quiz.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizAttempt } from '../quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '../quiz-sociological-data/entities/quiz-sociological-data.entity';
import { User } from '../user/entities/user.entity';
import { Quiz } from './entities/quiz.entity';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Quiz,
      QuizQuestion,
      QuizQuestionOption,
      QuizSociologicalData,
      QuizAttempt,
      User,
    ]),
  ],
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
