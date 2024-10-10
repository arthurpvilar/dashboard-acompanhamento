import { notFound } from 'next/navigation'

import { Grid } from '@mui/material'

import { findQuizData } from '@/app/server/actions'
import type { BackendQuiz } from '@/types/apps/quizTypes'
import QuizDetailsQuestionDisplay from '@/views/apps/quiz/question display/QuizDetailsQuestionDisplay'

interface QuizQuestionServerPageParams {
  params: {
    id: string
    userId: string
    email?: string // Tornando o email opcional
  }
}

const QuizQuestionServerPage = async ({ params }: QuizQuestionServerPageParams) => {
  // Converter os dados dos parâmetros
  const quizId = parseInt(params.id, 10) // Converte o parâmetro para número
  const userId = params.userId // Agora passamos como string
  const userEmail = params.email || undefined // Define como undefined se o email não for fornecido

  // Carrega os dados do quiz a partir do backend ou do banco de dados fake
  const quiz: BackendQuiz | null = await findQuizData(quizId)

  // Verifica se o quiz foi encontrado
  if (!quiz) {
    notFound() // Retorna um erro 404 se o quiz não for encontrado
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <QuizDetailsQuestionDisplay quiz={quiz} userId={userId} email={userEmail} />
      </Grid>
    </Grid>
  )
}

export default QuizQuestionServerPage
