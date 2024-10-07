'use client'

import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  List,
  ListItem
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import type { QuizQuestionDto } from '@/types/apps/quizTypes'

interface QuizQuestionPageProps {
  questions: QuizQuestionDto[]
  userId: string | null
  email: string | null
  quizId: number
  quizTitle: string // Ajustei a propriedade para exibir o título do quiz corretamente
}

const QuizQuestionPage: React.FC<QuizQuestionPageProps> = ({ questions, userId, email, quizId, quizTitle }) => {
  const theme = useTheme()
  const [expanded, setExpanded] = useState<number | false>(0)
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: number | null }>({})
  const [textAnswers, setTextAnswers] = useState<{ [key: number]: string }>({})
  const [savedAttempts, setSavedAttempts] = useState<any[][]>([]) // Armazena múltiplas tentativas de respostas
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false)

  const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  const handleOptionSelect = (questionId: number, optionIndex: number) => {
    setSelectedOptions({
      ...selectedOptions,
      [questionId]: optionIndex
    })
  }

  const handleTextAnswerChange = (questionId: number, answer: string) => {
    setTextAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleSaveAttempt = () => {
    const currentAttempt = questions.map((question) => {
      const answerText = question.options
        ? question.options[selectedOptions[question.id] ?? -1]?.title || 'Sem resposta selecionada'
        : textAnswers[question.id] || 'Sem resposta fornecida'

      return {
        question: removeHtmlTags(question.question || ''),
        answer: removeHtmlTags(answerText)
      }
    })

    setSavedAttempts([...savedAttempts, currentAttempt])
    alert(`Tentativa ${savedAttempts.length + 1} salva com sucesso!`)
  }

  const handleSubmit = async () => {
    if (isQuizSubmitted) {
      alert('Este quiz já foi finalizado. Você não pode responder novamente.')
      return
    }

    try {
      setIsQuizSubmitted(true)
      alert('Respostas enviadas com sucesso! O quiz foi finalizado.')
    } catch (error) {
      console.error('Erro ao enviar as respostas:', error)
      alert(`Erro ao enviar as respostas. Detalhes: ${error}`)
    }
  }

  const removeHtmlTags = (htmlString: string) => {
    return htmlString.replace(/<\/?[^>]+(>|$)/g, "")
  }

  return (
    <div style={{ padding: theme.spacing(4) }}>
      {/* Exibindo o nome do quiz no topo */}
      <Typography variant='h3' gutterBottom style={{ textAlign: 'center', marginBottom: theme.spacing(4) }}>
        {quizTitle}
      </Typography>

      {/* Instrução para salvar respostas */}
      <Typography variant='h5' gutterBottom>
        Salve suas respostas como uma tentativa para continuar o quiz depois.
      </Typography>
      <Typography className='mb-4'>
        Você pode salvar suas respostas como uma tentativa parcial e voltar para completá-las depois. Quando você
        tiver certeza de todas as suas respostas, clique em "Enviar Respostas" para finalizar o quiz.
      </Typography>

      {questions.map((item, index) => (
        <Box key={index} mb={4}>
          <Accordion expanded={expanded === index} onChange={handleChange(index)}>
            <AccordionSummary expandIcon={<i className='ri-arrow-right-s-line text-2xl text-textSecondary' />}>
              <div style={{ flexGrow: 1 }}>
                <Typography variant='h6' dangerouslySetInnerHTML={{ __html: item.question || '' }} />
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {item.options && item.options.length > 0 ? (
                <FormControl component='fieldset'>
                  <RadioGroup
                    aria-label={`question-${item.id}`}
                    value={selectedOptions[item.id] ?? ''}
                    onChange={(_, value) => handleOptionSelect(item.id, parseInt(value))}
                  >
                    {item.options.map((option, i) => (
                      <FormControlLabel
                        key={i}
                        value={i}
                        control={<Radio />}
                        label={<Typography className='font-medium !text-textPrimary' dangerouslySetInnerHTML={{ __html: option.title }} />}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              ) : (
                <TextField
                  placeholder='Digite sua resposta aqui...'
                  fullWidth
                  multiline
                  value={textAnswers[item.id] || ''}
                  onChange={(e) => handleTextAnswerChange(item.id, e.target.value)}
                  sx={{ marginTop: '16px' }}
                />
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}

      <Button variant='outlined' color='primary' onClick={handleSaveAttempt} sx={{ marginTop: '20px', width: '100%' }}>
        Salvar Tentativa
      </Button>

      <Button variant='contained' color='primary' onClick={handleSubmit} sx={{ marginTop: '20px', width: '100%' }}>
        Enviar Respostas
      </Button>

      {savedAttempts.length > 0 && (
        <Box mt={5}>
          {savedAttempts.map((attempt, index) => (
            <Box key={index} mb={4}>
              <Typography variant='h5'>Tentativa {index + 1}:</Typography>
              <List>
                {attempt.map((item, i) => (
                  <ListItem key={i}>
                    <Typography variant='body1'>
                      <strong>Pergunta:</strong> {item.question}
                    </Typography>
                    <Typography variant='body2' style={{ marginLeft: '20px' }}>
                      <strong>Resposta:</strong> {item.answer}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      )}
    </div>
  )
}

export default QuizQuestionPage
