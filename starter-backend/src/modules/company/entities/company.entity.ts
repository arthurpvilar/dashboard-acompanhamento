import { Job } from '@App/modules/job/entities/job.entity';
import { IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Column({ length: 255, unique: true })
  @IsString()
  @IsNotEmpty()
  email: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Column({ length: 18, unique: true })
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  segment: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  address: string;

  @Column({ length: 14 })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @Column({ length: 255 })
  @IsString()
  @IsNotEmpty()
  responsible: string;

  @Column('text')
  @IsString()
  @IsNotEmpty()
  companyBanner: string;

  @Column({ default: true })
  notifications: boolean;

  @Column({ default: false })
  silenced: boolean;

  @OneToMany(() => Job, (job) => job.company)
  jobs: Job[];
}
