/* eslint-disable import/no-unresolved */
// MUI Imports
import Grid from '@mui/material/Grid'

import { getLatestQuizData, getQuizData } from '@/app/server/actions'
import WelcomeCard from '@/views/apps/academy/dashboard/WelcomeCard'
import LatestQuizCreatedView from '@/views/apps/home/LatestQuizCreatedView'

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
  const data = await getLatestQuizData()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <WelcomeCard />
      </Grid>
      <Grid item xs={12}>
        <LatestQuizCreatedView quizData={data} />
      </Grid>
    </Grid>
  )
}

export default HomePage
