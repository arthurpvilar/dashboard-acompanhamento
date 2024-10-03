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
import DOMPurify from 'dompurify'

// Type Imports
import { Button } from '@mui/material'

import type { Locale } from '@configs/i18n'
import type { ThemeColor } from '@core/types'

// Component Imports
// import DirectionalIcon from '@components/DirectionalIcon'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'
import type { Quiz } from '@/types/apps/quizTypes'
import DirectionalIcon from '@/components/DirectionalIcon'

type ChipColorType = {
  color: ThemeColor
}

type Props = {
  quizData?: Quiz[]
  searchValue: string
}

const chipColor: { [key: string]: ChipColorType } = {
  'Start Lab': { color: 'primary' },
  'Escola do Volante': { color: 'success' }
}

const QuizListTable = (props: Props) => {
  // Props
  const { quizData, searchValue } = props

  // States
  const [quiz, setQuiz] = useState<Quiz['type']>('Todos')
  const [hideCompleted, setHideCompleted] = useState(false)
  const [data, setData] = useState<Quiz[]>([])
  const [activePage, setActivePage] = useState(0)

  // Hooks
  const { lang: locale } = useParams()

  useEffect(() => {
    let newData =
      quizData?.filter(quizItem => {
        if (quiz === 'Todos') return !hideCompleted
        console.log(quizItem.type, quiz)
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
            <Typography variant='h5'>Questionários Cadastrados</Typography>
            <Typography>Gerenciando {quizData?.length} itens</Typography>
          </div>
          <div className='flex flex-wrap items-center gap-y-4 gap-x-6'>
            <FormControl fullWidth size='small' className='is-[250px] flex-auto'>
              <InputLabel id='quiz-select'>Tipo do Questionário</InputLabel>
              <Select
                fullWidth
                id='select-quiz'
                value={quiz}
                onChange={e => {
                  setQuiz(e.target.value)
                  setActivePage(0)
                }}
                label='Tipo do Questionário'
                labelId='quiz-select'
              >
                <MenuItem value='Todos'>Todos</MenuItem>
                <MenuItem value='Pergunta e Resposta Dissertativa'>Pergunta e Resposta Dissertativa</MenuItem>
                <MenuItem value='Pergunta Auditiva e Resposta Dissertativa'>
                  Pergunta Auditiva e Resposta Dissertativa
                </MenuItem>
              </Select>
            </FormControl>
            {false && (
              <FormControlLabel
                control={<Switch onChange={handleChange} checked={hideCompleted} />}
                label='Esconder arquivados'
              />
            )}
          </div>
        </div>
        {data.length > 0 ? (
          <Grid container spacing={6}>
            {data.slice(activePage * 6, activePage * 6 + 6).map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                style={{
                  minHeight: '505px',
                  height: '505px',
                  overflow: 'hidden'
                }}
              >
                <div className='border rounded bs-full'>
                  <div className='pli-2 pbs-2'>
                    <Link href={getLocalizedUrl(`/quiz-details/${item.id}`, locale as Locale)} className='flex'>
                      <img
                        src={item.image?.imageUrl || ''}
                        alt={item.title}
                        className='is-full'
                        style={{
                          borderTopLeftRadius: '12px',
                          borderTopRightRadius: '12px',
                          borderBottomLeftRadius: '12px',
                          borderBottomRightRadius: '12px',
                          overflow: 'hidden'
                        }}
                      />
                    </Link>
                  </div>
                  <div className='flex flex-col gap-4 p-5'>
                    <div className='flex items-center justify-between'>
                      <Chip label={item.category} variant='tonal' size='small' color={chipColor[item.category].color} />
                      <div className='flex items-start'>
                        <Typography className='font-medium mie-1'>{4}</Typography>
                        <i className='ri-star-fill text-warning mie-2' />
                        <Typography>{`(${70})`}</Typography>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div style={{ marginTop: '10px', minHeight: '55px' }}>
                        <Typography
                          variant='h6'
                          component={Link}
                          href={getLocalizedUrl(`/quiz-details/${item.id}`, locale as Locale)}
                          className='hover:text-primary'
                        >
                          {item.title}
                        </Typography>
                      </div>

                      <div style={{ minHeight: '85px' }}>
                        <Typography
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              item.description.length > 125
                                ? item.description.substring(0, 125) + '...'
                                : item.description
                            )
                          }}
                        />
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-1'>
                        <i className='ri-time-line text-xl' />
                        <Typography>{`Média de conclusão`}</Typography>
                      </div>
                      <LinearProgress
                        color='primary'
                        value={Math.floor(0.7 * 100)}
                        variant='determinate'
                        className='is-full bs-2'
                      />
                    </div>
                    <div className='flex flex-wrap gap-4'>
                      <Button
                        fullWidth
                        variant='outlined'
                        color='secondary'
                        startIcon={<i className='ri-refresh-line' />}
                        component={Link}
                        href={getLocalizedUrl(`/quiz-details/${item.id}`, locale as Locale)}
                        className='is-auto flex-auto'
                      >
                        Relatório
                      </Button>
                      <Button
                        fullWidth
                        variant='outlined'
                        endIcon={
                          <DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />
                        }
                        component={Link}
                        href={getLocalizedUrl(`/quiz-details/${item.id}`, locale as Locale)}
                        className='is-auto flex-auto'
                      >
                        Detalhamento
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography className='text-center'>No courses found</Typography>
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
