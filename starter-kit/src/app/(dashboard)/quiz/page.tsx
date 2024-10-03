/* eslint-disable import/no-unresolved */
import { Grid } from '@mui/material'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Component Imports
import { getQuizData } from '@/app/server/actions'
import QuizListTable from '@/views/apps/quiz/QuizListTable'
import FindQuizHeader from '@/views/apps/quiz/list/FindQuizHeader'

const QuizPage = async () => {
  // Vars
  const mode = getServerMode()
  const data = await getQuizData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FindQuizHeader mode={mode} quizData={data} />
      </Grid>
      <Grid item xs={12}>
        <QuizListTable quizData={data} />
      </Grid>
    </Grid>
  )
}

export default QuizPage
