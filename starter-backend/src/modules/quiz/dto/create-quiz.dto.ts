// src/dto/create-quiz.dto.ts
import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsIn,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateQuizQuestionDto } from '@App/modules/quiz-question/dto/create-quiz-question.dto';
import { CreateQuizSociologicalDataDto } from '@App/modules/quiz-sociological-data/dto/create-quiz-sociological-data.dto';
import { QuizAudioData } from '@App/modules/shared/types/quiz-audio-data.interface';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';

export class CreateQuizDto {
  @IsString()
  title: string;

  @IsString()
  identifier: string;

  @IsString()
  type: string;

  @IsString()
  description: string;

  @IsOptional()
  @ValidateNested()
  image?: QuizImageData;

  @IsOptional()
  @ValidateNested()
  audio?: QuizAudioData;

  @IsOptional()
  @IsIn(['draft', 'published', 'archived'])
  status?: 'draft' | 'published' | 'archived';

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizSociologicalDataDto)
  sociologicalData: CreateQuizSociologicalDataDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionDto)
  questions: CreateQuizQuestionDto[];

  @IsString()
  ownerId: string;
}
