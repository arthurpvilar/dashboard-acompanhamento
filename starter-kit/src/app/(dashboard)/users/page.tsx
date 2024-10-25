/* eslint-disable import/no-unresolved */
// Component Imports
import UserList from '@views/apps/user/list'

// Data Imports
import { getUsersDataFromServer, getUserStatistics } from '@/app/server/actions'
import type { UserStatisticsDto } from '@/types/apps/userTypes'

/**
 * ! If you need data using an API call, uncomment the below API code, update the `process.env.API_URL` variable in the
 * ! `.env` file found at root of your project and also update the API endpoints like `/apps/user-list` in below example.
 * ! Also, remove the above server action import and the action itself from the `src/app/server/actions.ts` file to clean up unused code
 * ! because we've used the server action for getting our static data.
 */

/* const getUserData = async () => {
  // Vars
  const res = await fetch(`${process.env.API_URL}/apps/user-list`)

  if (!res.ok) {
    throw new Error('Failed to fetch userData')
  }

  return res.json()
} */

const UserListApp = async () => {
  // Vars
  const data = await getUsersDataFromServer()
  const statics = await getUserStatistics()

  return <UserList userData={data} userStatistics={statics.data as UserStatisticsDto} />
}

export default UserListApp
