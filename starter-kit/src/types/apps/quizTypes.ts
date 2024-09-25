import type { ThemeColor } from '@/@core/types'

export type Attempt = {
  userId: number;
  completion: number;
  date: string;
};

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
  //completedQuiz?: number // Number of users who have completed the quiz
  // totalQuiz: number // Total number of questions in the quiz
  // time?: number // Duration or time limit for the quiz
  // color: ThemeColor // Theme color for the quiz
  // owner: UsersType
  // averageTime: number // Average time taken by the user
  // users?: QuizUserData[] // List of users who have taken the quiz
  // progressValue?: string;
  // attempts: Attempt[]
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

// User-specific data related to a quiz
export type QuizUserData = {
  id: string // Unique identifier for the user
  quizId: number // Reference to the quiz id
  averageTime: number // Average time taken by the user
  completedQuestions: UserQuizQuestion[] // List of questions the user has completed
}

// User-specific data for completed questions within a quiz
export type UserQuizQuestion = {
  id: number // Reference to Question id
  questionId?: string // The question text
  answered?: boolean // Indicates if the user answered the question
}

export type QuizType = {
  quizzes: Quiz[]
}
