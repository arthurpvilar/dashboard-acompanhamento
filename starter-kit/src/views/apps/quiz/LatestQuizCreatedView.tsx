'use client'

// Next Imports
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// MUI Imports
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'
import { Quiz, QuizSociologicalData } from '@/types/apps/quizTypes'
import CustomAvatar from '@/@core/components/mui/Avatar'
import { Card, CardMedia, CardContent, Divider, CardHeader, Grid, Box, Button } from '@mui/material'
import OptionMenu from '@/@core/components/option-menu'
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

// Styled Component Imports
// eslint-disable-next-line import/no-unresolved
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

type DataType = {
  title: string
  value: number
  colorClass: string
}

// Vars
const series = [
  {
    data: [35, 20, 14, 12, 10, 9]
  }
]

const data1: DataType[] = [
  { title: 'Interesse', value: 35, colorClass: 'text-primary' },
  { title: 'Confiança', value: 20, colorClass: 'text-info' },
  { title: 'Frustração', value: 14, colorClass: 'text-success' }
]

const data2: DataType[] = [
  { title: 'Ansiedade', value: 12, colorClass: 'text-secondary' },
  { title: 'Curiosidade', value: 10, colorClass: 'text-error' },
  { title: 'Satisfação', value: 9, colorClass: 'text-warning' }
]

const labels = ['Interesse', 'Confiança', 'Frustração', 'Ansiedade', 'Curiosidade', 'Satisfação']

const LatestQuizCreatedView = ({ quizData }: { quizData: Quiz | null }) => {
  // Hooks
  const theme = useTheme()

  // Vars
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

    colors: [
      'var(--mui-palette-primary-main)',
      'var(--mui-palette-info-main)',
      'var(--mui-palette-success-main)',
      'var(--mui-palette-secondary-main)',
      'var(--mui-palette-error-main)',
      'var(--mui-palette-warning-main)'
    ],
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
        return labels[opt.dataPointIndex]
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
      categories: ['6', '5', '4', '3', '2', '1'],
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
      <CardHeader
        title='Último questionário cadastrado no sistema'
        className='flex-wrap gap-4'
        action={<OptionMenu iconClassName='text-textPrimary' options={['Detalhamento']} />}
      />
      <Grid container>
        <Grid item xs={12} sm={5} spacing={3}>
          <Box mb={4}>
            <div>
              <CardMedia
                className='bs-[162px]'
                image='https://www.senaisolucoes.com.br/xp_images/TDAH.png'
                sx={{
                  borderTopRightRadius: '12px',
                  borderBottomRightRadius: '12px',
                  overflow: 'hidden'
                }}
              />
            </div>
          </Box>
          <CardContent className='flex flex-col gap-5'>
            <div className='flex items-center gap-4'>
              <CustomAvatar variant='rounded' skin='light' color='primary' size={58} className='flex flex-col'>
                <Typography color='primary'>Out</Typography>
                <Typography variant='h5' color='primary'>
                  02
                </Typography>
              </CustomAvatar>
              <div className='flex flex-col gap-1'>
                <Typography color='text.primary' className='font-medium'>
                  Conhecimentos Gerais
                </Typography>
                <Typography variant='body2'>Start Lab</Typography>
              </div>
            </div>
            <Divider />
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <Typography className='flex flex-col gap-2'>
                  <Typography color='text.primary' className='font-medium'>
                    Descrição
                  </Typography>
                  <span className={classnames(styles.tableBody)}>
                    Esse quiz é uma atividade interativa projetada para testar e expandir a amplitude de conhecimento de
                    um indivíduo em diversas áreas. Esse tipo de quiz pode ser utilizado tanto em ambientes educacionais
                    quanto em situações de lazer, proporcionando uma maneira divertida e desafiadora de aprender e
                    revisar informações.
                  </span>
                </Typography>
              </div>
            </div>
          </CardContent>
        </Grid>
        <Grid item xs={1} sm={7} sx={{ mt: '-26px' }}>
          <CardHeader title='Dados sociológicos' />
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
                        <i className='ri-circle-fill text-xs m-[5px]' style={{ color: item.colorClass }} />
                        <div>
                          <Typography>{item.title}</Typography>
                          <Typography variant='h5'>{`${item.value}%`}</Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='flex flex-col gap-y-12'>
                    {data2.map((item, i) => (
                      <div key={i} className='flex gap-2'>
                        <i className='ri-circle-fill text-xs m-[5px]' style={{ color: item.colorClass }} />
                        <div>
                          <Typography>{item.title}</Typography>
                          <Typography variant='h5'>{`${item.value}%`}</Typography>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Grid>
              <Button
                variant='outlined'
                sx={{ mt: 6, width: '90%', mx: 'auto' }} // Definindo o botão para ocupar toda a largura disponível
                className='capitalize'
                startIcon={<i className='ri-sticky-note-line' />}
              >
                Gerar Relatório
              </Button>
            </Grid>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  )
}

export default LatestQuizCreatedView
