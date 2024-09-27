import type { ThemeColor } from '@/@core/types'
import type { UsersType } from './userTypes'


//export type Attempt = {
//  userId: number;
//  completion: number;
//  date: string;
//};

// Blueprint for a quiz
export type Quiz = {
  id: number // Unique identifier
  title: string // Title of the quiz
  identifier: string // Identifier of the quiz
  type: string // Type of the quiz
  description: string // Description of the quiz
  image: QuizImageData | null // Imagem of the quiz
  audio: QuizAudioData | null // Imagem of the quiz
  sociologicalData: QuizSociologicalData[] // List of sociological data in the quiz
  questions: QuizQuestion[] // List of questions in the quiz
  owner: UsersType // Quiz owner
}

// Represents an individual question in a quiz
export type QuizQuestion = {
  id: number // Unique identifier for the question
  type: string // The question type
  question?: string // The question text
  options?: QuizQuestionOption[] // Array of possible answers
  answer?: string // Correct answer
  image: QuizImageData | null // Adiciona o campo de imagem
  audio: QuizAudioData | null // Adiciona o campo de áudio
  subQuestions?: QuizQuestion[] // Nested sub-questions
}

export type QuizQuestionOption = {
  title: string
  isChecked: boolean
  weight?: number // Question's weight in scoring
  sociologicalId?: number // Sociological data reference
  image?: QuizImageData // Adiciona o campo de imagem à opção
}

// Nova interface para armazenar dados de imagem
export type QuizImageData = {
  imageUrl: string | null;
  imageFile: File | null;
  blobData?: Blob | null;
}

// Nova interface para armazenar dados do áudio
export type QuizAudioData = {
  audioUrl: string;
  audioFile: File | null;
  blobData: Blob | null;
}

// Sociological metadata for quizzes
export type QuizSociologicalData = {
  id: number // Unique identifier for sociological data
  name: string // Sociological category name
  value: number // value for the category
  color: ThemeColor // Associated color for the category
}

export type QuizType = {
  quizzes: Quiz[]
}
