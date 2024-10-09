'use client'

// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import AnswerQuizHeader from './AnswerQuizHeader'
import MyQuizListTable from './MyQuizListTable'

type Props = {
  mode: Mode
}

const MyAttemptListPage = ({ mode }: Props) => {
  // States
  const [searchValue, setSearchValue] = useState('')

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <AnswerQuizHeader mode={mode} searchValue={searchValue} setSearchValue={setSearchValue} />
      </Grid>
      <Grid item xs={12}>
        <MyQuizListTable searchValue={searchValue} />
      </Grid>
    </Grid>
  )
}

export default MyAttemptListPage
