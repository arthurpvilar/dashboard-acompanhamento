// src/dto/update-quiz.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateQuizDto } from './create-quiz.dto';
import { IsOptional, IsIn } from 'class-validator';

export class UpdateQuizDto extends PartialType(CreateQuizDto) {
  @IsOptional()
  @IsIn(['draft', 'published', 'archived'])
  status?: 'draft' | 'published' | 'archived';
}
