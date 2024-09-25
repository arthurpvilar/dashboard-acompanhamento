import { PartialType } from '@nestjs/mapped-types';
import { CreateCandidateDto } from './create-candidate.dto';
import {
  IsEnum,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCandidateDto extends PartialType(CreateCandidateDto) {
  @ApiProperty({
    description: 'Nome do candidato',
    maxLength: 255,
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Status da candidatura',
    enum: ['Applied', 'Interviewing', 'Hired', 'Rejected'],
    required: false,
  })
  @IsOptional()
  @IsEnum(['Applied', 'Interviewing', 'Hired', 'Rejected'])
  applicationStatus?: 'Applied' | 'Interviewing' | 'Hired' | 'Rejected';

  @ApiProperty({
    description: 'Localização do candidato',
    maxLength: 255,
    required: false,
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({
    description: 'Data da candidatura',
    type: String,
    format: 'date-time',
    required: false,
  })
  @IsOptional()
  @IsDateString()
  applicationDate?: Date;

  @ApiProperty({
    description: 'Compatibilidade do candidato',
    type: Number,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  compatibility?: number;
}
