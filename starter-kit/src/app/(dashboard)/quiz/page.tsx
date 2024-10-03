/* eslint-disable import/no-unresolved */
// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

// Component Imports
import { getQuizData } from '@/app/server/actions'
import ServerQuizListPage from '@/views/apps/quiz/list'

//import QuizListTable from '@/views/apps/quiz/QuizListTable'
//import FindQuizHeader from '@/views/apps/quiz/list/FindQuizHeader'

const QuizPage = async () => {
  // Vars
  const mode = getServerMode()
  const data = await getQuizData()

  return <ServerQuizListPage mode={mode} quizData={data} />
}

export default QuizPage
