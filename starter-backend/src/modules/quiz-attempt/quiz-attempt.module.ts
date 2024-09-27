// src/quiz-attempt/quiz-attempt.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizAttemptService } from './quiz-attempt.service';
import { QuizAttemptController } from './quiz-attempt.controller';
import { QuizAttempt } from './entities/quiz-attempt.entity';
import { QuizModule } from '../quiz/quiz.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([QuizAttempt]), UserModule, QuizModule],
  controllers: [QuizAttemptController],
  providers: [QuizAttemptService],
  exports: [QuizAttemptService],
})
export class QuizAttemptModule {}
