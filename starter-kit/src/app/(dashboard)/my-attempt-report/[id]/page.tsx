/* eslint-disable import/no-unresolved */
import Grid from '@mui/material/Grid'

import type { GetServerSidePropsContext } from 'next'

import QuizAttemptReport from '@/views/apps/my-attempt-report/details/QuizAttemptReport'
import type { QuizAttemptDetailsDto } from '@/types/apps/quizTypes'
import { getAttemptDetailedData } from '@/app/server/actions'

const QuizDetailsPage = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id as string

  // Vars
  const data: QuizAttemptDetailsDto | undefined = await getAttemptDetailedData(+id)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <QuizAttemptReport attemptData={data} />
      </Grid>
    </Grid>
  )
}

export default QuizDetailsPage
