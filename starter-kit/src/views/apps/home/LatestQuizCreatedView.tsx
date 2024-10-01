'use client'

// Next Imports
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'
import { Quiz, QuizSociologicalData } from '@/types/apps/quizTypes'
import CustomAvatar from '@/@core/components/mui/Avatar'
import { Card, CardMedia, CardContent, Divider, CardHeader } from '@mui/material'
import OptionMenu from '@/@core/components/option-menu'

// Styled Component Imports
// eslint-disable-next-line import/no-unresolved
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const LatestQuizCreatedView = ({ quizData }: { quizData: Quiz }) => {
  const theme = useTheme()

  // Estado para armazenar os dados do gráfico
  const [data, setData] = useState(...[quizData])
  const [data1, setData1] = useState<QuizSociologicalData[]>([])
  const [data2, setData2] = useState<QuizSociologicalData[]>([])

  // Atualizar data1 e data2 sempre que receber os dados
  useEffect(() => {
    if (data === undefined) return

    setData1(data.sociologicalData.slice(0, 3))
    setData2(data.sociologicalData.length > 3 ? data.sociologicalData.slice(3, 6) : [])
    console.log(data)
  }, [data])

  // Definindo os dados da série para o gráfico
  const series = [
    {
      data: data.sociologicalData.map(item => item.value)
    }
  ]

  // Configurações do ApexCharts
  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '70%',
        distributed: true,
        borderRadius: 7,
        borderRadiusApplication: 'end'
      }
    },
    colors: (data as Quiz).sociologicalData.map(item => item.color),
    grid: {
      strokeDashArray: 8,
      borderColor: 'var(--mui-palette-divider)',
      xaxis: {
        lines: { show: true }
      },
      yaxis: {
        lines: { show: false }
      },
      padding: {
        top: -20,
        left: 21,
        right: 25,
        bottom: 10
      }
    },
    dataLabels: {
      enabled: true,
      offsetY: 8,
      style: {
        colors: ['var(--mui-palette-common-white)'],
        fontWeight: 500,
        fontSize: '0.8125rem'
      },
      formatter(val: string, opt: any) {
        return data.sociologicalData[opt.dataPointIndex]?.name || ''
      }
    },
    tooltip: {
      enabled: true,
      style: {
        fontSize: '0.75rem'
      },
      onDatasetHover: {
        highlightDataSeries: false
      }
    },
    legend: { show: false },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: data.sociologicalData.map((_, index) => `${index + 1}`),
      labels: {
        formatter: val => `${val}%`,
        style: {
          fontSize: '0.8125rem',
          colors: 'var(--mui-palette-text-disabled)'
        }
      }
    },
    yaxis: {
      labels: {
        align: theme.direction === 'rtl' ? 'right' : 'left',
        style: {
          fontWeight: 500,
          fontSize: '0.8125rem',
          colors: 'var(--mui-palette-text-disabled)'
        },
        offsetX: theme.direction === 'rtl' ? -15 : -30
      }
    }
  }

  return (
    <Card>
      <Grid container>
        {/* Parte do DeveloperMeetup */}
        <Grid item xs={12} sm={5}>
          <CardMedia className='bs-[162px]' image='/images/cards/workstation.png'></CardMedia>
          <CardContent className='flex flex-col gap-5'>
            <div className='flex items-center gap-4'>
              <CustomAvatar variant='rounded' skin='light' color='primary' size={58} className='flex flex-col'>
                <Typography color='primary'>Jan</Typography>
                <Typography variant='h5' color='primary'>
                  24
                </Typography>
              </CustomAvatar>
              <div className='flex flex-col gap-1'>
                <Typography color='text.primary' className='font-medium'>
                  Developer Meetup
                </Typography>
                <Typography variant='body2'>
                  The WordPress open source, free software project is the community behind the…
                </Typography>
              </div>
            </div>
            <Divider />
            <div className='flex justify-between'>
              <div className='flex flex-col gap-1 items-center'>
                <i className='ri-star-smile-line text-textSecondary' />
                <Typography>Interested</Typography>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <i className='ri-check-double-line text-textSecondary' />
                <Typography>Joined</Typography>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <i className='ri-group-line text-primary' />
                <Typography color='primary'>Invited</Typography>
              </div>
              <div className='flex flex-col gap-1 items-center'>
                <i className='ri-more-line text-textSecondary' />
                <Typography>More</Typography>
              </div>
            </div>
            <Divider />
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <i className='ri-time-line text-xl text-textSecondary' />
                <Typography className='flex flex-col'>
                  <span>Tuesday, 24 January, 10:20 - 12:30</span>
                  <span>After 1 week</span>
                </Typography>
              </div>
              <div className='flex gap-2'>
                <i className='ri-map-pin-line text-xl text-textSecondary' />
                <Typography className='flex flex-col'>
                  <span>The Rochard NYC</span>
                  <span>1305 Lexington Ave, New York</span>
                </Typography>
              </div>
            </div>
          </CardContent>
        </Grid>
        CardHeader
        {console.log(series)}
        <Grid item xs={12} sm={7}>
          <Card>
            <CardHeader
              title='Topic you are interested in'
              action={<OptionMenu iconClassName='text-textPrimary' options={['Refresh', 'Update', 'Share']} />}
            />
            <CardContent>
              <Grid container>
                <Grid item xs={12} sm={6} className='max-sm:mbe-6'>
                  <AppReactApexCharts type='bar' height={308} width='100%' series={series} options={options} />
                </Grid>
                <Grid item xs={12} sm={6} alignSelf='center'>
                  <div className='flex justify-around items-start'>
                    <div className='flex flex-col gap-y-12'>
                      {data1.map((item, i) => (
                        <div key={i} className='flex gap-2'>
                          <i className='ri-circle-fill text-xs m-[5px]' style={{ color: item.color }} />
                          <div>
                            <Typography>{item.name}</Typography>
                            <Typography variant='h5'>{`${item.value}%`}</Typography>
                          </div>
                        </div>
                      ))}
                    </div>
                    {data2.length > 0 && (
                      <div className='flex flex-col gap-y-12'>
                        {data2.map((item, i) => (
                          <div key={i} className='flex gap-2'>
                            <i className='ri-circle-fill text-xs m-[5px]' style={{ color: item.color }} />
                            <div>
                              <Typography>{item.name}</Typography>
                              <Typography variant='h5'>{`${item.value}%`}</Typography>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Card>
  )
}

export default LatestQuizCreatedView
