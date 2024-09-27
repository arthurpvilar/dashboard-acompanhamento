// src/quiz-attempt/dto/update-quiz-attempt.dto.ts
import { PartialType } from '@nestjs/swagger';
import { CreateQuizAttemptDto } from './create-quiz-attempt.dto';

export class UpdateQuizAttemptDto extends PartialType(CreateQuizAttemptDto) {}
