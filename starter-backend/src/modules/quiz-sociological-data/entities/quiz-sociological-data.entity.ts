import { QuizQuestionOption } from '@App/modules/quiz-question-option/entities/quiz-question-option.entity';
import { Quiz } from '@App/modules/quiz/entities/quiz.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';

@Entity()
export class QuizSociologicalData {
  @PrimaryGeneratedColumn()
  index: number;

  @Column()
  name: string;

  @Column()
  color: string;

  @ManyToMany(() => Quiz, (quiz) => quiz.sociologicalData)
  quizzes: Quiz[];

  @OneToMany(() => QuizQuestionOption, (option) => option.sociologicalData)
  options: QuizQuestionOption[];
}
