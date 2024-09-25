import { IsNotEmpty, IsString, IsEnum, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
  @ApiProperty({ description: 'Nome do candidato', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Status da candidatura',
    enum: ['Applied', 'Interviewing', 'Hired', 'Rejected'],
    default: 'Applied',
  })
  @IsEnum(['Applied', 'Interviewing', 'Hired', 'Rejected'])
  @IsNotEmpty()
  applicationStatus: 'Applied' | 'Interviewing' | 'Hired' | 'Rejected';

  @ApiProperty({ description: 'Localização do candidato', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  location: string;

  @ApiProperty({
    description: 'Data da candidatura',
    type: String,
    format: 'date-time',
  })
  @IsNotEmpty()
  applicationDate: Date;

  @ApiProperty({ description: 'Compatibilidade do candidato', type: Number })
  @IsNumber()
  @IsNotEmpty()
  compatibility: number;
}
