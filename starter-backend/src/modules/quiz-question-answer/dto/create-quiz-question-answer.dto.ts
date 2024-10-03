// src/quiz-question-answer/dto/create-quiz-question-answer.dto.ts
import { IsNotEmpty, IsOptional, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizQuestionAnswerDto {
  @ApiProperty({ description: 'ID da tentativa', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  attemptId: number;

  @ApiProperty({ description: 'ID da pergunta', example: 42 })
  @IsNotEmpty()
  @IsNumber()
  questionId: number;

  @ApiProperty({ description: 'ID da opção selecionada', example: 3, required: false })
  @IsOptional()
  @IsNumber()
  optionId?: number;

  @ApiProperty({ description: 'Data e hora de início', required: false })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  startedAt?: Date;

  @ApiProperty({ description: 'Data e hora de conclusão', required: false })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  completedAt?: Date;
}
