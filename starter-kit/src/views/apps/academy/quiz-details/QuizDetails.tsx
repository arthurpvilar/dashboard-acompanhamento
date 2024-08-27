'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Type Imports
import type { Quiz } from '@/types/apps/quizTypes'

// Components Imports
import SociologicalTopics from './SociologicalTopics'

const Details = ({ quizData }: { quizData?: Quiz }) => {
  // Hooks
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Card>
      <CardContent className='flex flex-wrap items-center justify-between gap-4 pbe-6'>
        <div>
          <Typography variant='h5'>{quizData?.title}</Typography>
          <Typography>
            Por: <span className='font-medium text-textPrimary'>{quizData?.owner.fullName}</span>
          </Typography>
        </div>
        <div className='flex items-center gap-4'>
          <i className='ri-bookmark-line cursor-pointer' />
        </div>
      </CardContent>
      <CardContent>
        <div className='border rounded'>
          <div className='mli-2 mbs-2 overflow-hidden rounded'>
            <div
              className='bg-black'
              style={{
                height: smallScreen ? 280 : 440,
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src={quizData?.image}
                alt='Thumbnail'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  backgroundColor: 'var(--backgroundPaper)' // Use your CSS variable or replace with a color code
                }}
              />
            </div>
          </div>
          <div className='flex flex-col gap-6 p-5'>
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Descrição do Quiz</Typography>
              <Typography sx={{ textAlign: 'justify' }}>{quizData?.description}</Typography>
            </div>
            <Divider />
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Estatísticas</Typography>
              <div className='flex flex-wrap gap-x-12 gap-y-2'>
                <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='ri-group-line text-xl text-textSecondary' />
                    <Typography>Qtd. Usuários: {quizData?.users.length}</Typography>
                  </ListItem>
                </List>
                <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='ri-time-line text-xl text-textSecondary' />
                    <Typography>Tempo médio: {quizData?.averageTime}</Typography>
                  </ListItem>
                </List>
              </div>
            </div>
            <Divider />
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Estatísticas sociológicos</Typography>
              <div className='flex flex-wrap gap-x-12 gap-y-2'>
                <SociologicalTopics sociologicalData={[]} />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Details
