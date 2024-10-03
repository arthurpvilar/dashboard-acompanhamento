// React Imports
import type { ChangeEvent } from 'react'
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import LinearProgress from '@mui/material/LinearProgress'
import MenuItem from '@mui/material/MenuItem'
import Pagination from '@mui/material/Pagination'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'

// Type Imports
import type { Locale } from '@configs/i18n'
import type { ThemeColor } from '@core/types'

// Component Imports
// import DirectionalIcon from '@components/DirectionalIcon'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'
import type { Quiz } from '@/types/apps/quizTypes'

type ChipColorType = {
  color: ThemeColor
}

type Props = {
  quizData?: Quiz[]
  searchValue: string
}

const chipColor: { [key: string]: ChipColorType } = {
  Web: { color: 'primary' },
  Art: { color: 'success' },
  'UI/UX': { color: 'error' },
  Psychology: { color: 'warning' },
  Design: { color: 'info' }
}

const QuizListTable = (props: Props) => {
  // Props
  const { quizData, searchValue } = props

  // States
  const [quiz, setQuiz] = useState<Quiz['type']>('All')
  const [hideCompleted, setHideCompleted] = useState(true)
  const [data, setData] = useState<Quiz[]>([])
  const [activePage, setActivePage] = useState(0)

  // Hooks
  const { lang: locale } = useParams()

  useEffect(() => {
    let newData =
      quizData?.filter(quizItem => {
        if (quiz === 'All') return !hideCompleted

        return quizItem.type === quiz && !hideCompleted
      }) ?? []

    if (searchValue) {
      newData = newData.filter(category => category.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    if (activePage > Math.ceil(newData.length / 6)) setActivePage(0)

    setData(newData)
  }, [searchValue, activePage, quiz, hideCompleted, quizData])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHideCompleted(e.target.checked)
    setActivePage(0)
  }

  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
          <div>
            <Typography variant='h5'>My Quizzes</Typography>
            <Typography>Total 6 quizzes available</Typography>
          </div>
          <div className='flex flex-wrap items-center gap-y-4 gap-x-6'>
            <FormControl fullWidth size='small' className='is-[250px] flex-auto'>
              <InputLabel id='quiz-select'>Quizzes</InputLabel>
              <Select
                fullWidth
                id='select-quiz'
                value={quiz}
                onChange={e => {
                  setQuiz(e.target.value)
                  setActivePage(0)
                }}
                label='Quizzes'
                labelId='quiz-select'
              >
                <MenuItem value='All'>All Quizzes</MenuItem>
                <MenuItem value='Web'>Web</MenuItem>
                <MenuItem value='Art'>Art</MenuItem>
                <MenuItem value='UI/UX'>UI/UX</MenuItem>
                <MenuItem value='Psychology'>Psychology</MenuItem>
                <MenuItem value='Design'>Design</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              control={<Switch onChange={handleChange} checked={hideCompleted} />}
              label='Hide completed'
            />
          </div>
        </div>
        {data.length > 0 ? (
          <Grid container spacing={6}>
            {data.slice(activePage * 6, activePage * 6 + 6).map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <div className='border rounded bs-full'>
                  <div className='pli-2 pbs-2'>
                    <Link href={getLocalizedUrl('/apps/academy/quiz-details', locale as Locale)} className='flex'>
                      <img src={item.image?.imageUrl || ''} alt={item.title} className='is-full' />
                    </Link>
                  </div>
                  <div className='flex flex-col gap-4 p-5'>
                    <div className='flex items-center justify-between'>
                      <Chip
                        label={item.type}
                        variant='tonal'
                        size='small'
                        color={chipColor[item.type]?.color || 'default'}
                      />
                      <div className='flex items-start'>
                        <Typography className='font-medium mie-1'>{item.sociologicalData?.length || 0}</Typography>
                        <Typography>{` questions`}</Typography>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <Typography
                        variant='h5'
                        component={Link}
                        href={getLocalizedUrl('/apps/academy/quiz-details', locale as Locale)}
                        className='hover:text-primary'
                      >
                        {item.title}
                      </Typography>
                      <Typography>{item.description}</Typography>
                    </div>
                    <LinearProgress
                      color='primary'
                      value={Math.floor((item.questions.length / 100) * 100)} // Simulated completion
                      variant='determinate'
                      className='is-full bs-2'
                    />
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography className='text-center'>No quizzes found</Typography>
        )}
        <div className='flex justify-center'>
          <Pagination
            count={Math.ceil(data.length / 6)}
            page={activePage + 1}
            showFirstButton
            showLastButton
            variant='tonal'
            color='primary'
            onChange={(e, page) => setActivePage(page - 1)}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default QuizListTable
