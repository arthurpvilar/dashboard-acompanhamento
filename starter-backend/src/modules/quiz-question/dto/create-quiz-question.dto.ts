// src/quiz-question/dto/create-quiz-question.dto.ts
import {
  IsString,
  IsOptional,
  IsArray,
  ValidateNested,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateQuizQuestionOptionDto } from '@App/modules/quiz-question-option/dto/create-quiz-question-option.dto';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';
import { QuizAudioData } from '@App/modules/shared/types/quiz-audio-data.interface';

export class CreateQuizQuestionDto {
  @ApiProperty({ description: 'Type of the question' })
  @IsString()
  type: string;

  @ApiPropertyOptional({ description: 'Question text' })
  @IsOptional()
  @IsString()
  question?: string;

  @ApiPropertyOptional({ description: 'Answer to the question' })
  @IsOptional()
  @IsString()
  answer?: string;

  @ApiPropertyOptional({ description: 'Image URL for the question' })
  @ValidateNested()
  @IsOptional()
  image?: QuizImageData;

  @ApiPropertyOptional({ description: 'Audio URL for the question' })
  @ValidateNested()
  @IsOptional()
  audio?: QuizAudioData;

  @ApiPropertyOptional({
    type: [CreateQuizQuestionOptionDto],
    description: 'Options for the question',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionOptionDto)
  options?: CreateQuizQuestionOptionDto[];

  @ApiPropertyOptional({
    type: [CreateQuizQuestionDto],
    description: 'Sub-questions',
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionDto)
  subQuestions?: CreateQuizQuestionDto[];

  @ApiPropertyOptional({ description: 'Parent question ID' })
  @IsOptional()
  @IsNumber()
  parentQuestionId?: number;

  @ApiPropertyOptional({ description: 'Quiz ID' })
  @IsOptional()
  @IsNumber()
  quizId?: number;
}
