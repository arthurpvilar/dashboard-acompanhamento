/* eslint-disable import/no-unresolved */
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AddQuizHeader from '@/views/quiz/add/AddQuizHeader'
import QuizDescription from '@/views/quiz/add/QuizDescription'
import AddQuizImage from '@/views/quiz/add/AddQuizImage'
import QuizTypesDropdown from '@/views/quiz/add/QuizTypesDropdown'
import QuizSociologicalData from '@/views/quiz/add/QuizSociologicalData'
import { SociologicalProvider } from '@/views/quiz/add/AddQuizContext'

const QuizAdd = () => {
  return (
    <SociologicalProvider>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <AddQuizHeader />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <QuizDescription />
            </Grid>
            <Grid item xs={12}>
              <AddQuizImage />
            </Grid>
            <Grid item xs={12}>
              <QuizTypesDropdown />
            </Grid>
            <Grid item xs={12}>
              <QuizSociologicalData />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SociologicalProvider>
  )
}

export default QuizAdd
