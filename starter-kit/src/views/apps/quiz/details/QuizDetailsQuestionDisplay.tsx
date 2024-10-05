import { useState, useRef } from 'react'

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  Box,
  IconButton,
  Dialog,
  DialogTitle,
  Slider,
  Chip
} from '@mui/material'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'

import type { QuizQuestionDto } from '@/types/apps/quizTypes'

interface QuizDetailsQuestionDisplayProps {
  questions: QuizQuestionDto[]
}

const QuizDetailsQuestionDisplay: React.FC<QuizDetailsQuestionDisplayProps> = ({ questions }) => {
  // Hooks
  const theme = useTheme()

  const [expanded, setExpanded] = useState<number | false>(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [openImageDialog, setOpenImageDialog] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handlePlayPause = () => {
    if (!audioRef || !audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(error => console.error('Erro ao reproduzir:', error))
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

  const handleOpenImageDialog = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setOpenImageDialog(true)
  }

  const handleCloseImageDialog = () => {
    setOpenImageDialog(false)
    setSelectedImage(null)
  }

  return (
    <div>
      <Typography className='mb-4'>
        Estas são as perguntas criadas para o questionário, não é possível fazer alterações nas mesmas, isso é um modo
        de visualização.
      </Typography>

      {questions.map((item, index) => {
        const isAudioQuestion = item.type === 'Pergunta Auditiva e Resposta Dissertativa'

        return (
          <Box key={index} mb={4}>
            {' '}
            {/* Adicionando espaçamento entre perguntas */}
            <Accordion expanded={expanded === index} onChange={handleChange(index)}>
              <AccordionSummary
                expandIcon={<i className='ri-arrow-right-s-line text-2xl text-textSecondary' />}
                aria-controls={`panel-content-${index}`}
                sx={{
                  padding: theme.spacing(3, 5),
                  transition: 'none',
                  backgroundColor: 'var(--mui-palette-divider)',
                  borderBottom: '1px solid var(--mui-palette-divider) !important',
                  '&.Mui-expanded': {
                    '& .MuiAccordionSummary-expandIconWrapper': {
                      transform: 'rotate(90deg)'
                    }
                  }
                }}
              >
                <div style={{ flexGrow: 1 }}>
                  {isAudioQuestion ? (
                    <Box display='flex' flexDirection='column'>
                      <audio ref={audioRef} src={item.audio?.audioUrl || ''} controls={false} />
                      <Box display='flex' alignItems='center' paddingTop={1}>
                        <IconButton onClick={handlePlayPause} size='large'>
                          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                        </IconButton>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          sx={{ marginLeft: '10px', marginRight: '15px' }}
                        >
                          {formatTime(audioRef.current?.currentTime || 0)}
                        </Typography>
                        <Box flexGrow={1} mx={2}>
                          <Slider value={progress} onChange={handleSliderChange} />
                        </Box>
                      </Box>
                    </Box>
                  ) : (
                    <Typography
                      variant='h5'
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: expanded === index ? 'block' : '-webkit-box',
                        WebkitLineClamp: expanded === index ? 'none' : 1,
                        WebkitBoxOrient: 'vertical',
                        wordBreak: 'break-word',
                        width: '100%',
                        marginRight: '16px'
                      }}
                      dangerouslySetInnerHTML={{ __html: item.question || '' }}
                    />
                  )}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <List role='list' component='div' className='flex flex-col gap-4 plb-0'>
                  {item.options?.map((option, i) => (
                    <ListItem
                      key={i}
                      role='listitem'
                      className='gap-0 p-0'
                      sx={{ flexDirection: 'column', alignItems: 'flex-start' }} // Força o alinhamento vertical
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Typography variant='body2' sx={{ fontWeight: 'bold', marginRight: '8px' }}>
                          {i + 1}.
                        </Typography>
                        <ListItemIcon>
                          <Checkbox tabIndex={-1} className='p-5' checked={option.isChecked} disabled />
                        </ListItemIcon>
                        <Typography
                          className='font-medium !text-textPrimary'
                          dangerouslySetInnerHTML={{ __html: option.title }}
                        />
                      </Box>
                      {/* Adicionando o Chip abaixo do texto da opção */}
                      {option.sociologicalData && (
                        <Box sx={{ marginTop: '8px', marginLeft: '84px' }}>
                          <Chip
                            label={`${option.sociologicalData.name} - Peso: ${option.weight}`}
                            variant='tonal'
                            size='small'
                            sx={{ backgroundColor: option.sociologicalData.color, color: '#fff' }}
                          />
                        </Box>
                      )}
                      {option.image && (option.image.imageFile || option.image.imageUrl) && (
                        <IconButton
                          aria-label='Visualizar Imagem'
                          onClick={() => {
                            const imageUrl = option.image?.imageFile
                              ? URL.createObjectURL(option.image.imageFile)
                              : option.image?.imageUrl

                            if (imageUrl) handleOpenImageDialog(imageUrl)
                          }}
                          sx={{ marginLeft: 'auto' }}
                        >
                          <i className='ri-image-line' />
                        </IconButton>
                      )}
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          </Box>
        )
      })}

      <Dialog open={openImageDialog} onClose={handleCloseImageDialog} maxWidth='md' fullWidth>
        <DialogTitle>
          <Box display='flex' justifyContent='space-between' alignItems='center'>
            Visualização da Imagem
            <IconButton onClick={handleCloseImageDialog}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <Box display='flex' justifyContent='center' alignItems='center' p={2}>
          {selectedImage && (
            <img src={selectedImage} alt='Imagem da Alternativa' style={{ maxWidth: '100%', maxHeight: '80vh' }} />
          )}
        </Box>
      </Dialog>
    </div>
  )
}

export default QuizDetailsQuestionDisplay
