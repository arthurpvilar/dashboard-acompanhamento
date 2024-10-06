// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { UserStatisticsDto } from '@/types/apps/userTypes'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

type DataType = {
  icon: string
  stats: number | undefined
  title: string
  color: ThemeColor
}

// Componente ajustado para receber as estatísticas
const UserSociologicalDetailsCards = ({ statistics }: { statistics?: UserStatisticsDto }) => {
  const data: DataType[] = [
    {
      stats: statistics?.active,
      title: 'Ativos',
      color: 'success',
      icon: 'ri-group-line'
    },
    {
      stats: statistics?.pending,
      title: 'Pendentes',
      color: 'warning',
      icon: 'ri-macbook-line'
    },
    {
      stats: statistics?.inactive,
      title: 'Inativos',
      color: 'error',
      icon: 'ri-pie-chart-2-line'
    }
  ]

  return (
    <Card>
      <CardHeader
        title='Dados Gerais'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Atualizar']} />}
        subheader={<span className='font-medium text-textPrimary'>Estatísticas gerais dos usuários</span>}
      />
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <div className='flex items-center gap-3'>
                <CustomAvatar variant='rounded' color={item.color} className='shadow-xs'>
                  <i className={item.icon}></i>
                </CustomAvatar>
                <div>
                  <Typography>{item.title}</Typography>
                  <Typography variant='h5'>{item.stats !== undefined ? item.stats : 'N/A'}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserSociologicalDetailsCards
