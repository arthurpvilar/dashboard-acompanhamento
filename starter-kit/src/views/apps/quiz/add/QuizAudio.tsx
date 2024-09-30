'use client'

import { useState, useRef, useEffect } from 'react'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { styled, keyframes } from '@mui/material/styles'
import { Box, TextField, Slider, Link, Button } from '@mui/material'
import { useDropzone } from 'react-dropzone'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import DeleteIcon from '@mui/icons-material/Delete'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'

// eslint-disable-next-line import/no-unresolved
import CustomAvatar from '@core/components/mui/Avatar'

import { useSociologicalData } from './QuizContext'

// Keyframes for pulsing effect
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.6);
    opacity: 0;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
`

const Dropzone = styled('div')(({ theme }) => ({
  '& .dropzone': {
    border: '2px dashed #cccccc',
    borderRadius: '12px',
    padding: `${theme.spacing(10)} ${theme.spacing(4)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    minHeight: '150px',
    position: 'relative'
  }
}))

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PulseCircle = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  animation: `${pulse} 1s infinite`,
  zIndex: 0
}))

const IconContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomSlider = styled(Slider)(({ theme }) => ({
  height: 4,
  '& .MuiSlider-thumb': {
    width: 12,
    height: 12,
    '&:hover, &.Mui-focusVisible': {
      boxShadow: '0px 0px 0px 8px rgba(58, 133, 137, 0.16)'
    }
  }
}))

const QuizAudio: React.FC = () => {
  const { audioFile, setAudioFile } = useSociologicalData()
  const [showUrlInput, setShowUrlInput] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    accept: {
      'audio/*': ['.mp3', '.wav', '.webm', '.flac', '.m4a', '.mp4', '.mpeg']
    },
    onDrop: (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      const fileUrl = URL.createObjectURL(file)
      const audioBlob = fileToBlob(file)

      setAudioFile({
        audioFile: file,
        audioUrl: fileUrl,
        blobData: audioBlob
      })

      if (audioRef.current) {
        audioRef.current.src = fileUrl
        audioRef.current.load()
        setIsPlaying(false) // Reiniciar o estado de reprodução
      }
    }
  })

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100

        if (!Number.isNaN(currentProgress)) {
          setProgress(currentProgress)
        }
      }
    }

    const audioElement = audioRef.current

    if (audioElement) {
      audioElement.addEventListener('timeupdate', updateProgress)
      audioElement.addEventListener('ended', () => {
        setIsPlaying(false)
      })

      return () => {
        audioElement.removeEventListener('timeupdate', updateProgress)
        audioElement.removeEventListener('ended', () => {
          setIsPlaying(false)
        })
      }
    }
  }, [])

  const handleRemoveFile = () => {
    setAudioFile(null)
    setProgress(0)
    setIsPlaying(false)

    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current.src = ''
    }
  }

  const toggleUrlInput = () => {
    setShowUrlInput(!showUrlInput)
  }

  const handleUrlChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value
    const audioBlob = await urlToBlob(url)

    setAudioFile({
      audioFile: null,
      audioUrl: url,
      blobData: audioBlob
    })

    if (audioRef.current) {
      audioRef.current.src = url
      audioRef.current.load()
      setIsPlaying(false) // Reiniciar o estado de reprodução
    }
  }

  const handlePlayPause = () => {
    if (!audioRef || !audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(error => {
          console.error('Erro ao reproduzir:', error)
        })
    }
  }

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (audioRef.current && typeof newValue === 'number') {
      const newTime = (newValue / 100) * audioRef.current.duration

      audioRef.current.currentTime = newTime
      setProgress(newValue)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  // Função para converter um File em Blob
  const fileToBlob = (file: File): Blob => {
    return file
  }

  // Função para converter uma URL em Blob
  const urlToBlob = async (url: string): Promise<Blob | null> => {
    try {
      const response = await fetch(url)

      if (!response.ok) {
        throw new Error(`Erro ao buscar a URL: ${response.statusText}`)
      }

      const blob = await response.blob()

      return blob
    } catch (error) {
      console.error('Erro ao converter URL em Blob:', error)

      return null
    }
  }

  return (
    <Dropzone>
      <Card>
        <CardHeader
          title='Áudio do Quiz'
          action={
            <Typography
              component={Link}
              href='/'
              onClick={e => {
                e.preventDefault()
                toggleUrlInput()
              }}
              color='primary'
              className='font-medium'
            >
              {showUrlInput ? 'Fechar campo de URL' : 'Adicionar a partir de URL'}
            </Typography>
          }
          sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
        />
        <CardContent>
          <Box mb={4}>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              {audioFile?.audioFile || audioFile?.audioUrl ? (
                <IconContainer>
                  {isPlaying && <PulseCircle />}
                  <VolumeUpIcon
                    sx={{ paddingBottom: '59px', marginTop: '58px', fontSize: 100, color: 'rgba(0, 0, 0, 0.54)' }}
                  />
                </IconContainer>
              ) : (
                <div className='flex items-center flex-col gap-2 text-center'>
                  <CustomAvatar variant='rounded' skin='light' color='secondary'>
                    <i className='ri-upload-2-line' />
                  </CustomAvatar>
                  <Typography variant='h4'>Arraste e solte seu áudio aqui.</Typography>
                  <Typography color='text.disabled'>ou</Typography>
                  <Button variant='outlined' size='small'>
                    Procurar Áudio
                  </Button>
                </div>
              )}
            </div>
          </Box>
          {showUrlInput && (
            <Box mb={4}>
              <div className='mt-4'>
                <TextField
                  fullWidth
                  label='URL do Áudio'
                  onChange={handleUrlChange}
                  placeholder='Cole o link do áudio aqui'
                />
              </div>
            </Box>
          )}
          <Box mb={4}>
            {audioRef && audioRef.current && <audio ref={audioRef} controls={false} />}
            {(audioFile?.audioFile || audioFile?.audioUrl) && (
              <Box display='flex' alignItems='center' paddingTop={1}>
                <IconButton onClick={handlePlayPause} size='large' sx={{ paddingTop: '5px' }}>
                  {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                </IconButton>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  sx={{ paddingBottom: '3px', marginLeft: '10px', marginRight: '15px' }}
                >
                  {formatTime(audioRef.current?.currentTime || 0)}
                </Typography>
                <Box flexGrow={1} mx={2} sx={{ paddingTop: '5px' }}>
                  <CustomSlider value={progress} onChange={handleSliderChange} />
                </Box>
                <IconButton color='error' onClick={handleRemoveFile} sx={{ marginLeft: '0px' }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>
    </Dropzone>
  )
}

export default QuizAudio
