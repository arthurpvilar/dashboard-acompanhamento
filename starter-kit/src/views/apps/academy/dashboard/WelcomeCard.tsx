'use client'

// React Imports
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { lighten, darken, useTheme } from '@mui/material/styles'
import type { ThemeColor } from '@core/types'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

type DataType = {
  title: string
  value: string
  color: ThemeColor
  icon: ReactNode
}

// Vars
const data: DataType[] = [
  {
    title: 'Total de Horas',
    value: '34h',
    color: 'primary',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38' fill='none'>
        <path
          opacity='0.2'
          d='M5.9375 26.125V10.6875C5.9375 10.0576 6.18772 9.45352 6.63312 9.00812C7.07852 8.56272 7.68261 8.3125 8.3125 8.3125H29.6875C30.3174 8.3125 30.9215 8.56272 31.3669 9.00812C31.8123 9.45352 32.0625 10.0576 32.0625 10.6875V26.125H5.9375Z'
          fill='currentColor'
        />
        <path
          d='M5.9375 26.125V10.6875C5.9375 10.0576 6.18772 9.45352 6.63312 9.00812C7.07852 8.56272 7.68261 8.3125 8.3125 8.3125H29.6875C30.3174 8.3125 30.9215 8.56272 31.3669 9.00812C31.8123 9.45352 32.0625 10.0576 32.0625 10.6875V26.125M21.375 13.0625H16.625M3.5625 26.125H34.4375V28.5C34.4375 29.1299 34.1873 29.734 33.7419 30.1794C33.2965 30.6248 32.6924 30.875 32.0625 30.875H5.9375C5.30761 30.875 4.70352 30.6248 4.25812 30.1794C3.81272 29.734 3.5625 29.1299 3.5625 28.5V26.125Z'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    )
  },
  {
    title: 'Testes Finalizados',
    value: '82%',
    color: 'info',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='38' height='38' viewBox='0 0 38 38' fill='none'>
        <path
          opacity='0.2'
          d='M11.682 24.7885C10.2683 23.6892 9.1233 22.2826 8.33376 20.6753C7.54423 19.0679 7.13087 17.3019 7.125 15.5111C7.09532 9.06896 12.2758 3.71037 18.718 3.56193C21.2112 3.50283 23.6598 4.2302 25.7164 5.6409C27.7731 7.05159 29.3334 9.07399 30.176 11.4213C31.0187 13.7686 31.1009 16.3216 30.4111 18.7182C29.7213 21.1149 28.2944 23.2335 26.3328 24.7736C25.8995 25.1086 25.5485 25.5382 25.3067 26.0296C25.0648 26.521 24.9386 27.0611 24.9375 27.6088V28.4994C24.9375 28.8144 24.8124 29.1164 24.5897 29.3391C24.367 29.5618 24.0649 29.6869 23.75 29.6869H14.25C13.9351 29.6869 13.633 29.5618 13.4103 29.3391C13.1876 29.1164 13.0625 28.8144 13.0625 28.4994V27.6088C13.0588 27.0652 12.9328 26.5295 12.6938 26.0413C12.4548 25.553 12.109 25.1249 11.682 24.7885Z'
          fill='currentColor'
        />
      </svg>
    )
  }
]

const WelcomeCard = () => {
  // Hooks e estados
  const theme = useTheme()
  const belowMdScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [userName, setUserName] = useState('Usuário')

  // Obter dados do usuário da rota protegida
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('accessToken')
        const response = await fetch('http://localhost:4000/users/protected-route', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        })
        if (response.ok) {
          const data = await response.json()
          setUserName(data.user.fullName) // Atualizar com o nome do usuário logado
        }
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <div className='flex max-md:flex-col md:items-center gap-6 plb-5'>
      <div className='md:is-8/12'>
        <div className='flex items-baseline gap-1 mbe-2'>
          <Typography variant='h5'>Bem vindo de volta,</Typography>
          <Typography variant='h4'>{userName} 👋🏻</Typography>
        </div>
        <div className='mbe-4'>
          <Typography>
            Aqui está o progresso da semana. Acesse um questionário para verificar as informações disponíveis.
          </Typography>
          <Typography>-</Typography>
        </div>
        <div className='flex flex-wrap max-md:flex-col justify-between gap-6'>
          {data.map((item, i) => (
            <div key={i} className='flex gap-4'>
              <CustomAvatar variant='rounded' skin='light' size={54} color={item.color}>
                {item.icon}
              </CustomAvatar>
              <div>
                <Typography className='font-medium'>{item.title}</Typography>
                <Typography variant='h5' color={`${item.color}.main`}>
                  {item.value}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WelcomeCard


