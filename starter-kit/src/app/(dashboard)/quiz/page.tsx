/* eslint-disable import/no-unresolved */
// MUI Imports
import Grid from '@mui/material/Grid'

// Data Imports
import { getQuizData } from '@/app/server/actions'
import QuizTable from '@/views/apps/academy/dashboard/QuizTable'

const AcademyDashboard = async () => {
  // Vars
  const data = await getQuizData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <QuizTable quizData={data?.quizzes} />
      </Grid>
    </Grid>
  )
}

export default AcademyDashboard;

