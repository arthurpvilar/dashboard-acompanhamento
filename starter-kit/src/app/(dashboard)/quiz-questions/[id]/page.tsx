import { notFound } from 'next/navigation'
import { getQuizData } from '@/app/server/actions'
import QuizQuestionPage from '@/views/apps/quiz/questions/QuizQuestionPage'
import type { Quiz } from '@/types/apps/quizTypes'


const QuizQuestionServerPage = async ({ params }: { params: { id: string } }) => {
  // Carrega os dados do quiz a partir do backend ou do banco de dados fake
  const quizzes: Quiz[] = await getQuizData()
  const quizId = parseInt(params.id, 10) // Converte o parâmetro para número
  const selectedQuiz = quizzes.find(quiz => quiz.id === quizId)

  // Verifica se o quiz foi encontrado
  if (!selectedQuiz) {
    notFound() // Retorna um erro 404 se o quiz não for encontrado
  }

  return (
    <QuizQuestionPage
      questions={selectedQuiz.questions}
      userId={null} 
      email={null} 
      quizId={selectedQuiz.id}
      quizTitle={selectedQuiz.title}
    />
  )
}

export default QuizQuestionServerPage
