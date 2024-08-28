'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent, SyntheticEvent } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

// Tiptap Imports
import type { Editor } from '@tiptap/react'
import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { TextAlign } from '@tiptap/extension-text-align'
import { Placeholder } from '@tiptap/extension-placeholder'

// Context Imports
import Divider from '@mui/material/Divider'

// Components Imports
// eslint-disable-next-line import/no-unresolved
import CustomIconButton from '@core/components/mui/IconButton'

import { Box, InputLabel, Menu, MenuItem, Select } from '@mui/material'

import type { SociologicalDataType } from './AddQuizContext';
import { useSociologicalData } from './AddQuizContext'

// Type Imports
import type { QuizQuestionOption } from '@/types/apps/quizTypes'

// Custom Styled Components
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

// Custom Toolbar for the Editor
const EditorToolbar = ({ editor, selectedSociological, onSociologicalSelect, selectedWeight, setSelectedWeight }: { editor: Editor | null, selectedSociological: any, onSociologicalSelect: (id: number) => void, selectedWeight: number, setSelectedWeight: (weight: number) => void }) => {
  const { sociologicalData } = useSociologicalData()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  if (!editor) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 pbs-5 pbe-4 pli-5">
      {/* Dropdown CustomIconButton */}
      <CustomIconButton onClick={handleClick} size="small" variant="outlined">
        {selectedSociological ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 20,
                height: 20,
                backgroundColor: selectedSociological.color,
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--border-radius)',
              }}
            />
            <span style={{ fontSize: '0.875rem' }}>{selectedSociological.name}</span>
          </Box>
        ) : (
          <span style={{ fontSize: '0.875rem' }}>Selecionar Propriedade Sociológica</span>
        )}
      </CustomIconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {sociologicalData.map((data, index) => (
          <MenuItem key={index} onClick={() => {
            onSociologicalSelect(index)
            handleClose()
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  width: 25,
                  height: 25,
                  backgroundColor: data.color,
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                }}
              />
              <span style={{ fontSize: '0.875rem' }}>{data.name}</span>
            </Box>
          </MenuItem>
        ))}
      </Menu>
      {/* Right section - Weight selection */}
      <div>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 100 }}>
          <InputLabel style={{ fontSize: '0.875rem' }}>Peso</InputLabel>
          <Select
            label='Peso'
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(Number(e.target.value))}
            displayEmpty
            inputProps={{ 'aria-label': 'Selecione o peso' }}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Divider orientation={'vertical'} flexItem />
      {/* Restante dos botões do Editor */}
      <CustomIconButton
        {...(editor.isActive('bold') && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className="ri-bold text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('underline') && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className="ri-underline text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('italic') && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className="ri-italic text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className="ri-strikethrough text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'left' }) && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className="ri-align-left text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'center' }) && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i className="ri-align-center text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'right' }) && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i className="ri-align-right text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i className="ri-align-justify text-textSecondary" />
      </CustomIconButton>

    </div>
  )
}

const AddQuizQuestions = () => {
  const { quizQuestions, addQuizQuestion, updateQuizQuestion, setQuizQuestions, sociologicalData  } = useSociologicalData()
  const [expanded, setExpanded] = useState<number | false>(0)
  const [newAnswer, setNewAnswer] = useState<string>('')
  const [newWeight, setNewWeight] = useState<number | null>(null) // Initially null to ensure validation
  const [selectedSociological, setSelectedSociological] = useState<SociologicalDataType | null>(null) // Ensure this is null by default

  const [newOptions, setNewOptions] = useState<QuizQuestionOption[]>([
    { title: '', isChecked: false },
    { title: '', isChecked: false }
  ]) // Start with two options

  // TipTap editor for question creation
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Digite a pergunta...',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ],
    content: '',
  })

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
    }
  }

  const handleRemoveOption = (index: number) => {
    if (newOptions.length > 2) {
      const updatedOptions = [...newOptions]

      updatedOptions.splice(index, 1)
      setNewOptions(updatedOptions)
    }
  }

  const handleRemoveQuestion = (questionId: number) => {
    const updatedQuestions = quizQuestions.filter(question => question.id !== questionId)

    setQuizQuestions(updatedQuestions)
  }

  const handleSaveQuestion = () => {
    const newQuizQuestion = {
      id: quizQuestions.length + 1,
      sociologicalId: selectedSociological?.id,
      question: editor?.getHTML() || '', // Save the formatted question from TipTap editor
      options: newOptions,
      answer: newAnswer,
      weight: newWeight
    }

    addQuizQuestion(newQuizQuestion)
    editor?.commands.clearContent() // Clear the editor after saving the question
    setNewAnswer('')
    setNewWeight(null)
    setNewOptions([{ title: '', isChecked: false }, { title: '', isChecked: false }]) // Reset to two options
    setSelectedSociological(null)
  }

  return (
    <Card>
      <CardHeader title="Sessão de questões" />
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
          <FormControl fullWidth>
            {/* Input para criar nova questão */}
            <div className="flex flex-col gap-4 mb-5">
              <Typography>
                Escreva no campo abaixo a pergunta que deseja adicionar, seguido das opções de resposta.
              </Typography>
              <Card className="p-0 border shadow-none">
                <CardContent className="p-0">
                <EditorToolbar
                  editor={editor}
                  selectedWeight={newWeight}
                  setSelectedWeight={setNewWeight}
                  selectedSociological={selectedSociological}
                  onSociologicalSelect={(index) => setSelectedSociological(sociologicalData[index])}
                />
                  <Divider className="mli-5" />
                  <EditorContent editor={editor} className="bs-[135px] overflow-y-auto flex" />
                </CardContent>
              </Card>

              {newOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-3">
                  <TextField
                    fullWidth
                    label={`Opção ${index + 1}`}
                    value={option.title}
                    onChange={(e) => {
                      const updatedOptions = [...newOptions]

                      updatedOptions[index].title = e.target.value
                      setNewOptions(updatedOptions)
                    }}
                    placeholder={`Digite a opção ${index + 1}`}
                  />
                  <IconButton
                    aria-label="remover opção"
                    onClick={() => handleRemoveOption(index)}
                    disabled={newOptions.length <= 2}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              ))}

              <Button
                onClick={handleAddOption}
                variant="outlined"
                color="primary"
                disabled={newOptions.length >= 6} // Disable if already 6 options
              >
                Adicionar Nova Opção
              </Button>

              <Button
                onClick={handleSaveQuestion}
                variant="contained"
                color="primary"
                disabled={!selectedSociological || newWeight === null || newOptions.length < 2} // Disable if SociologicalDataType or Weight isn't selected
              >
                Salvar Questão
              </Button>
            </div>
          </FormControl>
        </form>
      </CardContent>
      <CardHeader title="Questões criadas para ao Quiz" />
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
          <FormControl fullWidth>
            <Typography className="mb-4">
              Estas são as questões criadas para o quiz, não é possível fazer alterações nas mesmas.
            </Typography>
            <Divider />
          </FormControl>
        </form>
      </CardContent>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
          <FormControl fullWidth>
            {quizQuestions.map((item, index) => {
              return (
                <div key={index} className="mb-4">
                  <Accordion expanded={expanded === index} onChange={handleChange(index)}>
                    <AccordionSummary
                      id={`panel-header-${index}`}
                      expandIcon={<i className='ri-arrow-right-s-line text-2xl text-textSecondary' />}
                      aria-controls={`panel-content-${index}`}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingRight: 2,
                      }}
                    >
                      <div style={{ flexGrow: 1 }}>
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
                            marginRight: '16px',
                          }}
                          dangerouslySetInnerHTML={{ __html: item.question || '' }}
                        />
                        <Typography
                          variant='body2'
                          sx={{
                            color: 'textSecondary',
                            marginTop: '4px',
                          }}
                        >
                          {`Peso: ${item.weight}`}
                        </Typography>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <List role='list' component='div' className='flex flex-col gap-4 plb-0'>
                        {item.options?.map((option, i) => (
                          <ListItem key={i} role='listitem' className='gap-3 p-0'>
                            <ListItemIcon>
                              <Checkbox
                                tabIndex={-1}
                                checked={option.isChecked}
                                onChange={e => handleCheckboxChange(e, index, i)}
                              />
                            </ListItemIcon>
                            <Typography className='font-medium !text-textPrimary'>
                              {`${i + 1}. ${option.title}`}
                            </Typography>
                          </ListItem>
                        ))}
                      </List>
                      {/* Botão para remover pergunta */}
                      <div className="flex justify-end mt-5">
                        <Button
                          variant="outlined"
                          color="secondary"
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
  )
}

export default AddQuizQuestions
