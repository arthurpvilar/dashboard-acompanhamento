'use client'

// React Imports
import { useEffect, useState } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import { Card, CardContent, Grid } from '@mui/material'

const UserWelcomeCard = () => {
  // Hooks e estados
  const [userName, setUserName] = useState('Usuário')

  // Obter dados do usuário da rota protegida
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('accessToken')

        const response = await fetch('http://localhost:4000/users/protected-route', {
          headers: {
            Authorization: `Bearer ${token}`
          }
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
    <Card className='relative overflow-visible sm:mt-6 md:mt-0'>
      <CardContent className='!pbe-0 sm:!pbe-5'>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h4' className='mbe-9'>
              Bem vindo de volta, <span className='font-bold'>{userName}!</span> 🎉
            </Typography>
            <Typography>
              Verifique o progresso do último questionário criado. As informações principais estão localizadas abaixo.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className='flex justify-center sm:absolute sm:inline-end-11 sm:bottom-0'>
            <img
              alt='Congratulations John'
              src='/images/illustrations/characters-with-objects/3.png'
              className='bs-auto max-is-full max-bs-[189px]'
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default UserWelcomeCard
