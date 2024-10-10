'use client'

import { useState } from 'react'

import { useRouter } from 'next/navigation'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'

import classnames from 'classnames'

import Link from '@components/Link'
import Logo from '@components/layout/shared/Logo'
import Illustrations from '@components/Illustrations'
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

// Definição do tipo Mode
import type { Mode } from '@core/types'

interface LoginV2Props {
  mode: Mode
}

const LoginV2 = ({ mode }: LoginV2Props) => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()
  const { settings } = useSettings()

  const authBackground = useImageVariant(
    mode,
    '/images/pages/auth-v2-mask-light.png',
    '/images/pages/auth-v2-mask-dark.png'
  )

  const handleClickShowPassword = () => setIsPasswordShown(show => !show)

  // Corrigir o tipo do parâmetro `e`
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    try {
      // URL completa apontando para o backend rodando localmente na porta 4000
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password }) // Dados de login
      })

      if (response.ok) {
        const data = await response.json()

        localStorage.setItem('accessToken', data.access_token)
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/home')
      } else {
        setError('Credenciais inválidas. Tente novamente.')
      }
    } catch (err) {
      console.error('Erro no fetch:', err)
      setError('Erro ao tentar fazer login. Verifique sua conexão.')
    }
  }

  return (
    <div className='flex bs-full justify-center'>
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <div className='plb-12 pis-12'></div>
        <Illustrations image1={{ src: '/images/illustrations/objects/tree-2.png' }} maskImg={{ src: authBackground }} />
      </div>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <Link className='absolute block-start-5 sm:block-start-[38px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </Link>
        <div className='flex flex-col gap-5 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset]'>
          <div>
            <Typography variant='h4'>{`Bem-vindo !!👋🏻`}</Typography>
            <Typography className='mbs-1'>Entre com suas credenciais de acesso</Typography>
          </div>
          <form noValidate autoComplete='off' onSubmit={handleSubmit} className='flex flex-col gap-5'>
            {error && <Typography color='error'>{error}</Typography>}
            <TextField autoFocus fullWidth label='Email' value={email} onChange={e => setEmail(e.target.value)} />
            <TextField
              fullWidth
              label='Senha'
              type={isPasswordShown ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      size='small'
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={e => e.preventDefault()}
                    >
                      <i className={isPasswordShown ? 'ri-eye-off-line' : 'ri-eye-line'} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <div className='flex justify-between items-center flex-wrap gap-x-3 gap-y-1'>
              <FormControlLabel control={<Checkbox />} label='Remember me' />
              <Typography className='text-end' color='primary' component={Link}>
                Esqueceu a Senha?
              </Typography>
            </div>
            <Button fullWidth variant='contained' type='submit'>
              Entrar
            </Button>
            {false && (
              <>
                <div className='flex justify-center items-center flex-wrap gap-2'>
                  <Typography>Novo na plataforma?</Typography>
                  <Typography component={Link} color='primary'>
                    Criar Conta
                  </Typography>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginV2
