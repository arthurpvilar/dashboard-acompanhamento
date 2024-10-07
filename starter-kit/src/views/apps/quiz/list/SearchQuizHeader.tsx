'use client'

// Next.js Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Mode } from '@core/types'

// Component Imports
import CustomIconButton from '@core/components/mui/IconButton'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'

// Server-side Data Import
import { getQuizData } from '@/app/server/actions'

// Props Types
type Props = {
  mode: Mode
  searchValue: string
  setSearchValue: (value: string) => void
}

const SearchQuizHeader = (props: Props) => {
  // Props
  const { mode, searchValue, setSearchValue } = props

  // Vars
  const lightIllustration = '/images/apps/academy/hand-with-bulb-light.png'
  const darkIllustration = '/images/apps/academy/hand-with-bulb-dark.png'

  // Hooks
  const theme = useTheme()
  const leftIllustration = useImageVariant(mode, lightIllustration, darkIllustration)
  const router = useRouter() // Use the Next.js router hook

  // Função para buscar o quiz pelo título e redirecionar para a página correta
  const handleSearch = async () => {
    if (searchValue.trim()) {
      // Busca os dados dos quizzes
      const quizzes = await getQuizData()

      // Procura o quiz pelo título fornecido
      const selectedQuiz = quizzes.find(
        (quiz) => quiz.title.toLowerCase() === searchValue.trim().toLowerCase()
      )

      // Se encontrar o quiz, redireciona para a página com o ID correspondente
      if (selectedQuiz) {
        router.push(`/quiz-questions/${selectedQuiz.id}`)
      } else {
        alert('Quiz não encontrado. Por favor, verifique o título e tente novamente.')
      }
    }
  }

  return (
    <Card className='relative flex justify-center'>
      <img src={leftIllustration} className='max-md:hidden absolute max-is-[100px] top-12 start-12' />
      <div className='flex flex-col items-center gap-4 max-md:pli-5 plb-12 md:is-1/2'>
        <Typography variant='h4' className='text-center md:is-3/4'>
          Seu conhecimento, diversão e aprendizado. <span className='text-primary'>Tudo isso em um só lugar.</span>
        </Typography>
        <Typography className='text-center'>
          Aprimore seus conhecimentos respondendo quizzes educativos em áreas de conhecimentos gerais, tecnologia,
          programação, ciência etc.
        </Typography>
        <div className='flex items-center gap-4 max-sm:is-full'>
          <TextField
            placeholder='Título do questionário a ser respondido...'
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            size='small'
            className='sm:is-[350px] max-sm:flex-1'
          />
          <CustomIconButton variant='contained' color='primary' onClick={handleSearch}>
            <i className='ri-search-2-line' />
          </CustomIconButton>
        </div>
      </div>
      <img
        src='/images/apps/academy/9.png'
        className={classnames('max-md:hidden absolute max-bs-[180px] bottom-0 end-0', {
          'scale-x-[-1]': theme.direction === 'rtl'
        })}
      />
    </Card>
  )
}

export default SearchQuizHeader
