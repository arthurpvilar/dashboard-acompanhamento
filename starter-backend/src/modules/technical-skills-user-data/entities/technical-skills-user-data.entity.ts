import { TechnicalSkill } from '@App/modules/technical-skills/entities/technical-skill.entity';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('technical_skills_user_data')
export class TechnicalSkillUserData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id' })
  @IsString()
  userId: string;

  @Column({ name: 'technical_skill_id' })
  @IsNumber()
  technicalSkillId: number;

  @ManyToOne(() => TechnicalSkill, (technicalSkill) => technicalSkill.userData)
  technicalSkill: TechnicalSkill;

  @Column({
    type: 'enum',
    enum: ['Básico', 'Intermediário', 'Avançado'],
    default: 'Basic',
  })
  @IsEnum(['Básico', 'Intermediário', 'Avançado'])
  technicalData: 'Básico' | 'Intermediário' | 'Avançado';
}
