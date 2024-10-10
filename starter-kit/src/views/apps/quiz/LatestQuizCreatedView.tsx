'use client'

// Next Imports
import { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { Card, CardMedia, CardContent, Divider, CardHeader, Grid, Box, Button } from '@mui/material'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

import type { QuizDetailsDto } from '@/types/apps/quizTypes'
import CustomAvatar from '@/@core/components/mui/Avatar'
import OptionMenu from '@/@core/components/option-menu'
import { getLocalizedUrl } from '@/utils/i18n'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const LatestQuizCreatedView = ({ quizData }: { quizData: QuizDetailsDto }) => {
  // Hooks
  const theme = useTheme()
  const [richTextContent, setRichTextContent] = useState<string | null>(null)
  const [seriesData, setSeriesData] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])
  const [chartColors, setChartColors] = useState<string[]>([])
  const [quantities, setQuantities] = useState<number[]>([])

  // Atualizando os dados do gráfico com base no sociologicalDataStatistics
  useEffect(() => {
    if (quizData?.description) {
      setRichTextContent(quizData.description)
    }

    if (quizData?.sociologicalDataStatistics.length > 0) {
      const totalValue = quizData?.sociologicalDataStatistics.reduce((acc, data) => acc + (data.value || 0), 0)

      const seriesPercentages = quizData?.sociologicalDataStatistics.map(data =>
        totalValue > 0 ? parseFloat((((data?.value as number) / totalValue) * 100).toFixed(2)) : 0
      )

      const seriesQuantities = quizData?.sociologicalDataStatistics.map(data => data.value || 0)
      const labelValues = quizData?.sociologicalDataStatistics.map(data => data.name)
      const colorValues = quizData?.sociologicalDataStatistics.map(data => data.color)

      setSeriesData(seriesPercentages)
      setQuantities(seriesQuantities) // Armazena os valores reais
      setLabels(labelValues)
      setChartColors(colorValues)
    }
  }, [quizData])

  // Configuração do gráfico ApexChart
  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '30%',
        distributed: true,
        borderRadius: 7,
        borderRadiusApplication: 'end'
      }
    },
    colors: chartColors,
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
      },
      y: {
        formatter: function (value, { dataPointIndex }) {
          return `${quantities[dataPointIndex]} indicadores` // Mostra a quantidade real
        }
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
      categories: labels,
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
        action={
          <OptionMenu
            iconClassName='text-textPrimary'
            options={[
              {
                text: 'Detalhamento',
                icon: 'ri-eye-line',
                href: getLocalizedUrl(`/quiz-details/${quizData.id}`),
                linkProps: { className: 'flex items-center gap-2 is-full plb-1.5 pli-4' }
              }
            ]}
          />
        }
      />
      <Grid container>
        <Grid item xs={12} sm={5} spacing={3}>
          <Box mb={4}>
            <div>
              <CardMedia
                className='bs-[162px]'
                image={quizData?.image?.imageUrl || ''}
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
                <Typography color='primary'>
                  {new Date(quizData.createdAt)
                    .toLocaleDateString('pt-BR', { month: 'short' })
                    .charAt(0)
                    .toUpperCase() +
                    new Date(quizData.createdAt).toLocaleDateString('pt-BR', { month: 'short' }).slice(1)}
                </Typography>
                <Typography variant='h5' color='primary'>
                  {new Date(quizData.createdAt).getDate()}
                </Typography>
              </CustomAvatar>
              <div className='flex flex-col gap-1'>
                <Typography color='text.primary' className='font-medium'>
                  {quizData.title}
                </Typography>
                <Typography variant='body2'>Start Lab</Typography>
              </div>
            </div>
            <Divider />
            <div className='flex flex-col gap-2'>
              <div className='flex gap-2'>
                <Typography component='div' className='flex flex-col gap-2'>
                  <Typography color='text.primary' className='font-medium'>
                    Descrição
                  </Typography>
                  <Typography
                    sx={{ textAlign: 'justify' }}
                    dangerouslySetInnerHTML={{ __html: richTextContent || '' }}
                  />
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
                <AppReactApexCharts
                  type='bar'
                  height={308}
                  width='100%'
                  series={[{ data: seriesData }]}
                  options={options}
                />
              </Grid>
              <Grid item xs={12} sm={6} alignSelf='center'>
                <div className='flex justify-around items-start'>
                  <div className='flex flex-col gap-y-12'>
                    {quizData?.sociologicalDataStatistics
                      .slice(0, Math.ceil(quizData?.sociologicalDataStatistics.length / 2))
                      .map((item, i) => {
                        const totalValue = quizData?.sociologicalDataStatistics.reduce(
                          (sum, data) => sum + (data.value || 0),
                          0
                        )
                        
                        const percentage = totalValue > 0 ? ((item.value || 0) / totalValue) * 100 : 0

                        return (
                          <div key={i} className='flex gap-2'>
                            <i className={'ri-circle-fill text-xs m-[5px]'} style={{ color: item.color }} />
                            <div>
                              <Typography>{item.name}</Typography>
                              <Typography variant='h5'>{`${percentage.toFixed(2)}%`}</Typography>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                  <div className='flex flex-col gap-y-12'>
                    {quizData?.sociologicalDataStatistics
                      .slice(Math.ceil(quizData?.sociologicalDataStatistics.length / 2))
                      .map((item, i) => {
                        const totalValue = quizData?.sociologicalDataStatistics.reduce(
                          (sum, data) => sum + (data.value || 0),
                          0
                        )

                        const percentage = totalValue > 0 ? ((item.value || 0) / totalValue) * 100 : 0

                        return (
                          <div key={i} className='flex gap-2'>
                            <i className={'ri-circle-fill text-xs m-[5px]'} style={{ color: item.color }} />
                            <div>
                              <Typography>{item.name}</Typography>
                              <Typography variant='h5'>{`${percentage.toFixed(2)}%`}</Typography>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </Grid>
              <Button
                variant='outlined'
                sx={{ mt: 6, width: '90%', mx: 'auto' }}
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
