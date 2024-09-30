// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { UserDataType } from '@components/card-statistics/HorizontalWithSubtitle'

// Component Imports
// eslint-disable-next-line import/no-unresolved
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

// Types
import type { QuizQuestion, UserQuizQuestion } from '@/types/apps/quizTypes'

// Calcula a taxa de conclusão do quiz
const calculateCompletionRate = (completedQuiz: number, totalUsers: number): number => {
  return (completedQuiz / totalUsers) * 100
}

// Calcula o tempo médio de conclusão do quiz
const calculateAverageCompletionTime = (averageTime: number): number => {
  return averageTime
}

// Calcula a média de questões respondidas pelos usuários
const calculateAverageQuestionsAnswered = (
  questions: QuizQuestion[],
  completedQuestions: UserQuizQuestion[]
): number => {
  return completedQuestions.length / questions.length
}

// Calcula a taxa de respostas corretas
const calculateCorrectAnswerRate = (correctAnswers: number, totalAnswers: number): number => {
  return (correctAnswers / totalAnswers) * 100
}

// Vars
const data: UserDataType[] = [
  {
    title: 'Taxa de Conclusão',
    stats: `${calculateCompletionRate(150, 200).toFixed(2)}%`, // Mock: 150 usuários completaram, 200 usuários no total
    avatarIcon: 'ri-check-line',
    avatarColor: 'primary',
    trend: 'positive',
    trendNumber: '5%',
    subtitle: 'Porcentagem de conclusão dos quiz'
  },
  {
    title: 'Tempo Médio de Conclusão',
    stats: `${calculateAverageCompletionTime(15.5).toFixed(2)} min`, // Mock: 15.5 minutos em média
    avatarIcon: 'ri-time-line',
    avatarColor: 'success',
    trend: 'neutral',
    trendNumber: '0%',
    subtitle: 'Tempo médio para concluir o quiz'
  },
  {
    title: 'Média de Questões Respondidas',
    stats: `${calculateAverageQuestionsAnswered([{ id: 1 }, { id: 2 }, { id: 3 }], [{ id: 1 }, { id: 2 }]).toFixed(2)}`, // Mock: 3 questões no total, 2 respondidas
    avatarIcon: 'ri-question-answer-line',
    avatarColor: 'warning',
    trend: 'positive',
    trendNumber: '12%',
    subtitle: 'Média de questões respondidas'
  },
  {
    title: 'Taxa de Respostas Corretas',
    stats: `${calculateCorrectAnswerRate(80, 100).toFixed(2)}%`, // Mock: 80 respostas corretas, 100 respostas no total
    avatarIcon: 'ri-checkbox-circle-line',
    avatarColor: 'info',
    trend: 'positive',
    trendNumber: '8%',
    subtitle: 'Porcentagem de respostas corretas'
  }
]

const UserListCards = () => {
  return (
    <Grid container spacing={6}>
      {data.map((item, i) => (
        <Grid key={i} item xs={12} sm={6} md={3}>
          <HorizontalWithSubtitle {...item} />
        </Grid>
      ))}
    </Grid>
  )
}

export default UserListCards
