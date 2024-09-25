import { TechnicalSkillUserData } from '@App/modules/technical-skills-user-data/entities/technical-skills-user-data.entity';
import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('technical-skill')
export class TechnicalSkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsString()
  name: string;

  @OneToMany(
    () => TechnicalSkillUserData,
    (userData) => userData.technicalSkill,
  )
  userData: TechnicalSkillUserData[];
}
