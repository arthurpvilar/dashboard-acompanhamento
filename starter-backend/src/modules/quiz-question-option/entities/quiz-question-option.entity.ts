import { QuizQuestion } from '@App/modules/quiz-question/entities/quiz-question.entity';
import { QuizSociologicalData } from '@App/modules/quiz-sociological-data/entities/quiz-sociological-data.entity';
import { QuizImageData } from '@App/modules/shared/types/quiz-image-data.interface';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class QuizQuestionOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  isChecked: boolean;

  @Column({ nullable: true })
  weight: number;

  @Column({ type: 'jsonb', nullable: true })
  image: QuizImageData;

  @ManyToOne(() => QuizSociologicalData, (data) => data.options, {
    nullable: true,
  })
  @JoinColumn({ name: 'sociologicalId' })
  sociologicalData: QuizSociologicalData;

  @ManyToOne(() => QuizQuestion, (question) => question.options)
  @JoinColumn({ name: 'questionId' })
  question: QuizQuestion;
}
