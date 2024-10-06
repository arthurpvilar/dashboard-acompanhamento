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
import { QuizAudioData } from '@App/modules/shared/types/quiz-audio-data.interface';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';

export class CreateQuizQuestionDto {
  @ApiProperty({
    description: 'Tipo da pergunta (ex: múltipla escolha, verdadeiro/falso)',
    example: 'multiple-choice',
  })
  @IsOptional()
  @IsString()
  type: string;

  @ApiPropertyOptional({
    description: 'Texto da pergunta',
    example: 'Qual é a capital da França?',
  })
  @IsOptional()
  @IsString()
  question?: string;

  @ApiPropertyOptional({
    description: 'Resposta correta da pergunta',
    example: 'Paris',
  })
  @IsOptional()
  @IsString()
  answer?: string;

  @ApiPropertyOptional({
    description: 'Dados da imagem associados à pergunta',
    type: () => QuizImageData,
  })
  @ValidateNested()
  @Type(() => QuizImageData)
  @IsOptional()
  image?: QuizImageData;

  @ApiPropertyOptional({
    description: 'Dados de áudio associados à pergunta',
    type: () => QuizAudioData,
  })
  @ValidateNested()
  @Type(() => QuizAudioData)
  @IsOptional()
  audio?: QuizAudioData;

  @ApiPropertyOptional({
    description: 'Opções disponíveis para a pergunta',
    type: [CreateQuizQuestionOptionDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionOptionDto)
  options?: CreateQuizQuestionOptionDto[];

  @ApiPropertyOptional({
    description: 'Sub-perguntas relacionadas a esta pergunta',
    type: [CreateQuizQuestionDto],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateQuizQuestionDto)
  subQuestions?: CreateQuizQuestionDto[];

  @ApiPropertyOptional({
    description: 'ID da pergunta pai, se esta for uma sub-pergunta',
    example: 1,
  })
  @IsOptional()
  @IsNumber()
  parentQuestionId?: number;

  @ApiPropertyOptional({
    description: 'ID do quiz ao qual esta pergunta pertence',
    example: 5,
  })
  @IsOptional()
  @IsNumber()
  quizId?: number;
}
