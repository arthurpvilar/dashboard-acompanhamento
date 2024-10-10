'use client'

import { useState, useEffect } from 'react'

import { Typography, Box, Alert, Card, CardContent, Grid, Divider } from '@mui/material'
import DOMPurify from 'dompurify'

import type { BackendAnswerDto, BackendQuiz, QuizAttempt } from '@/types/apps/quizTypes'
import { recordQuizAttempt } from '@/app/server/actions'
import { findQuizAttempt } from '@/app/server/actionsClient'

interface QuizDetailsQuestionDisplayProps {
  quiz: BackendQuiz
  userId?: string
  email?: string
}

const QuizDetailsQuestionDisplay: React.FC<QuizDetailsQuestionDisplayProps> = ({ quiz, userId, email }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isQuizComplete, setIsQuizComplete] = useState(false)
  const [showResultToStudent, setShowResultToStudent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)

  const questions = quiz?.questions || []

  // Função para inicializar ou continuar uma tentativa existente
  const initializeAttempt = async () => {
    try {
      // Tenta recuperar a tentativa existente ou começa uma nova tentativa
      const result = await findQuizAttempt(quiz.index, userId as string, email as string)

      if (result) {
        // Se encontrar uma tentativa, ajusta o estado para refletir o progresso atual
        setAttempt(result)

        const answeredQuestionsCount = result.answers.length

        setCurrentQuestionIndex(answeredQuestionsCount)

        // Verifica se todas as perguntas foram respondidas e marca o quiz como completo, se for o caso
        if (answeredQuestionsCount >= questions.length) {
          setIsQuizComplete(true)
        }
      } else {
        // Se não encontrar uma tentativa, o fluxo continuará normalmente
        // console.log('Nenhuma tentativa existente foi encontrada, criando uma nova tentativa ao enviar a resposta.')
        setAttempt(null)
      }
    } catch (error) {
      console.error('Erro ao inicializar a tentativa:', error)
      setAttempt(null)
      setError('Ocorreu um erro ao tentar recuperar o progresso do quiz.')
    }
  }

  useEffect(() => {
    //console.log('Quiz ID:', quiz.index)
    //console.log('Usuário ID:', userId)
    initializeAttempt()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quiz, userId, email])

  const handleNextQuestion = async (selectedOptionId: number) => {
    setLoading(true)
    setError(null)

    try {
      const answerData = {
        questionId: questions[currentQuestionIndex]?.index,
        optionId: selectedOptionId,
        startedAt: new Date(),
        completedAt: new Date()
      } as BackendAnswerDto

      const result = await recordQuizAttempt(userId || null, email || null, quiz.index, [answerData])

      if (result.success) {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
          setIsQuizComplete(true)
          setShowResultToStudent(true)
        }
      } else {
        console.error('Erro ao registrar a tentativa:', result.message)
        setError('Ocorreu um erro ao registrar sua resposta. Tentando novamente em 5 segundos...')
        setTimeout(() => {
          handleNextQuestion(selectedOptionId)
        }, 5000)
      }
    } catch (error) {
      console.error('Erro ao registrar a tentativa:', error)
      setError('Ocorreu um erro ao registrar sua resposta. Tentando novamente em 5 segundos...')
      setTimeout(() => {
        handleNextQuestion(selectedOptionId)
      }, 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4' gutterBottom>
          Responda a pergunta abaixo
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          Leve o tempo que precisar, o fator tempo não é determinante para o resultado
        </Typography>
      </Grid>

      <Grid item xs={12} md={8}>
        <Card>
          <CardContent>
            {!isQuizComplete ? (
              <>
                <Box mb={8}>
                  <Typography
                    variant='h5'
                    style={{ minHeight: '85px' }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize((questions[currentQuestionIndex]?.question as string) || '')
                    }}
                  />
                </Box>

                <Divider />

                <Box mt={4}>
                  <Grid container spacing={6}>
                    {questions[currentQuestionIndex]?.options?.map((option, index) => (
                      <Grid item xs={12} key={index}>
                        <Box
                          onClick={() => handleNextQuestion(option.index)}
                          sx={{
                            cursor: 'pointer',
                            backgroundColor: '#1976d2',
                            color: '#fff',
                            padding: '10px',
                            borderRadius: '5px',
                            '&:hover': { backgroundColor: '#115293' }
                          }}
                          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(option.title) }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </>
            ) : (
              <Typography variant='h6' color='success'>
                Questionário completo!{' '}
                {showResultToStudent
                  ? 'Os resultados serão mostrados ao aluno.'
                  : 'Os resultados não serão mostrados ao aluno.'}
              </Typography>
            )}
          </CardContent>

          {error && (
            <CardContent>
              <Alert severity='error'>{error}</Alert>
            </CardContent>
          )}

          {/* Progresso do quiz no canto inferior direito fora do CardContent */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: 2 }}>
            <Typography variant='body2' color='textSecondary'>
              [{currentQuestionIndex + 1} / {questions.length}]
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default QuizDetailsQuestionDisplay
