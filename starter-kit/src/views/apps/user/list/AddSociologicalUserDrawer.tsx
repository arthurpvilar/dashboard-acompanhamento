import { useState } from 'react'

import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useForm, Controller } from 'react-hook-form'

import { createUserOnServer } from '@/app/server/actions'

import { UserRole, UserStatus, type BackEndUsersType } from '@/types/apps/userTypes'

type Props = {
  open: boolean
  handleClose: () => void
  userData?: BackEndUsersType[]
  setData: (data: BackEndUsersType[]) => void
}

type FormValidateType = {
  fullName: string
  username: string
  email: string
  role: UserRole
  avatar: string
  status: UserStatus
  password: string
  confirmPassword: string
}

const avatarOptions = Array.from({ length: 8 }, (_, index) => `/images/avatars/${index + 1}.png`)

const AddSociologicalUserDrawer = (props: Props) => {
  const { open, handleClose, userData, setData } = props
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<FormValidateType>({
    defaultValues: {
      fullName: '',
      username: '',
      email: '',
      role: UserRole.STUDENT,
      avatar: avatarOptions[0],
      status: UserStatus.ATIVO,
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit = async (data: FormValidateType) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError('As senhas não coincidem.')

      return
    }

    const newUser: BackEndUsersType & { password: string } = {
      fullName: data.fullName,
      username: data.username,
      email: data.email,
      role: data.role,
      avatar: data.avatar,
      status: data.status,
      password: data.password
    }

    const response = await createUserOnServer(newUser)

    if (response.success) {
      setData([...(userData ?? []), response.data as BackEndUsersType])
      handleClose()
      resetForm({
        fullName: '',
        username: '',
        email: '',
        role: UserRole.STUDENT,
        avatar: avatarOptions[0],
        status: UserStatus.ATIVO,
        password: '',
        confirmPassword: ''
      })
      setPasswordError(null)
    } else {
      setPasswordError(response.message)
    }
  }

  const handleReset = () => {
    handleClose()
    setPasswordError(null)
  }

  const password = watch('password')

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <div className='flex items-center justify-between pli-5 plb-4'>
        <Typography variant='h5'>Adicionar novo usuário</Typography>
        <IconButton size='small' onClick={handleReset}>
          <i className='ri-close-line text-2xl' />
        </IconButton>
      </div>
      <Divider />
      <div className='p-5'>
        <form onSubmit={handleSubmit(data => onSubmit(data))} className='flex flex-col gap-5'>
          <Controller
            name='fullName'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Nome Completo'
                placeholder='John Doe'
                error={!!errors.fullName}
                helperText={errors.fullName ? 'Este campo é obrigatório.' : ''}
              />
            )}
          />
          <Controller
            name='username'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Nome de Usuário'
                placeholder='johndoe'
                error={!!errors.username}
                helperText={errors.username ? 'Este campo é obrigatório.' : ''}
              />
            )}
          />
          <Controller
            name='email'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type='email'
                label='Email'
                placeholder='johndoe@gmail.com'
                error={!!errors.email}
                helperText={errors.email ? 'Este campo é obrigatório.' : ''}
              />
            )}
          />

          <FormControl fullWidth error={!!errors.role}>
            <InputLabel id='role'>Selecione a Função</InputLabel>
            <Controller
              name='role'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field} label='Selecione a Função'>
                  <MenuItem value={UserRole.STUDENT}>Estudante</MenuItem>
                  <MenuItem value={UserRole.TEACHER}>Professor</MenuItem>
                  <MenuItem value={UserRole.ADMINISTRATOR}>Administrador</MenuItem>
                </Select>
              )}
            />
            {errors.role && <FormHelperText>Este campo é obrigatório.</FormHelperText>}
          </FormControl>

          <FormControl fullWidth error={!!errors.avatar}>
            <InputLabel id='avatar'>Selecione o Avatar</InputLabel>
            <Controller
              name='avatar'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field} label='Selecione o Avatar'>
                  {avatarOptions.map((avatar, index) => (
                    <MenuItem key={index} value={avatar}>
                      <div className='flex items-center gap-2'>
                        <img
                          src={avatar}
                          alt={`Avatar ${index + 1}`}
                          style={{ width: 32, height: 32, borderRadius: '50%' }}
                        />
                        <span>{`Avatar ${index + 1}`}</span>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            {errors.avatar && <FormHelperText>Este campo é obrigatório.</FormHelperText>}
          </FormControl>

          <FormControl fullWidth error={!!errors.status}>
            <InputLabel id='status'>Selecione o Status</InputLabel>
            <Controller
              name='status'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field} label='Selecione o Status'>
                  <MenuItem value={UserStatus.ATIVO}>Ativo</MenuItem>
                  <MenuItem value={UserStatus.PENDENTE}>Pendente</MenuItem>
                  <MenuItem value={UserStatus.INATIVO}>Inativo</MenuItem>
                </Select>
              )}
            />
            {errors.status && <FormHelperText>Este campo é obrigatório.</FormHelperText>}
          </FormControl>

          <Controller
            name='password'
            control={control}
            rules={{ required: true, minLength: 6 }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Senha'
                type='password'
                error={!!errors.password}
                helperText={errors.password ? 'A senha deve ter pelo menos 6 caracteres.' : ''}
              />
            )}
          />
          <Controller
            name='confirmPassword'
            control={control}
            rules={{
              required: true,
              validate: value => value === password || 'As senhas não coincidem.'
            }}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label='Confirme a Senha'
                type='password'
                error={!!errors.confirmPassword || !!passwordError}
                helperText={errors.confirmPassword ? 'As senhas não coincidem.' : passwordError}
              />
            )}
          />

          <div className='flex items-center gap-4'>
            <Button variant='contained' type='submit'>
              Confirmar
            </Button>
            <Button variant='outlined' color='error' type='reset' onClick={handleReset}>
              Cancelar
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddSociologicalUserDrawer
