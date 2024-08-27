/* eslint-disable import/no-unresolved */
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AddQuizHeader from '@/views/apps/quiz/add/AddQuizHeader'
import QuizDescription from '@/views/apps/quiz/add/QuizDescription'
import AddQuizImage from '@/views/apps/quiz/add/AddQuizImage'
import QuizTypesDropdown from '@/views/apps/quiz/add/QuizTypesDropdown'
import QuizSociologicalData from '@/views/apps/quiz/add/QuizSociologicalData'
import { SociologicalProvider } from '@/views/apps/quiz/add/AddQuizContext'
import AddQuizQuestions from '@/views/apps/quiz/add/AddQuizQuestions'

const QuizAdd = async () => {
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
            <Grid item xs={12}>
              <AddQuizQuestions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SociologicalProvider>
  )
}

export default QuizAdd
