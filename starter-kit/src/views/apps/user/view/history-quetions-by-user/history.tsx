'use client'

// React Imports
import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

interface QuizHistory {
  id: number
  title: string
  date: string
  answers: string[]
}

interface UserQuizHistoryProps {
  quizHistory: QuizHistory[]
}

const UserQuizHistory: React.FC<UserQuizHistoryProps> = ({ quizHistory }) => {
  if (!quizHistory || quizHistory.length === 0) {
    return (
      <Card>
        <CardContent>
          <Typography variant='h5'>Histórico de Quizzes</Typography>
          <Typography>Nenhum quiz encontrado no histórico.</Typography>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent>
        <Typography variant='h5'>Histórico de Quizzes</Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <List>
          {quizHistory.map((quiz, index) => (
            <ListItem key={index}>
              <div>
                <Typography variant='h6'>{quiz.title}</Typography>
                <Typography variant='body2'>Data: {quiz.date}</Typography>
                <Typography variant='body2'>Respostas: {quiz.answers.join(', ')}</Typography>
              </div>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default UserQuizHistory
