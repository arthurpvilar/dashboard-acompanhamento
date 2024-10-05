/* eslint-disable import/no-unresolved */
import Grid from '@mui/material/Grid'

import type { GetServerSidePropsContext } from 'next'

import { getQuizDetailedData } from '@/app/server/actions'
import type { QuizDetailsDto } from '@/types/apps/quizTypes'
import QuizDetails from '@/views/apps/quiz/details/QuizDetails'
import QuizDetailsSideBar from '@/views/apps/quiz/details/QuizDetailsSideBar'

const QuizDetailsPage = async (context: GetServerSidePropsContext) => {
  const id = context.params?.id as string

  // Vars
  const data: QuizDetailsDto | undefined = await getQuizDetailedData(+id)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <QuizDetails quizData={data} />
      </Grid>
      <Grid item xs={12} md={4}>
        <div className='sticky top-[88px]'>
          <QuizDetailsSideBar quizData={data} />
        </div>
      </Grid>
    </Grid>
  )
}

export default QuizDetailsPage
