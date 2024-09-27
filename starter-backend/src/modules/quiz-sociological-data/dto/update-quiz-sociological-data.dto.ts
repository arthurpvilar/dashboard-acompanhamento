import { PartialType } from '@nestjs/swagger';
import { CreateQuizSociologicalDataDto } from './create-quiz-sociological-data.dto';

export class UpdateQuizSociologicalDataDto extends PartialType(
  CreateQuizSociologicalDataDto,
) {}
