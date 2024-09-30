import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateQuizSociologicalDataDto {
  @ApiPropertyOptional({ description: 'Quiz sociological data ID' })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({ description: 'Name of the sociological data' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Color associated with the sociological data' })
  @IsString()
  color: string;
}
