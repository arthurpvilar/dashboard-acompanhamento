/* eslint-disable import/no-unresolved */
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import type { GetServerSidePropsContext } from 'next'

import QuizDetails from '@/views/apps/academy/quiz-details/QuizDetails'

// Data Imports
import { getQuizData } from '@/app/server/actions'
import type { Quiz } from '@/types/apps/quizTypes'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/academy` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getAcademyData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/academy`)

  if (!res.ok) {
    throw new Error('Failed to fetch academy data')
  }

  return res.json()
} */

const QuizDetailsPage = async (context: GetServerSidePropsContext) => {
  const { id } = context.params!

  // Vars
  const data: Quiz = (await getQuizData()).quizzes.find((quiz: Quiz) => quiz.id === parseInt(id as string)) as Quiz

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <QuizDetails quizData={data} />
      </Grid>
    </Grid>
  )
}

export default QuizDetailsPage
