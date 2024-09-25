import { IsEnum, IsNotEmpty } from 'class-validator';

export class UpdateDesiredSkillUserDataDto {
  @IsNotEmpty()
  desiredSkillId: number;

  @IsEnum(['Básico', 'Intermediário', 'Avançado'])
  desiredData: 'Básico' | 'Intermediário' | 'Avançado';
}
