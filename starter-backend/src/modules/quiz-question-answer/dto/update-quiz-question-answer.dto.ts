// src/quiz-question-answer/dto/update-quiz-question-answer.dto.ts
import { IsOptional, IsNumber, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuizQuestionAnswerDto {
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
