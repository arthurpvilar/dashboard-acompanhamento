// src/app.module.ts
import { Module } from '@nestjs/common';
import { AuthModule } from '@App/modules/auth/auth.module';
import { QuizAttemptModule } from '@App/modules/quiz-attempt/quiz-attempt.module';
import { QuizQuestionOptionModule } from '@App/modules/quiz-question-option/quiz-question-option.module';
import { QuizQuestionModule } from '@App/modules/quiz-question/quiz-question.module';
import { QuizSociologicalDataModule } from '@App/modules/quiz-sociological-data/quiz-sociological-data.module';
import { QuizModule } from '@App/modules/quiz/quiz.module';
import { UserModule } from '@App/modules/user/user.module';
import { ConfigProvidersModule } from '@App/providers/environment/environment.module';
import { DatabaseModule } from '@App/providers/database/database.module';

@Module({
  imports: [
    ConfigProvidersModule,
    DatabaseModule,
    QuizModule,
    UserModule,
    AuthModule,
    QuizAttemptModule,
    QuizQuestionModule,
    QuizQuestionOptionModule,
    QuizSociologicalDataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
