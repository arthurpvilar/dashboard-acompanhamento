import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  IsArray,
  IsDateString,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateJobDto {
  @ApiProperty({ description: 'ID da empresa oferecendo a vaga', type: String })
  @IsNotEmpty()
  @IsString()
  companyId: string;

  @ApiProperty({ description: 'O título da vaga', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  title: string;

  @ApiProperty({ description: 'Título do cargo', maxLength: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  jobTitle: string;

  @ApiProperty({ description: 'Descrição detalhada da vaga' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'Atividades a desempenhar', type: String })
  @IsString()
  @IsNotEmpty()
  activities: string;

  @ApiProperty({
    description: 'Benefícios oferecidos',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  benefits: string;

  @ApiProperty({
    description: 'Remuneração oferecida',
    type: Number,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  remuneration: number;

  @ApiProperty({
    description: 'Local do contrato (Remoto, Híbrido, Presencial)',
    enum: ['Remoto', 'Híbrido', 'Presencial'],
  })
  @IsEnum(['Remoto', 'Híbrido', 'Presencial'])
  contractLocation: 'Remoto' | 'Híbrido' | 'Presencial';

  @ApiProperty({ description: 'Jornada de trabalho', type: Number })
  @IsNotEmpty()
  @IsNumber()
  workSchedule: number;

  @ApiProperty({
    description: 'Modelo de contrato (Estágio, Bolsa, CLT, CNPJ)',
    enum: ['Estágio', 'Bolsa', 'CLT', 'CNPJ'],
  })
  @IsEnum(['Estágio', 'Bolsa', 'CLT', 'CNPJ'])
  contractModel: 'Estágio' | 'Bolsa' | 'CLT' | 'CNPJ';

  @ApiProperty({ description: 'Estado de localização', type: String })
  @IsString()
  @IsNotEmpty()
  locationEstate: string;

  @ApiProperty({ description: 'Cidade de localização', type: String })
  @IsString()
  @IsNotEmpty()
  locationCity: string;

  @ApiProperty({ description: 'Grau acadêmico', type: String })
  @IsString()
  @IsNotEmpty()
  academicDegree: string;

  @ApiProperty({ description: 'Área de especialização', type: String })
  @IsString()
  @IsNotEmpty()
  fieldOfExpertise: string;

  @ApiProperty({
    description: 'Tempo de experiência de trabalho',
    type: Number,
  })
  @IsNumber()
  @IsNotEmpty()
  workExperienceTime: number;

  @ApiProperty({ description: 'Habilidades técnicas', type: [String] })
  @IsArray()
  @IsString({ each: true })
  technicalSkills: string[];

  @ApiProperty({
    description: 'Habilidades desejadas',
    type: [String],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  desiredSkills: string[];

  @ApiProperty({
    description: 'Diferenciais considerados',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  consideredDifferentiators: string;

  @ApiProperty({
    description: 'Data de início',
    type: String,
    format: 'date-time',
  })
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'Data de término',
    type: String,
    format: 'date-time',
  })
  @IsNotEmpty()
  @IsDateString()
  endDate: string;

  @ApiProperty({
    description: 'Necessidade de experiência anterior',
    type: Boolean,
  })
  @IsBoolean()
  @IsNotEmpty()
  needPreviousExperience: boolean;

  @ApiProperty({
    description: 'Necessidade de realocação',
    type: Boolean,
  })
  @IsBoolean()
  @IsNotEmpty()
  reallocationNeeded: boolean;

  @ApiProperty({
    description: 'Visualizações da vaga',
    type: Number,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  views: number;

  @ApiProperty({
    description: 'Status da vaga (Open, Closed, Cancelled, Finished)',
    enum: ['Open', 'Closed', 'Cancelled', 'Finished'],
  })
  @IsEnum(['Open', 'Closed', 'Cancelled', 'Finished'])
  status: 'Open' | 'Closed' | 'Cancelled' | 'Finished';
}
