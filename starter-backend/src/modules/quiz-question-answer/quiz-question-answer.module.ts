// src/quiz-question-answer/quiz-question-answer.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizQuestionAnswerService } from './quiz-question-answer.service';
import { QuizQuestionAnswerController } from './quiz-question-answer.controller';
import { QuizQuestionAnswer } from './entities/quiz-question-answer.entity';
import { QuizAttempt } from '../quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { QuizModule } from '../quiz/quiz.module';
import { User } from '../user/entities/user.entity';
import { Quiz } from '../quiz/entities/quiz.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Quiz,
      User,
      QuizAttempt,
      QuizQuestion,
      QuizQuestionOption,
      QuizQuestionAnswer,
    ]),
    QuizModule,
  ],
  controllers: [QuizQuestionAnswerController],
  providers: [QuizQuestionAnswerService],
})
export class QuizQuestionAnswerModule {}