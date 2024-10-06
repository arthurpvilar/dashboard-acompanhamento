// MUI Imports
import Grid from '@mui/material/Grid'

import type { BackEndUsersType, UserStatisticsDto } from '@/types/apps/userTypes'

// Component Imports
import UserSociologicalTable from './UserSociologicalTable'
import UserSociologicalDetailsCards from './UserSociologicalDetailsCards'
import DashboardCardWithImage from '../../dashboard/header/DashboardCardWithImage'

const UserServerList = ({
  userData,
  userStatistics
}: {
  userData?: BackEndUsersType[]
  userStatistics?: UserStatisticsDto
}) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={3} className='self-end'>
        <DashboardCardWithImage
          stats={userStatistics?.teachers?.toString() || '0'}
          trend='negative'
          title='Professores Cadastrados'
          src='/images/illustrations/characters/10.png'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} className='self-end'>
        <DashboardCardWithImage
          stats={userStatistics?.students?.toString() || '0'}
          title='Alunos Cadastrados'
          chipColor='primary'
          src='/images/illustrations/characters/9.png'
        />
      </Grid>
      <Grid item xs={12} md={6} className='self-end'>
        <UserSociologicalDetailsCards statistics={userStatistics} />
      </Grid>
      <Grid item xs={12}>
        <UserSociologicalTable tableData={userData} />
      </Grid>
    </Grid>
  )
}

export default UserServerList
