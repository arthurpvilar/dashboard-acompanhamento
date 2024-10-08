/* eslint-disable import/no-unresolved */
// Server Action Imports
import { getQuizData } from '@/app/server/actions'
import ServerMyQuizListPage from '@/views/apps/my-quizzes/list'
import { getServerMode } from '@core/utils/serverHelpers'

// Component Imports

const QuizPage = async () => {
  // Vars
  const mode = getServerMode()
  const data = await getQuizData()

  return <ServerMyQuizListPage mode={mode} quizData={data} />
}

export default QuizPage
