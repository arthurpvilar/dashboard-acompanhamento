import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateTechnicalSkillUserDataDto {
  @IsNotEmpty()
  technicalSkillId: number;

  @IsEnum(['Básico', 'Intermediário', 'Avançado'])
  technicalData: 'Básico' | 'Intermediário' | 'Avançado';
}
