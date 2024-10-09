/* eslint-disable import/no-unresolved */
// Server Action Imports
import MyAttemptListPage from '@/views/apps/my-quizzes/list'
import { getServerMode } from '@core/utils/serverHelpers'

// Component Imports

const QuizPage = async () => {
  // Vars
  const mode = getServerMode()

  return <MyAttemptListPage mode={mode} />
}

export default QuizPage
