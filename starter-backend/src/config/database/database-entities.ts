import { QuizAttempt } from '@App/modules/quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestionOption } from '@App/modules/quiz-question-option/entities/quiz-question-option.entity';
import { QuizQuestion } from '@App/modules/quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '@App/modules/quiz-sociological-data/entities/quiz-sociological-data.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import { User } from '@App/modules/user/entities/user.entity';

export const entities = [
  User,
  Quiz,
  QuizAttempt,
  QuizQuestion,
  QuizQuestionOption,
  QuizSociologicalData,
];
