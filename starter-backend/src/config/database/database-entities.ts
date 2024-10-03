import { QuizQuestionAnswer } from '@App/modules/quiz-question-answer/entities/quiz-question-answer.entity';
import { QuizAttempt } from '../../modules/quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestionOption } from '../../modules/quiz-question-option/entities/quiz-question-option.entity';
import { QuizQuestion } from '../../modules/quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '../../modules/quiz-sociological-data/entities/quiz-sociological-data.entity';
import { Quiz } from '../../modules/quiz/entities/quiz.entity';
import { User } from '../../modules/user/entities/user.entity';

export const entities = [
  User,
  Quiz,
  QuizAttempt,
  QuizQuestion,
  QuizQuestionOption,
  QuizQuestionAnswer,
  QuizSociologicalData,
];
