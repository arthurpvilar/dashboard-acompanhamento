/* eslint-disable import/no-unresolved */
// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import QuizDescription from '@/views/apps/quiz/add/QuizDescription'
import QuizTypesDropdown from '@/views/apps/quiz/add/QuizTypesDropdown'
import QuizSociologicalData from '@/views/apps/quiz/add/QuizSociologicalData'
import QuizQuestions from '@/views/apps/quiz/add/QuizQuestions'
import QuizHeader from '@/views/apps/quiz/add/QuizHeader'
import QuizMainImage from '@/views/apps/quiz/add/QuizMainImage'
import { SociologicalProvider } from '@/views/apps/quiz/add/QuizContext'

const QuizAdd = async () => {
  return (
    <SociologicalProvider>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <QuizHeader />
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <QuizDescription />
            </Grid>
            <Grid item xs={12}>
              <QuizMainImage />
            </Grid>
            <Grid item xs={12}>
              <QuizSociologicalData />
            </Grid>
            <Grid item xs={12}>
              <QuizTypesDropdown />
            </Grid>
            <Grid item xs={12}>
              <QuizQuestions />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </SociologicalProvider>
  )
}

export default QuizAdd
