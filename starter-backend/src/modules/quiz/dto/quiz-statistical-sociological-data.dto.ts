import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsString } from 'class-validator';

export class QuizStatisticalSociologicalDataDto {
  @ApiPropertyOptional({ description: 'Sociological ID' })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({ description: 'Name of the sociological data' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'Color associated with the sociological data' })
  @IsString()
  color: string;

  @ApiPropertyOptional({
    description: 'Value from the sociological data statistical calculation',
  })
  @IsOptional()
  @IsNumber()
  value?: number;
}
