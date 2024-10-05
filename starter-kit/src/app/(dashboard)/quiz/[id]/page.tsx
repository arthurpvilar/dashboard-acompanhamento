import Grid from '@mui/material/Grid'
import type { GetServerSidePropsContext } from 'next'

import { getQuizById } from '@/libs/quiz/handlers'
import type { Quiz } from '@/types/apps/quizTypes'

const QuizDetailsPage = async (context: GetServerSidePropsContext) => {
  const { id } = context.params ?? {}

  // Buscar os dados do quiz pelo ID
  const quizData: Quiz | undefined = getQuizById(Number(id))

  if (!quizData) {
    return <p>Quiz não encontrado!</p>
  }

  return (
    <Grid container spacing={6}>
      {/*
      <Grid item xs={12} md={8}>
        <QuizDetails />
      </Grid>
      */}
    </Grid>
  )
}

export default QuizDetailsPage
