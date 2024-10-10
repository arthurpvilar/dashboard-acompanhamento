'use client'

// Next Imports
import { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import type { ApexOptions } from 'apexcharts'

import type { QuizStatisticalSociologicalDataDto } from '@/types/apps/quizTypes'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

type SociologicalTopicsProps = {
  sociologicalData: QuizStatisticalSociologicalDataDto[]
}

const SociologicalTopics = ({ sociologicalData = [] }: SociologicalTopicsProps) => {
  const theme = useTheme()

  // State para armazenar os dados do gráfico
  const [seriesData, setSeriesData] = useState<number[]>([])
  const [labels, setLabels] = useState<string[]>([])
  const [chartColors, setChartColors] = useState<string[]>([])
  const [quantities, setQuantities] = useState<number[]>([])

  useEffect(() => {
    if (sociologicalData.length > 0) {
      const totalValue = sociologicalData.reduce((acc, data) => acc + (data.value || 0), 0)

      const seriesPercentages = sociologicalData.map(data =>
        totalValue > 0 ? parseFloat((((data?.value as number) / totalValue) * 100).toFixed(2)) : 0
      )

      const seriesQuantities = sociologicalData.map(data => data.value || 0)
      const labelValues = sociologicalData.map(data => data.name)
      const colorValues = sociologicalData.map(data => data.color)

      setSeriesData(seriesPercentages)
      setQuantities(seriesQuantities) // Armazena os valores reais
      setLabels(labelValues)
      setChartColors(colorValues)
    }
  }, [sociologicalData])

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
      },
      max: 100
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
    <Grid container>
      <Grid item xs={12} sm={6} className='max-sm:mbe-6'>
        <AppReactApexCharts type='bar' height={308} width='100%' series={[{ data: seriesData }]} options={options} />
      </Grid>
      <Grid item xs={12} sm={6} alignSelf='center'>
        <div className='flex justify-around items-start'>
          <div className='flex flex-col gap-y-12'>
            {sociologicalData.slice(0, Math.ceil(sociologicalData.length / 2)).map((item, i) => {
              const totalValue = sociologicalData.reduce((sum, data) => sum + (data.value || 0), 0)
              const percentage = totalValue > 0 ? ((item.value || 0) / totalValue) * 100 : 0

              return (
                <div key={i} className='flex gap-2'>
                  <i className={classnames('ri-circle-fill text-xs m-[5px]')} style={{ color: item.color }} />
                  <div>
                    <Typography>{item.name}</Typography>
                    <Typography variant='h5'>{`${percentage.toFixed(2)}%`}</Typography>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='flex flex-col gap-y-12'>
            {sociologicalData.slice(Math.ceil(sociologicalData.length / 2)).map((item, i) => {
              const totalValue = sociologicalData.reduce((sum, data) => sum + (data.value || 0), 0)
              const percentage = totalValue > 0 ? ((item.value || 0) / totalValue) * 100 : 0

              return (
                <div key={i} className='flex gap-2'>
                  <i className={classnames('ri-circle-fill text-xs m-[5px]')} style={{ color: item.color }} />
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
    </Grid>
  )
}

export default SociologicalTopics
