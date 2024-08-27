/* eslint-disable import/no-unresolved */
'use client'

// MUI Imports
import { useState } from 'react'

import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

import type { Quiz } from '@/types/apps/quizTypes'
import { getLocalizedUrl } from '@/utils/i18n'

type Props = {
  mode: Mode
  quizData: Quiz[]
}

const FindQuizHeader = (props: Props) => {
  // States
  const [quizCode, setQuizCode] = useState<string>('')
  const [quizId, setQuizId] = useState<number>(0)

  // Props
  const { mode, quizData } = props

  // Vars
  const lightIllustration = '/images/apps/academy/hand-with-bulb-light.png'
  const darkIllustration = '/images/apps/academy/hand-with-bulb-dark.png'

  // Hooks
  const theme = useTheme()
  const leftIllustration = useImageVariant(mode, lightIllustration, darkIllustration)

  const handleQuizData = (quizCode: string) => {
    // Buscar o quiz correspondente ao código inserido
    const quiz = (quizData as Quiz[]).find(q => q.identifier === quizCode)

    setQuizCode(quizCode)

    if (quiz) {
      setQuizId((quiz as Quiz).id)
    }
  }

  return (
    <Card className='relative flex justify-center'>
      <img src={leftIllustration} className='max-md:hidden absolute max-is-[100px] top-12 start-12' />
      <div className='flex flex-col items-center gap-4 max-md:pli-5 plb-12 md:is-1/2'>
        <Typography variant='h4' className='text-center md:is-3/4'>
          Seu conhecimento, diversão e aprendizado. <span className='text-primary'>Tudo isso em um só lugar.</span>
        </Typography>
        <Typography className='text-center'>
          Aprimore seus conhecimentos respondendo quizzes educativos em áreas de conhecimentos gerais, tecnologia,
          programação e ciência etc.
        </Typography>
        <div className='flex items-center gap-4 max-sm:is-full'>
          <TextField
            placeholder='Coloque o código de um Quiz para iniciar!'
            value={quizCode}
            onChange={e => handleQuizData(e.target.value)}
            size='small'
            className='sm:is-[350px] max-sm:flex-1'
          />
          <CustomIconButton
            variant='contained'
            color='primary'
            href={getLocalizedUrl(`/quiz/start/${quizId}`, 'pt-br')}
          >
            <i className='ri-search-2-line' />
          </CustomIconButton>
        </div>
      </div>
      <img
        src='/images/apps/academy/9.png'
        className={classnames('max-md:hidden absolute max-bs-[180px] bottom-0 end-0', {
          'scale-x-[-1]': theme.direction === 'rtl'
        })}
      />
    </Card>
  )
}

export default FindQuizHeader
