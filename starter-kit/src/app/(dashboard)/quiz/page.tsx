/* eslint-disable import/no-unresolved */
import { Grid } from '@mui/material'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Component Imports
import { getQuizData } from '@/app/server/actions'
import FindQuizHeader from '@/views/apps/quiz/FindQuizHeader'
import QuizListTable from '@/views/apps/quiz/QuizListTable'

const QuizPage = async () => {
  // Vars
  const mode = getServerMode()
  const data = await getQuizData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FindQuizHeader mode={mode} quizData={data?.quizzes} />
      </Grid>
      <Grid item xs={12}>
        <QuizListTable quizData={data?.quizzes} />
      </Grid>
    </Grid>
  )
}

export default QuizPage
