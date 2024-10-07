/* eslint-disable import/no-unresolved */
// Server Action Imports
import { getQuizData } from '@/app/server/actions'
import ServerQuizListPage from '@/views/apps/quiz/list'
import { getServerMode } from '@core/utils/serverHelpers'

// Component Imports

const QuizPage = async () => {
  // Vars
  const mode = getServerMode()
  const data = await getQuizData()

  return <ServerQuizListPage mode={mode} quizData={data} />
}

export default QuizPage
