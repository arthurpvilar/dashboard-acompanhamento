'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import type { Quiz } from '@/types/apps/quizTypes'
import QuizListTable from '../../quiz/list/QuizListTable'
import SearchQuizHeader from '../../quiz/list/SearchQuizHeader'

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
        <SearchQuizHeader mode={mode} searchValue={searchValue} setSearchValue={setSearchValue} />
      </Grid>
      <Grid item xs={12}>
        <QuizListTable quizData={quizData} searchValue={searchValue} />
      </Grid>
    </Grid>
  )
}

export default ServerQuizListPage
