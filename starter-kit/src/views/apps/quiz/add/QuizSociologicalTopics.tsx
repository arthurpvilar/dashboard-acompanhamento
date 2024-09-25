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

// Custom Imports
import { useSociologicalData } from './QuizContext'

// Styled Component Imports
// eslint-disable-next-line import/no-unresolved
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const QuizSociologicalTopics = () => {
  const theme = useTheme()
  const { sociologicalData } = useSociologicalData()

  const [data1, setData1] = useState(sociologicalData.slice(0, 3))
  const [data2, setData2] = useState(sociologicalData.length > 3 ? sociologicalData.slice(3, 6) : [])

  // Atualizar data1 e data2 quando sociologicalData mudar
  useEffect(() => {
    setData1(sociologicalData.slice(0, 3))
    setData2(sociologicalData.length > 3 ? sociologicalData.slice(3, 6) : [])
  }, [sociologicalData])

  const series = [
    {
      data: sociologicalData.map((item) => item.value)
    }
  ]

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
    colors: sociologicalData.map(item => item.color),
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
        return sociologicalData[opt.dataPointIndex]?.name || ''
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
      categories: sociologicalData.map((_, index) => `${index + 1}`),
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
  )
}

export default QuizSociologicalTopics
