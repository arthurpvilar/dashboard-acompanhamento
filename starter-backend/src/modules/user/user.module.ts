// src/user/user.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { QuizAttemptModule } from '../quiz-attempt/quiz-attempt.module';
import { QuizAttempt } from '../quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestionAnswer } from '../quiz-question-answer/entities/quiz-question-answer.entity';
import { QuizQuestionOption } from '../quiz-question-option/entities/quiz-question-option.entity';
import { QuizQuestion } from '../quiz-question/entities/quiz-question.entity';
import { Quiz } from '../quiz/entities/quiz.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, QuizAttempt, Quiz, QuizQuestionAnswer, QuizQuestion, QuizQuestionOption]),
    UserModule, // Certifique-se de que o UserModule está importado
    ConfigModule,
    forwardRef(() => QuizAttemptModule), // Include QuizAttemptModule if necessary
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
