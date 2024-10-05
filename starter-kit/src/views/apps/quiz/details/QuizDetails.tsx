'use client'

// MUI Imports
import { useState, useEffect } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Type Imports
import { Chip } from '@mui/material'

import type { QuizDetailsDto } from '@/types/apps/quizTypes'
import SociologicalTopics from './SociologicalTopics'
import QuizDetailsQuestionDisplay from './QuizDetailsQuestionDisplay'

type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default'

const chipColor: { [key: string]: ThemeColor } = {
  'Start Lab': 'primary',
  'Escola do Volante': 'success'
}

// Components
const QuizDetails = ({ quizData }: { quizData?: QuizDetailsDto }) => {
  // Hooks
  const theme = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  // Effect to track when component is mounted
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

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
          <Chip
            label={quizData?.category || 'primary'}
            variant='tonal'
            size='small'
            color={chipColor[quizData?.category || 'default']}
          />
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
                src={quizData?.image?.imageUrl || ''}
                alt='Thumbnail'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  backgroundColor: 'var(--backgroundPaper)' // Use sua variável CSS ou substitua por uma cor
                }}
              />
            </div>
          </div>

          <div className='flex flex-col gap-6 p-5'>
            {/* Descrição */}
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Descrição do Questionário</Typography>
              <Typography
                sx={{ textAlign: 'justify' }}
                dangerouslySetInnerHTML={{ __html: quizData?.description || '' }}
              ></Typography>
            </div>

            <Divider />

            {/* Estatísticas */}
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Estatísticas</Typography>
              <div className='flex flex-wrap gap-x-12 gap-y-2'>
                <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='ri-group-line text-xl text-textSecondary' />
                    <Typography>Qtd. Usuários que Responderam: {quizData?.totalAttempts}</Typography>
                  </ListItem>
                </List>
                <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='ri-time-line text-xl text-textSecondary' />
                    <Typography>Tempo médio: {quizData?.averageCompletionTime}</Typography>
                  </ListItem>
                </List>
              </div>
            </div>

            <Divider />

            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Estatísticas Sociológicas</Typography>
              <div className='flex flex-wrap gap-x-12 gap-y-2'>
                <SociologicalTopics sociologicalData={[]} />
              </div>
            </div>

            <Divider />

            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Perguntas do Questionário</Typography>
              <QuizDetailsQuestionDisplay questions={quizData?.questions || []} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default QuizDetails
