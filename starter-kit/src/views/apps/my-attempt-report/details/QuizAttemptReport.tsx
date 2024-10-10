'use client'

// MUI Imports
import { useState, useEffect } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Type Imports
import { Chip } from '@mui/material'

import type { QuizAttemptDetailsDto } from '@/types/apps/quizTypes'
import SociologicalTopics from '../../quiz/details/SociologicalTopics'
import QuizDetailsQuestionDisplay from '../../quiz/details/QuizDetailsQuestionDisplay'

type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'default'

const chipColor: { [key: string]: ThemeColor } = {
  'Start Lab': 'primary',
  'Escola do Volante': 'success'
}

// Components
const QuizAttemptReport = ({ attemptData }: { attemptData?: QuizAttemptDetailsDto }) => {
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
          <Typography variant='h5'>Relatório do {attemptData?.quizTitle}</Typography>
          <Typography>
            Por: <span className='font-medium text-textPrimary'>{attemptData?.quizOwnerFullName}</span>
          </Typography>
        </div>
        <div className='flex items-center gap-4'>
          <Chip
            label={attemptData?.quizCategory || 'primary'}
            variant='tonal'
            size='small'
            color={chipColor[attemptData?.quizCategory || 'default']}
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
                src={attemptData?.quizImage?.imageUrl || ''}
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
                dangerouslySetInnerHTML={{ __html: attemptData?.quizDescription || '' }}
              ></Typography>
            </div>

            <Divider />

            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Estatísticas Sociológicas</Typography>
              <div className='flex flex-wrap gap-x-12 gap-y-2'>
                <SociologicalTopics sociologicalData={attemptData?.sociologicalDataStatistics || []} />
              </div>
            </div>

            <Divider />

            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Perguntas</Typography>
              <QuizDetailsQuestionDisplay questions={attemptData?.questions || []} />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default QuizAttemptReport
