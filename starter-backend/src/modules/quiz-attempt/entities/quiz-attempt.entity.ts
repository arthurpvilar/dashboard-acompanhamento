import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import { User } from '@App/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class QuizAttempt {
  @PrimaryGeneratedColumn()
  index: number;

  @ManyToOne(() => User, (user) => user.attempts, { nullable: true })
  @JoinColumn({ name: 'userId' })
  user: User | null;

  @Column({ nullable: true })
  email: string | null;

  @ManyToOne(() => Quiz, (quiz) => quiz.attempts)
  @JoinColumn({ name: 'quizId' })
  quiz: Quiz;

  @Column('jsonb')
  answers: any;

  @Column()
  score: number;

  @CreateDateColumn()
  attemptedAt: Date;
}
