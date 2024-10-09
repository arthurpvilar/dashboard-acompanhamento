'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import type { BackendQuiz } from '@/types/apps/quizTypes'

//import ColoredCards from '../../academy/my-courses/ColoredCards'
//import FreeCourses from '../../academy/my-courses/FreeCourses'
import QuizListTable from './QuizListTable'
import SearchQuizHeader from './SearchQuizHeader'

type Props = {
  quizData: BackendQuiz[]
  mode: Mode
}

const ServerQuizListPage = ({ quizData, mode }: Props) => {
  // States
  const [searchValue, setSearchValue] = useState('')

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <SearchQuizHeader mode={mode} searchValue={searchValue} setSearchValue={setSearchValue} />
      </Grid>
      <Grid item xs={12}>
        <QuizListTable quizData={quizData} searchValue={searchValue} />
      </Grid>
    </Grid>
  )
}

export default ServerQuizListPage
