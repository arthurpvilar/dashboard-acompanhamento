import type { ThemeColor } from '@/@core/types'
import type { BackEndUsersType } from './userTypes'
import { type } from 'os'

//export type Attempt = {
//  userId: number;
//  completion: number;
//  date: string;
//};

//#region DTO para criação de Quiz
export type CreateQuizDto = {
  title: string
  identifier: string
  type: string
  description: string
  category: string
  image?: QuizImageData | null
  audio?: QuizAudioData | null
  sociologicalData: CreateQuizSociologicalDataDto[]
  questions: CreateQuizQuestionDto[]
  userId: string
  status?: 'draft' | 'published' | 'archived'
}

// Sociological metadata for quizzes
export type CreateQuizSociologicalDataDto = {
  id: number // Unique identifier for sociological data
  name: string // Sociological category name
  color: ThemeColor | string // Associated color for the category
}

export type CreateQuizQuestionDto = {
  type: string
  question?: string
  answer?: string
  image?: QuizImageData
  audio?: QuizAudioData
  options?: CreateQuizQuestionOptionDto[]
  subQuestions?: CreateQuizQuestionDto[]
  parentQuestionId?: number
  quizId?: number
}

export type CreateQuizQuestionOptionDto = {
  title: string
  isChecked: boolean
  weight: number
  sociologicalId: number
  sociological?: QuizSociologicalOptionData
  image?: QuizImageData
}

//#endregion

// Blueprint for a quiz
export type Quiz = {
  id: number // Unique identifier
  title: string // Title of the quiz
  identifier: string // Identifier of the quiz
  type: string // Type of the quiz
  description: string // Description of the quiz
  category: string // Categoria of the quiz
  image: QuizImageData | null // Imagem of the quiz
  audio: QuizAudioData | null // Imagem of the quiz
  sociologicalData: QuizSociologicalData[] // List of sociological data in the quiz
  questions: QuizQuestion[] // List of questions in the quiz
  owner: BackEndUsersType // Quiz owner
  status?: string // Status of the quiz
  createdAt: Date
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
  sociological?: QuizSociologicalOptionData // Sociological data reference
  image?: QuizImageData // Adiciona o campo de imagem à opção
}

// Nova interface para armazenar dados de imagem
export type QuizImageData = {
  imageUrl: string | null
  imageFile: File | null
  blobData?: Blob | null
}

// Nova interface para armazenar dados do áudio
export type QuizAudioData = {
  audioUrl: string
  audioFile: File | null
  blobData: Blob | null
}

// Sociological metadata for quizzes
export type QuizSociologicalData = {
  id: number // Unique identifier for sociological data
  name: string // Sociological category name
  value: number // value for the category
  color: ThemeColor | string // Associated color for the category
}

// Sociological metadata for quizzes
export type QuizSociologicalOptionData = {
  id: number // Unique identifier for sociological data
  name: string // Sociological category name
}

export type QuizType = {
  quizzes: Quiz[]
}

// Novo DTO para os dados sociológicos
export type QuizSociologicalDataDto = {
  id: number
  name: string
  color: string
}

// Novo DTO para as opções das perguntas
export type QuizQuestionOptionDto = {
  id: number
  title: string
  isChecked: boolean
  weight: number
  image?: QuizImageData
  sociologicalData?: QuizSociologicalDataDto
}

// Novo DTO para as perguntas
export type QuizQuestionDto = {
  id: number
  type: string
  question?: string
  answer?: string
  image?: QuizImageData
  audio?: QuizAudioData
  options?: QuizQuestionOptionDto[]
}

export type QuizDetailsDto = {
  id: number
  title: string
  category: string
  identifier: string
  description?: string
  image?: QuizImageData
  audio?: QuizAudioData
  sociologicalDataStatistics: QuizStatisticalSociologicalDataDto[]
  totalAttempts: number
  averageWeight: number
  completionRate: number
  averageCompletionTime: number
  owner: BackEndUsersType
  questions: QuizQuestionDto[]
  createdAt: Date
}

export type QuizStatisticalSociologicalDataDto = {
  id?: number
  name: string
  color: string
  value?: number
}

export type SimplifiedQuizListDto = {
  index: number
  title: string
  identifier: string
  completion_rate: number
  total_attempts: number
  owner_name: string
}
