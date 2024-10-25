import { QuizAttempt } from '@App/modules/quiz-attempt/entities/quiz-attempt.entity';
import { QuizQuestion } from '@App/modules/quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '@App/modules/quiz-sociological-data/entities/quiz-sociological-data.entity';
import { QuizAudioData } from '@App/shared/types/quiz-audio-data.interface';
import { QuizImageData } from '@App/shared/types/quiz-image-data.interface';
import { User } from '@App/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  title: string;

  @Column()
  identifier: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  category: string;

  @Column({ type: 'jsonb', nullable: true })
  image: QuizImageData;

  @Column({ type: 'jsonb', nullable: true })
  audio: QuizAudioData;

  @Column({ default: 'draft' })
  status: 'draft' | 'published' | 'archived';

  // Relação Many-to-Many entre Quiz e QuizSociologicalData
  @ManyToMany(() => QuizSociologicalData, (data) => data.quizzes, {
    cascade: false, // Mantendo cascade como false para controlar manualmente
  })
  @JoinTable({
    name: 'quiz_sociological_data_join',
    joinColumn: {
      name: 'quizId',
      referencedColumnName: 'index',
    },
    inverseJoinColumn: {
      name: 'sociologicalDataId',
      referencedColumnName: 'index',
    },
  })
  sociologicalData: QuizSociologicalData[];

  @OneToMany(() => QuizQuestion, (question) => question.quiz, {
    cascade: true,
  })
  questions: QuizQuestion[];

  @ManyToOne(() => User, (user) => user.quizzes, { nullable: false })
  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @OneToMany(() => QuizAttempt, (attempt) => attempt.quiz)
  attempts: QuizAttempt[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
