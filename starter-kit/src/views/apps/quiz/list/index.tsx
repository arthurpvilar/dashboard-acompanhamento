'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import type { Quiz } from '@/types/apps/quizTypes'
import ColoredCards from '../../academy/my-courses/ColoredCards'
import Courses from '../../academy/my-courses/Courses'
import FreeCourses from '../../academy/my-courses/FreeCourses'
import FindQuizHeader from './FindQuizHeader'
import QuizListTable from '../QuizListTable'

type Props = {
  quizData: Quiz[]
  mode: Mode
}

const ServerQuizListPage = ({ quizData, mode }: Props) => {
  // States
  const [searchValue, setSearchValue] = useState('')

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FindQuizHeader mode={mode} quizData={quizData} />
      </Grid>
      <Grid item xs={12}>
        <QuizListTable quizData={quizData} searchValue={searchValue} />
      </Grid>
      <Grid item xs={12}>
        <ColoredCards />
      </Grid>
      <Grid item xs={12}>
        <FreeCourses />
      </Grid>
    </Grid>
  )
}

export default ServerQuizListPage
