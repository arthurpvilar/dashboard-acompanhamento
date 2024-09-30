/* eslint-disable import/no-unresolved */
import Grid from '@mui/material/Grid'

import type { GetServerSidePropsContext } from 'next'

import QuizDetails from '@/views/apps/academy/quiz-details/QuizDetails'
import { getQuizData } from '@/app/server/actions'
import type { Quiz } from '@/types/apps/quizTypes'

const QuizDetailsPage = async (context: GetServerSidePropsContext) => {
  const { id } = context.params!

  // Vars
  const data: Quiz = (await getQuizData()).quizzes.find((quiz: Quiz) => quiz.id === parseInt(id as string))!

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <QuizDetails quizData={data} />
      </Grid>
    </Grid>
  )
}

export default QuizDetailsPage
