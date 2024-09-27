// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@App/modules/auth/auth.module';
import { QuizAttemptModule } from '@App/modules/quiz-attempt/quiz-attempt.module';
import { QuizQuestionOptionModule } from '@App/modules/quiz-question-option/quiz-question-option.module';
import { QuizQuestionModule } from '@App/modules/quiz-question/quiz-question.module';
import { QuizSociologicalDataModule } from '@App/modules/quiz-sociological-data/quiz-sociological-data.module';
import { QuizModule } from '@App/modules/quiz/quiz.module';
import { UserModule } from '@App/modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(/* TypeORM configuration */),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    QuizModule,
    UserModule,
    AuthModule,
    QuizAttemptModule,
    QuizQuestionModule,
    QuizQuestionOptionModule,
    QuizSociologicalDataModule,
  ],
})
export class AppModule {}
