import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('desired_skills_user_data')
export class DesiredSkillUserData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @Column({ name: 'desired_skill_id' })
  @IsNumber()
  @IsNotEmpty()
  desiredSkillId: number;

  @Column({
    type: 'enum',
    enum: ['Básico', 'Intermediário', 'Avançado'],
    default: 'Basic',
  })
  @IsEnum(['Básico', 'Intermediário', 'Avançado'])
  desiredData: 'Básico' | 'Intermediário' | 'Avançado';
}
