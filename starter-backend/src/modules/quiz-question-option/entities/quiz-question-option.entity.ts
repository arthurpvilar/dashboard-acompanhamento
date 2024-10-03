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
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity()
export class QuizQuestionOption {
  @ApiProperty({
    description: 'ID único da opção de pergunta',
    example: 1,
  })
  @PrimaryGeneratedColumn()
  index: number;

  @ApiProperty({
    description: 'Título da opção',
    example: 'Opção A',
  })
  @Column()
  title: string;

  @ApiProperty({
    description: 'Indica se a opção está marcada por padrão',
    default: false,
  })
  @Column({ default: false })
  isChecked: boolean;

  @ApiPropertyOptional({
    description: 'Peso da opção na pontuação',
    example: 10,
  })
  @Column({ nullable: true })
  weight: number;

  @ApiPropertyOptional({
    description: 'Dados da imagem associados à opção',
    type: () => QuizImageData,
  })
  @Column({ type: 'jsonb', nullable: true })
  image: QuizImageData;

  @ApiProperty({
    description: 'Dados sociológicos associados à opção',
    type: () => QuizSociologicalData,
  })
  @ManyToOne(() => QuizSociologicalData, (data) => data.options, {
    nullable: false,
  })
  @JoinColumn({ name: 'sociologicalId' })
  sociologicalData: QuizSociologicalData;

  @ApiPropertyOptional({
    description: 'Pergunta à qual esta opção pertence',
    type: () => QuizQuestion,
  })
  @ManyToOne(() => QuizQuestion, (question) => question.options, {
    nullable: true,
  })
  @JoinColumn({ name: 'questionId' })
  question: QuizQuestion;
}
