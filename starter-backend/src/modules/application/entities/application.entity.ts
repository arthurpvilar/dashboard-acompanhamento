import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Job } from '@App/modules/job/entities/job.entity';
import { Candidate } from '@App/modules/candidate/entities/candidate.entity';

@Entity({ name: 'applications' })
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, name: 'company_id' })
  @IsString()
  @IsNotEmpty()
  companyId: string;

  @Column({ nullable: true, name: 'job_id' })
  @IsNotEmpty()
  jobId: number;

  @ManyToOne(() => Job, (job) => job.applications, { nullable: false })
  job: Job;

  @ManyToOne(() => Candidate, (candidate) => candidate.applications, { nullable: false })
  candidate: Candidate;
  
  @Column('decimal', { precision: 5, scale: 2 })
  @IsNumber()
  @IsNotEmpty()
  compatibility: number;

  @CreateDateColumn({ name: 'assign_date', type: 'timestamp' })
  assignDate: Date;

  @Column({
    type: 'enum',
    enum: ['Em Andamento', 'Cancelada', 'Finalizada'],
    default: 'Em Andamento',
  })
  status: 'Em Andamento' | 'Cancelada' | 'Finalizada';
}
