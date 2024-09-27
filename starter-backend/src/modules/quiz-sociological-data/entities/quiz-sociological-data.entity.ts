import { QuizQuestionOption } from '@App/modules/quiz-question-option/entities/quiz-question-option.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity()
export class QuizSociologicalData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  value: number;

  @Column()
  color: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.sociologicalData)
  @JoinColumn({ name: 'quizId' })
  quiz: Quiz;

  @OneToMany(() => QuizQuestionOption, (option) => option.sociologicalData)
  options: QuizQuestionOption[];
}
