'use client'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Importar o contexto
import { useSociologicalData } from './QuizContext'
import type { CreateQuizDto } from '@/types/apps/quizTypes'
import type { BackEndUsersType } from '@/types/apps/userTypes'
import type { RequestResponse } from '@/app/server/actions'
import { saveQuizToServer } from '@/app/server/actions'

const QuizHeader = () => {
  const {
    quizName,
    setQuizName,
    quizIdentifier,
    setQuizIdentifier,
    quizDescription,
    setQuizDescription,
    sociologicalData,
    imageFile,
    setImageFile,
    quizType,
    quizQuestions,
    setQuizQuestions,
    optionImages,
    setOptionImage,
    audioFile,
    setAudioFile
  } = useSociologicalData() // Acessar o contexto

  // Definir uma categoria padrão
  const defaultCategory = 'Geral'

  // Função para obter o usuário autenticado do localStorage
  const getLoggedUser = (): BackEndUsersType | null => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')

      return user ? JSON.parse(user) : null
    }

    return null
  }

  // Função para validar os dados e publicar o quiz
  const handlePublish = async () => {
    // Obter o usuário logado
    const loggedUser = getLoggedUser()

    if (!loggedUser) {
      alert('Usuário não autenticado. Por favor, faça login novamente.')

      return
    }

    // Validar os campos obrigatórios
    if (!quizName || !quizIdentifier || quizQuestions.length === 0) {
      alert('Por favor, preencha todos os campos obrigatórios antes de publicar.')

      return
    }

    // Verificar e corrigir os dados sociológicos antes de enviar
    const validSociologicalData = sociologicalData
      .filter(data => data.name && data.value !== null && !isNaN(data.value) && data.color) // Filtrar apenas os dados válidos
      .map(data => ({
        id: data.id,
        name: data.name.trim(), // Remover espaços em branco extras no nome
        value: data.value,
        color: data.color
      }))

    console.log('Dados sociológicos validados:', validSociologicalData)

    // Verificar se algum dado sociológico está incompleto
    if (validSociologicalData.length !== sociologicalData.length) {
      alert('Por favor, preencha todos os campos dos dados sociológicos corretamente.')

      return
    }

    const quizData = {
      title: quizName,
      identifier: quizIdentifier,
      type: quizType,
      description: quizDescription,
      category: defaultCategory,
      image: imageFile,
      audio: audioFile,
      sociologicalData: validSociologicalData,
      questions: quizQuestions,
      status: 'published',
      userId: loggedUser.index
    } as CreateQuizDto

    console.log('Publicando quiz com os seguintes dados:')
    console.log(quizData)

    // Pegar access token do localStorage
    const accessToken = localStorage.getItem('accessToken') as string

    // Mandar salvar no servidor
    const requestResponse = (await saveQuizToServer(accessToken, quizData)) as RequestResponse

    // Alerta de estado da requisição
    alert(requestResponse.message)

    // Limpar os dados após a publicação
    if (requestResponse.success) {
      clearAllData()
    }
  }

  // Função para limpar todos os dados
  const clearAllData = () => {
    setQuizName('')
    setQuizIdentifier('')
    setQuizDescription('')
    setImageFile(null)
    setQuizQuestions([])
    setAudioFile(null)
    Object.keys(optionImages).forEach(key => {
      setOptionImage(key, { imageUrl: '', imageFile: null })
    })
  }

  // Função para salvar o rascunho no localStorage
  /*
  const handleSaveDraft = () => {
    const quizDraft = {
      title: quizName,
      identifier: quizIdentifier,
      description: quizDescription,
      sociologicalData,
      imageFile,
      quizType,
      questions: quizQuestions,
      audioFile,
      status: 'draft'
    }

    localStorage.setItem('quizDraft', JSON.stringify(quizDraft))
    alert('Rascunho salvo!')
  }
  */

  return (
    <div className='flex flex-wrap items-center justify-between gap-6'>
      <div>
        <Typography variant='h4' className='mbe-1'>
          Adicionar novo Quiz
        </Typography>
        <Typography>Esse quiz será liberado para toda a plataforma, para ser acessado com um identificador</Typography>
      </div>
      <div className='flex flex-wrap gap-4'>
        <Button variant='outlined' color='secondary' onClick={clearAllData}>
          Descartar
        </Button>
        <Button variant='contained' onClick={handlePublish}>
          Publicar Quiz
        </Button>
      </div>
    </div>
  )
}

export default QuizHeader
