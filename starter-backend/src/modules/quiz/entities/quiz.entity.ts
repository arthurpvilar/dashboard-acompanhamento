import { QuizAttempt } from '@App/modules/quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestion } from '@App/modules/quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '@App/modules/quiz-sociological-data/entities/quiz-sociological-data.entity';
import { QuizAudioData } from '@App/modules/shared/types/quiz-audio-data.interface';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';
import { User } from '@App/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  identifier: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column({ type: 'jsonb', nullable: true })
  image: QuizImageData;

  @Column({ type: 'jsonb', nullable: true })
  audio: QuizAudioData;

  @Column({ default: 'draft' })
  status: 'draft' | 'published' | 'archived';

  @OneToMany(() => QuizSociologicalData, (data) => data.quiz, { cascade: true })
  sociologicalData: QuizSociologicalData[];

  @OneToMany(() => QuizQuestion, (question) => question.quiz, { cascade: true })
  questions: QuizQuestion[];

  @ManyToOne(() => User, (user) => user.quizzes)
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @OneToMany(() => QuizAttempt, (attempt) => attempt.quiz)
  attempts: QuizAttempt[];
}
