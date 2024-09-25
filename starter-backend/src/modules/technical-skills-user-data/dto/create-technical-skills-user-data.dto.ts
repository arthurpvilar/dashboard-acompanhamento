import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateTechnicalSkillUserDataDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  technicalSkillId: number;

  @IsEnum(['Básico', 'Intermediário', 'Avançado'])
  technicalData: 'Básico' | 'Intermediário' | 'Avançado';
}
