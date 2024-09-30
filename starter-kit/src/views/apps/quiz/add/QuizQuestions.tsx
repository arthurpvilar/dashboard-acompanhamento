'use client'

// React Imports
import { useEffect, useRef, useState } from 'react'
import type { ChangeEvent, SyntheticEvent } from 'react'

// MUI Imports
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import DeleteIcon from '@mui/icons-material/Delete'

// Others
import { styled, keyframes } from '@mui/material/styles'
import { Box, TextField, Slider, Link, Button, InputLabel, Menu, MenuItem, Select, IconButton } from '@mui/material'

// Tiptap Imports
import type { Editor } from '@tiptap/react'
import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { TextAlign } from '@tiptap/extension-text-align'
import { Placeholder } from '@tiptap/extension-placeholder'

// Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import CloseIcon from '@mui/icons-material/Close'

// Context Imports
import Divider from '@mui/material/Divider'

// Components Imports
// eslint-disable-next-line import/no-unresolved
import { useDropzone } from 'react-dropzone'

import CustomIconButton from '@core/components/mui/IconButton'

// Type Imports
import type { QuizQuestion, QuizQuestionOption, QuizSociologicalOptionData } from '@/types/apps/quizTypes'

// eslint-disable-next-line import/no-unresolved
import CustomAvatar from '@/@core/components/mui/Avatar'
import QuizOptionImage from './QuizOptionImage'
import AudioPlayer from './QuizOptionAudioPlayer'

import type { SociologicalDataType } from './QuizContext'
import { useSociologicalData } from './QuizContext'

// Custom Styled Components
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

export const Accordion = styled(MuiAccordion)({
  boxShadow: 'none !important',
  border: '1px solid var(--mui-palette-divider) !important',
  borderRadius: '0 !important',
  overflow: 'hidden',
  background: 'none',
  width: '100%',
  '&:not(:last-of-type)': {
    borderBottom: '0 !important'
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: 'auto'
  },
  '&:first-of-type': {
    borderTopLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderTopRightRadius: 'var(--mui-shape-borderRadius) !important'
  },
  '&:last-of-type': {
    borderBottomLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderBottomRightRadius: 'var(--mui-shape-borderRadius) !important'
  }
})

export const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  marginBottom: -1,
  padding: theme.spacing(3, 5),
  transition: 'none',
  backgroundColor: 'var(--mui-palette-action-hover)',
  borderBottom: '1px solid var(--mui-palette-divider) !important',
  '&.Mui-expanded': {
    '& .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(90deg)'
    }
  }
}))

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `${theme.spacing(4, 3)} !important`,
  backgroundColor: 'var(--mui-palette-background-paper)',
  width: '100%'
}))

// Custom Toolbar for the Editor (Simple for questions)
const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-wrap gap-x-3 gap-y-1 pbs-5 pbe-4 pli-5'>
      <CustomIconButton
        {...(editor.isActive('bold') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className='ri-bold text-textSecondary' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('underline') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className='ri-underline text-textSecondary' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('italic') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className='ri-italic text-textSecondary' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='ri-strikethrough text-textSecondary' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'left' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className='ri-align-left text-textSecondary' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'center' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i className='ri-align-center text-textSecondary' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'right' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i className='ri-align-right text-textSecondary' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i className='ri-align-justify text-textSecondary' />
      </CustomIconButton>
    </div>
  )
}

// Custom Toolbar for the Options Editor (with Sociological Data and Weight)
const OptionEditorToolbar = ({
  editor,
  selectedSociological,
  onSociologicalSelect,
  selectedWeight,
  setSelectedWeight,
  optionKey
}: {
  editor: Editor | null
  selectedSociological: any
  onSociologicalSelect: (data: SociologicalDataType) => void
  selectedWeight: number
  setSelectedWeight: (weight: number) => void
  optionKey: string
}) => {
  const { sociologicalData, showOptionImage, setShowOptionImage } = useSociologicalData()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // console.log(editor);
  // console.log(selectedSociological);
  // console.log(onSociologicalSelect);
  // console.log(selectedWeight);
  // console.log(setSelectedWeight);
  // console.log(setSelectedWeight);
  // console.log(optionKey);
  // console.log(optionImages);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleOpenImageDialog = () => {
    if (showOptionImage[optionKey] === undefined) {
      setShowOptionImage(optionKey, true)
    } else {
      setShowOptionImage(optionKey, !showOptionImage[optionKey])
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  if (!editor) {
    return null
  }

  return (
    <div className='flex flex-wrap gap-x-2 gap-y-1 pbs-3 pbe-3 pli-3'>
      {/* Dropdown CustomIconButton */}
      <CustomIconButton onClick={handleClick} size='small' variant='outlined'>
        {selectedSociological ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 16,
                height: 16,
                backgroundColor: selectedSociological.color,
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--border-radius)'
              }}
            />
            <span style={{ fontSize: '0.875rem' }}>{selectedSociological.name}</span>
          </Box>
        ) : (
          <span style={{ fontSize: '0.875rem' }}>Selecionar Propriedade Sociológica</span>
        )}
      </CustomIconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {sociologicalData.map((data, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              const selectedData = sociologicalData[index] // Recupera o dado sociológico correspondente

              onSociologicalSelect(selectedData) // Passa o objeto correto
              handleClose()
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 20,
                  height: 20,
                  backgroundColor: data.color,
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)'
                }}
              />
              <span style={{ fontSize: '0.875rem' }}>{data.name}</span>
            </Box>
          </MenuItem>
        ))}
      </Menu>
      {/* Right section - Weight selection */}
      <div>
        <FormControl variant='outlined' size='small' sx={{ minWidth: 80 }}>
          <InputLabel style={{ fontSize: '0.75rem' }}>Peso</InputLabel>
          <Select
            label='Peso'
            value={selectedWeight}
            onChange={e => setSelectedWeight(Number(e.target.value))}
            displayEmpty
            inputProps={{ 'aria-label': 'Selecione o peso' }}
            sx={{ fontSize: '0.75rem' }}
          >
            <MenuItem value={1} sx={{ fontSize: '0.75rem' }}>
              1
            </MenuItem>
            <MenuItem value={2} sx={{ fontSize: '0.75rem' }}>
              2
            </MenuItem>
            <MenuItem value={3} sx={{ fontSize: '0.75rem' }}>
              3
            </MenuItem>
            <MenuItem value={4} sx={{ fontSize: '0.75rem' }}>
              4
            </MenuItem>
            <MenuItem value={5} sx={{ fontSize: '0.75rem' }}>
              5
            </MenuItem>
          </Select>
        </FormControl>
      </div>
      <Divider orientation={'vertical'} flexItem />
      {/* Restante dos botões do Editor */}
      <CustomIconButton
        {...(editor.isActive('bold') && { color: 'primary' })}
        variant='outlined'
        size='small'
        sx={{ fontSize: '0.75rem', padding: '4px' }}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className='ri-bold text-textSecondary' style={{ fontSize: '1rem' }} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('underline') && { color: 'primary' })}
        variant='outlined'
        size='small'
        sx={{ fontSize: '0.75rem', padding: '4px' }}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className='ri-underline text-textSecondary' style={{ fontSize: '1rem' }} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('italic') && { color: 'primary' })}
        variant='outlined'
        size='small'
        sx={{ fontSize: '0.75rem', padding: '4px' }}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className='ri-italic text-textSecondary' style={{ fontSize: '1rem' }} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        sx={{ fontSize: '0.75rem', padding: '4px' }}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='ri-strikethrough text-textSecondary' style={{ fontSize: '1rem' }} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'left' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        sx={{ fontSize: '0.75rem', padding: '4px' }}
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className='ri-align-left text-textSecondary' style={{ fontSize: '1rem' }} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'center' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        sx={{ fontSize: '0.75rem', padding: '4px' }}
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i className='ri-align-center text-textSecondary' style={{ fontSize: '1rem' }} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'right' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        sx={{ fontSize: '0.75rem', padding: '4px' }}
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i className='ri-align-right text-textSecondary' style={{ fontSize: '1rem' }} />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        sx={{ fontSize: '0.75rem', padding: '4px' }}
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i className='ri-align-justify text-textSecondary' style={{ fontSize: '1rem' }} />
      </CustomIconButton>
      <CustomIconButton onClick={handleOpenImageDialog} size='small' variant='outlined' className='ml-auto'>
        <i className='ri-image-add-line text-textSecondary' />
      </CustomIconButton>
    </div>
  )
}

const QuizQuestions: React.FC = () => {
  // Variáveis das questões
  const {
    quizQuestions,
    addQuizQuestion,
    updateQuizQuestion,
    setQuizQuestions,
    quizType,
    showOptionImage,
    setShowOptionImage,
    optionImages,
    setOptionImage,
    imageFile
  } = useSociologicalData()

  const [expanded, setExpanded] = useState<number | false>(0)
  const [newAnswer, setNewAnswer] = useState<string>('')

  // Variáveis do áudio
  const { audioFile, setAudioFile } = useSociologicalData()
  const [showUrlInput, setShowUrlInput] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(new Audio())

  // Variáveis das questões sociológicas
  const [selectedSociologicals, setSelectedSociologicals] = useState<(SociologicalDataType | null)[]>([null, null])
  const [weights, setWeights] = useState<number[]>([1, 1])

  // Variáveis das questões de múltipla escolha
  const [newOptions, setNewOptions] = useState<QuizQuestionOption[]>([
    { title: '', isChecked: false },
    { title: '', isChecked: false }
  ]) // Start with two options

  // Variáveis da visualização das imagens das options
  const [openImageDialog, setOpenImageDialog] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleOpenImageDialog = (imageUrl: string) => {
    setSelectedImage(imageUrl)
    setOpenImageDialog(true)
  }

  const handleCloseImageDialog = () => {
    setOpenImageDialog(false)
    setSelectedImage(null)
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
  }, [isPlaying])

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

    const fileBlobData = await urlToBlob(url) // Converte a URL em Blob

    setAudioFile({
      audioFile: null,
      audioUrl: url,
      blobData: fileBlobData // Armazena o Blob no estado
    })

    if (audioRef.current) {
      audioRef.current.src = url
      audioRef.current.load()
      setIsPlaying(false) // Reiniciar o estado de reprodução
    }
  }

  const handlePlayPause = () => {
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

  // TipTap editor for question creation
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Digite a pergunta...'
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Underline
    ],
    content: '',
    immediatelyRender: true,
    shouldRerenderOnTransaction: false
  })

  const optionEditor1 = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Digite a opção...'
      }),
      TextAlign.configure({
        types: ['paragraph']
      }),
      Underline
    ],
    content: '',
    immediatelyRender: true,
    shouldRerenderOnTransaction: false
  })

  const optionEditor2 = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Digite a opção...'
      }),
      TextAlign.configure({
        types: ['paragraph']
      }),
      Underline
    ],
    content: '',
    immediatelyRender: true,
    shouldRerenderOnTransaction: false
  })

  const optionEditor3 = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Digite a opção...'
      }),
      TextAlign.configure({
        types: ['paragraph']
      }),
      Underline
    ],
    content: '',
    immediatelyRender: true,
    shouldRerenderOnTransaction: false
  })

  const optionEditor4 = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Digite a opção...'
      }),
      TextAlign.configure({
        types: ['paragraph']
      }),
      Underline
    ],
    content: '',
    immediatelyRender: true,
    shouldRerenderOnTransaction: false
  })

  const optionEditor5 = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Digite a opção...'
      }),
      TextAlign.configure({
        types: ['paragraph']
      }),
      Underline
    ],
    content: '',
    immediatelyRender: true,
    shouldRerenderOnTransaction: false
  })

  const optionEditor6 = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Digite a opção...'
      }),
      TextAlign.configure({
        types: ['paragraph']
      }),
      Underline
    ],
    content: '',
    immediatelyRender: true,
    shouldRerenderOnTransaction: false
  })

  // Array para armazenar as instâncias dos editores
  const optionEditors = [optionEditor1, optionEditor2, optionEditor3, optionEditor4, optionEditor5, optionEditor6]

  const handleChange = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, questionIndex: number, optionIndex: number) => {
    const updatedQuestion = quizQuestions[questionIndex]

    if (updatedQuestion) {
      const updatedOptions = updatedQuestion.options?.map((option, oIndex) => ({
        ...option,
        isChecked: oIndex === optionIndex ? e.target.checked : false
      }))

      const updatedQuizQuestion = { ...updatedQuestion, options: updatedOptions }

      updateQuizQuestion(updatedQuizQuestion.id, updatedQuizQuestion)
    }
  }

  const handleAddOption = () => {
    if (newOptions.length < 6) {
      setNewOptions([...newOptions, { title: '', isChecked: false }])
      setSelectedSociologicals([...selectedSociologicals, null])
      setWeights([...weights, 1])
    }
  }

  const handleRemoveOption = (index: number) => {
    if (newOptions.length > 2) {
      const updatedOptions = [...newOptions]

      updatedOptions.splice(index, 1)
      setNewOptions(updatedOptions)

      const updatedSociologicals = [...selectedSociologicals]

      updatedSociologicals.splice(index, 1)
      setSelectedSociologicals(updatedSociologicals)

      const updatedWeights = [...weights]

      updatedWeights.splice(index, 1)
      setWeights(updatedWeights)

      setShowOptionImage(`$option-${index}`, true)
    }
  }

  const handleRemoveQuestion = (questionId: number) => {
    const updatedQuestions = quizQuestions.filter(question => question.id !== questionId)

    setQuizQuestions(updatedQuestions)
  }

  const handleSociologicalSelect = (data: SociologicalDataType, index: number) => {
    const updatedSociologicals = [...selectedSociologicals]

    updatedSociologicals[index] = data
    setSelectedSociologicals(updatedSociologicals)
  }

  const handleWeightChange = (weight: number, index: number) => {
    const updatedWeights = [...weights]

    updatedWeights[index] = weight
    setWeights(updatedWeights)
  }

  // Função para verificar se todas as opções estão preenchidas corretamente
  const isSaveDisabled = () => {
    return newOptions.some((option, index) => !selectedSociologicals[index] || weights[index] === null)
  }

  const handleSaveQuestion = () => {
    const selectedOption = newOptions.find(option => option.isChecked)

    if (!selectedOption) {
      // Caso nenhuma opção esteja marcada, você pode exibir uma mensagem de erro ou retornar sem salvar
      console.error('Pelo menos uma opção deve ser marcada como resposta correta.')

      return
    }

    // Captura o conteúdo de cada editor de opção
    const updatedOptions = newOptions.map((option: QuizQuestionOption, index) => {
      return {
        ...option,
        title: optionEditors[index]?.getHTML() || '', // Pegue o conteúdo do editor de opção correspondente
        weight: weights[index],
        sociological: {
          id: selectedSociologicals[index]?.id || null,
          name: selectedSociologicals[index]?.name || null
        } as QuizSociologicalOptionData,
        image: optionImages[`option-${index}`]
      } as QuizQuestionOption
    })

    const newQuizQuestion: QuizQuestion = {
      id: quizQuestions.length + 1,
      type: quizType,
      question: editor?.getHTML() || '', // Save the formatted question from TipTap editor
      options: updatedOptions,
      answer: newAnswer,
      image: imageFile,
      audio: audioFile
    }

    console.log('New Quiz Question:', newQuizQuestion)

    addQuizQuestion(newQuizQuestion)
    editor?.commands.clearContent() // Clear the editor after saving the question
    setNewAnswer('')
    optionEditors.forEach(editorInstance => editorInstance?.commands.clearContent()) // Limpa todos os editores de opções
    setNewOptions([
      { title: '', isChecked: false },
      { title: '', isChecked: false }
    ]) // Reset to two options
    setSelectedSociologicals([null, null])
    setWeights([1, 1])

    // Limpa os dados das imagens das opções
    Object.keys(optionImages).forEach(key => {
      setShowOptionImage(key, false)
      setOptionImage(key, { imageUrl: null, imageFile: null })
    })
  }

  return (
    <div>
      <Card className='mb-6'>
        <CardContent>
          {quizType === 'Pergunta e Resposta Dissertativa' && (
            <>
              <CardHeader title='Sessão de questões' />
              <CardContent>
                <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
                  <FormControl fullWidth>
                    <div className='flex flex-col gap-4 mb-5'>
                      <Typography>Escreva no campo abaixo a pergunta que deseja adicionar.</Typography>
                      <Card className='p-0 border shadow-none'>
                        <CardContent className='p-0'>
                          <EditorToolbar editor={editor} />
                          <Divider className='mli-5' />
                          <EditorContent editor={editor} className='bs-[135px] overflow-y-auto flex' />
                        </CardContent>
                      </Card>
                    </div>
                  </FormControl>
                </form>
              </CardContent>
            </>
          )}

          {quizType === 'Pergunta Auditiva e Resposta Dissertativa' && (
            <Dropzone>
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
                  <audio ref={audioRef} controls={false} />
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
            </Dropzone>
          )}
        </CardContent>

        <CardContent>
          <CardHeader title='Opções criadas para a questão' className='flex flex-col gap-5' />
        </CardContent>

        <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
          <FormControl fullWidth>
            <div className='flex flex-col gap-4 mb-5'>
              <CardContent>
                {newOptions.map((option, index) => (
                  <div key={index} className='flex gap-3 mb-4'>
                    <div className='flex-grow'>
                      <div className='flex items-center gap-3 mb-4'>
                        <Checkbox
                          style={{ paddingBottom: '10px' }}
                          checked={option.isChecked}
                          onChange={e => {
                            const updatedOptions = [...newOptions]

                            updatedOptions[index].isChecked = e.target.checked

                            if (e.target.checked) {
                              updatedOptions.forEach((opt, i) => {
                                if (i !== index) {
                                  opt.isChecked = false
                                }
                              })
                            }

                            setNewOptions(updatedOptions)
                          }}
                        />
                        <span>
                          {`Opção ${index + 1} ${option.isChecked === true ? ' - [Resposta mais adequada]' : ''} `}
                        </span>
                      </div>
                      <Card className='p-0 border shadow-none'>
                        <CardContent className='p-0'>
                          <OptionEditorToolbar
                            editor={optionEditors[index]}
                            selectedWeight={weights[index]}
                            setSelectedWeight={weight => handleWeightChange(weight, index)}
                            selectedSociological={selectedSociologicals[index]}
                            onSociologicalSelect={data => handleSociologicalSelect(data, index)}
                            optionKey={`option-${index}`}
                          />
                          <Divider className='mli-5' />
                          <EditorContent editor={optionEditors[index]} className='bs-[135px] overflow-y-auto flex' />
                          {showOptionImage[`option-${index}`] && <QuizOptionImage optionKey={`option-${index}`} />}
                        </CardContent>
                      </Card>
                    </div>

                    <div className='flex justify-center items-start' style={{ marginTop: '30px' }}>
                      <IconButton
                        aria-label='remover opção'
                        onClick={() => handleRemoveOption(index)}
                        disabled={newOptions.length <= 2}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </CardContent>
            </div>
          </FormControl>
        </form>

        <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
          <FormControl fullWidth>
            <div className='flex justify-between mb-5' style={{ padding: '0 20px' }}>
              <Button
                onClick={handleAddOption}
                variant='outlined'
                color='primary'
                disabled={newOptions.length >= 6}
                style={{ width: '25%', padding: '6px 20px' }}
              >
                Adicionar Nova Opção
              </Button>

              <Button
                onClick={handleSaveQuestion}
                variant='contained'
                color='primary'
                disabled={newOptions.length < 2 || !newOptions.some(option => option.isChecked) || isSaveDisabled()}
                style={{ width: '25%', padding: '6px 20px' }}
              >
                Salvar Questão
              </Button>
            </div>
          </FormControl>
        </form>
      </Card>

      <Card>
        <CardHeader title='Questões criadas para ao Quiz' />
        <CardContent>
          <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
            <FormControl fullWidth>
              <Typography className='mb-4'>
                Estas são as questões criadas para o quiz, não é possível fazer alterações nas mesmas.
              </Typography>
              <Divider />
            </FormControl>
          </form>
        </CardContent>
        <CardContent>
          <form onSubmit={e => e.preventDefault()} className='flex flex-col gap-5'>
            <FormControl fullWidth>
              {quizQuestions.map((item, index) => {
                const isAudioQuestion = item.type === 'Pergunta Auditiva e Resposta Dissertativa'

                return (
                  <div key={index} className='mb-4'>
                    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                      <AccordionSummary
                        id={`panel-header-${index}`}
                        expandIcon={<i className='ri-arrow-right-s-line text-2xl text-textSecondary' />}
                        aria-controls={`panel-content-${index}`}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          paddingRight: 2
                        }}
                        onClick={isAudioQuestion ? e => e.stopPropagation() : undefined} // Previne expansão ao clicar fora da seta para perguntas auditivas
                      >
                        <div
                          style={{ flexGrow: 1 }}
                          onClick={isAudioQuestion ? e => e.stopPropagation() : undefined} // Previne expansão ao clicar fora da seta para perguntas auditivas
                        >
                          {isAudioQuestion ? (
                            <AudioPlayer audioUrl={item.audio?.audioUrl || ''} />
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
                            <ListItem key={i} role='listitem' className='gap-0 p-0'>
                              <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '3px' }}>
                                <Typography variant='body2' sx={{ fontWeight: 'bold' }}>
                                  {i + 1}.
                                </Typography>
                              </Box>
                              <ListItemIcon>
                                <Checkbox
                                  tabIndex={-1}
                                  className='p-5'
                                  checked={option.isChecked}
                                  onChange={e => handleCheckboxChange(e, index, i)}
                                />
                              </ListItemIcon>
                              <Typography
                                className='font-medium !text-textPrimary'
                                dangerouslySetInnerHTML={{ __html: option.title }}
                              />
                              {option.image !== undefined &&
                                (option.image.imageFile !== null || option.image.imageUrl !== null) && (
                                  <IconButton
                                    aria-label='Visualizar Imagem'
                                    onClick={() => {
                                      const imageUrl = option.image?.imageFile
                                        ? URL.createObjectURL(option.image.imageFile)
                                        : option.image?.imageUrl

                                      if (imageUrl !== undefined && imageUrl !== null) handleOpenImageDialog(imageUrl)
                                    }}
                                    sx={{ marginLeft: 'auto' }}
                                  >
                                    <i className='ri-image-line' />
                                  </IconButton>
                                )}
                            </ListItem>
                          ))}
                        </List>
                        <div className='flex justify-end mt-5'>
                          <Button
                            variant='outlined'
                            color='secondary'
                            startIcon={<DeleteIcon />}
                            onClick={() => handleRemoveQuestion(item.id)}
                          >
                            Remover Pergunta
                          </Button>
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                )
              })}
            </FormControl>
          </form>
        </CardContent>
      </Card>

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

export default QuizQuestions
