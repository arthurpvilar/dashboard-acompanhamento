/* eslint-disable import/no-unresolved */
// MUI Imports
import Grid from '@mui/material/Grid'

import { getAllQuizzesSimplified, getLatestQuizData, getQuizData } from '@/app/server/actions'
import SimpleQuizListTable from '@/views/apps/quiz/SimpleQuizListTable'
import LatestQuizCreatedView from '@/views/apps/quiz/LatestQuizCreatedView'
import UserWelcomeCard from '@/views/apps/dashboard/header/UserWelcomeCard'
import DashboardCardVertical from '@/views/apps/dashboard/header/DashboardCardVertical'
import { Quiz, QuizDetailsDto, SimplifiedQuizListDto } from '@/types/apps/quizTypes'
import data from '@/views/react-table/data'

// Component Imports

// Data Imports

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

const HomePage = async () => {
  // Vars
  const dataSimplified = (await getAllQuizzesSimplified()) as SimplifiedQuizListDto[]
  const dataDetailed = (await getLatestQuizData()) as QuizDetailsDto

  console.log('detailed data:', dataSimplified)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8} className='self-end'>
        <UserWelcomeCard />
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <DashboardCardVertical
              title='Total de questionários'
              stats='2'
              avatarIcon='ri-questionnaire-line'
              avatarColor='success'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DashboardCardVertical
              title='Total de usuários'
              stats='1'
              avatarIcon='ri-bank-card-line'
              avatarColor='info'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LatestQuizCreatedView quizData={dataDetailed} />
      </Grid>
      <Grid item xs={12}>
        <SimpleQuizListTable dataSimplified={dataSimplified} />
      </Grid>
    </Grid>
  )
}

export default HomePage
