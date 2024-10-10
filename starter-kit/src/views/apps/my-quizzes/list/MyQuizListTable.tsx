'use client'

// React Imports
import { useState, useEffect } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

// Type Imports
import {
  Button,
  CardContent,
  Chip,
  FormControl,
  InputLabel,
  LinearProgress,
  MenuItem,
  Pagination,
  Select,
  Typography
} from '@mui/material'

import DOMPurify from 'dompurify'

import type { Locale } from '@configs/i18n'
import type { UserQuizAttemptDto } from '@/types/apps/quizTypes'
import DirectionalIcon from '@/components/DirectionalIcon'
import type { BackEndUsersType } from '@/types/apps/userTypes'
import { getUserQuizAttempts } from '@/app/server/actions'
import { getLocalizedUrl } from '@/utils/i18n'

type Props = {
  searchValue: string
}

const MyQuizListTable = (props: Props) => {
  const { searchValue } = props

  // States
  const [quiz, setQuiz] = useState<string>('Todos')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hideCompleted, setHideCompleted] = useState(false)
  const [data, setData] = useState<UserQuizAttemptDto[]>([])
  const [userAttempts, setUserAttempts] = useState<UserQuizAttemptDto[]>([])
  const [activePage, setActivePage] = useState(0)

  // Hooks
  const { lang: locale } = useParams()

  // Função para obter o usuário autenticado do localStorage
  const getLoggedUser = (): BackEndUsersType | null => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')

      return user ? JSON.parse(user) : null
    }

    return null
  }

  useEffect(() => {
    const fetchUserQuizAttempts = async () => {
      const user = getLoggedUser()

      if (user) {
        const accessToken = localStorage.getItem('accessToken') as string
        const userId = user.index as string
        const userAttempts: UserQuizAttemptDto[] = await getUserQuizAttempts(accessToken, userId)

        setData(userAttempts)
        setUserAttempts(userAttempts)
      }
    }

    fetchUserQuizAttempts()
  }, [])

  useEffect(() => {
    const newData =
      userAttempts.filter(quizItem => {
        if (quiz === 'Todos') return !hideCompleted

        return (
          ((quizItem.isCompleted && quiz === 'Completo') || (!quizItem.isCompleted && quiz === 'Incompleto')) &&
          !hideCompleted
        )
      }) ?? []

    if (activePage > Math.ceil(newData.length / 6)) setActivePage(0)
    setData(newData)
  }, [searchValue, activePage, quiz, hideCompleted, userAttempts])

  return (
    <Card>
      <CardContent className='flex flex-col gap-6'>
        <div className='flex flex-wrap items-center justify-between gap-4'>
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
                <MenuItem value='Completo'>Completo</MenuItem>
                <MenuItem value='Incompleto'>Incompleto</MenuItem>
              </Select>
            </FormControl>
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
                    <Link href={getLocalizedUrl(`/quiz-details/${item.index}`, locale as Locale)} className='flex'>
                      <img
                        src={item.quizImage?.imageUrl || ''}
                        alt={item.quizTitle}
                        className='is-full'
                        style={{
                          minHeight: '135px',
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
                      <Chip
                        label={item.isCompleted ? 'Concluído' : 'Incompleto'}
                        variant='tonal'
                        size='small'
                        color={item.isCompleted ? 'success' : 'warning'}
                      />
                      <div className='flex items-center'>
                        <Typography style={{ fontSize: '12px' }}>{item.quizIdentifier}</Typography>
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div style={{ marginTop: '10px', minHeight: '55px' }}>
                        <Typography
                          variant='h6'
                          component={Link}
                          href={getLocalizedUrl(`/quiz-details/${item.index}`, locale as Locale)}
                          className='hover:text-primary'
                        >
                          {item.quizTitle}
                        </Typography>
                      </div>

                      <div style={{ minHeight: '85px' }}>
                        <Typography
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              item.quizDescription.length > 185
                                ? item.quizDescription.substring(0, 185) + '...'
                                : item.quizDescription
                            )
                          }}
                        />
                      </div>
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1'>
                          <i className='ri-time-line text-xl' />
                          <Typography>{`Taxa de conclusão`}</Typography>
                        </div>

                        <Typography variant='body2' color='textSecondary'>
                          [{item.answeredQuestions} / {item.totalQuestions}]
                        </Typography>
                      </div>
                      <LinearProgress
                        color={item.isCompleted ? 'primary' : 'warning'}
                        value={item.completionRate}
                        variant='determinate'
                        className='is-full bs-2'
                      />
                    </div>
                    <div className='flex flex-wrap gap-4'>
                      {item.isCompleted ? (
                        <Button
                          fullWidth
                          variant='outlined'
                          color='secondary'
                          startIcon={<i className='ri-refresh-line' />}
                          component={Link}
                          href={getLocalizedUrl(`/my-attempt-report/${item.index}`, locale as Locale)}
                          className='is-auto flex-auto'
                        >
                          Relatório
                        </Button>
                      ) : (
                        <Button
                          fullWidth
                          variant='outlined'
                          endIcon={
                            <DirectionalIcon ltrIconClass='ri-arrow-right-line' rtlIconClass='ri-arrow-left-line' />
                          }
                          component={Link}
                          href={getLocalizedUrl(
                            `/quiz-questions/${item.quizId}/${(getLoggedUser() as BackEndUsersType).index}`,
                            locale as Locale
                          )}
                          className='is-auto flex-auto'
                        >
                          Continuar Avaliação
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography className='text-center'>Nenhum questionário relacionado ao usuário foi encontrado</Typography>
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

export default MyQuizListTable
