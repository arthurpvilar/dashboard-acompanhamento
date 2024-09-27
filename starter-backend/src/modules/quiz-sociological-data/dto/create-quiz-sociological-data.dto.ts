import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQuizSociologicalDataDto {
  @ApiProperty({ description: 'Name of the sociological data' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Value of the sociological data' })
  @IsNumber()
  value: number;

  @ApiProperty({ description: 'Color associated with the sociological data' })
  @IsString()
  color: string;

  @ApiPropertyOptional({ description: 'Quiz ID' })
  @IsOptional()
  @IsNumber()
  quizId?: number;
}
