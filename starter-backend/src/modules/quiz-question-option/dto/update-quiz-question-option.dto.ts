import { PartialType } from '@nestjs/swagger';
import { CreateQuizQuestionOptionDto } from './create-quiz-question-option.dto';

export class UpdateQuizQuestionOptionDto extends PartialType(
  CreateQuizQuestionOptionDto,
) {}
