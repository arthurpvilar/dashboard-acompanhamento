/* eslint-disable import/no-unresolved */
'use client'

import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import UserQuizHistory from '@/views/apps/user/view/history-quetions-by-user/history'

const UserQuizHistoryPage = () => {
  const params = useParams()
  const id = Array.isArray(params.id) ? params.id[0] : params.id
  const [quizHistory, setQuizHistory] = useState<any[]>([])

  useEffect(() => {
    if (id) {
      const userId = parseInt(id)
      console.log('User ID:', userId)

      const fetchQuizHistory = () => {
        const mockData = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        console.log('All Quiz History from localStorage:', mockData)

        const userHistory = mockData.filter((entry: any) => entry.userId === userId)
        console.log('Filtered User Quiz History:', userHistory)

        setQuizHistory(userHistory)
      }

      fetchQuizHistory()
    }
  }, [id])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <UserQuizHistory quizHistory={quizHistory} />
      </Grid>
    </Grid>
  )
}

export default UserQuizHistoryPage
