// Arquivo: src/components/QuizHeader.tsx

'use client'

// MUI Imports
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

// Importar o contexto
import { useSociologicalData } from './QuizContext'
import type { Quiz } from '@/types/apps/quizTypes'
import type { BackEndUsersType } from '@/types/apps/userTypes'

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

  // Função para publicar o quiz com o usuário autenticado
  const handlePublish = () => {
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
      .filter((data) => data.name && data.value !== null && data.value !== undefined && !isNaN(data.value) && data.color) // Filtrar apenas os dados válidos
      .map((data) => ({
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

    // Construir o objeto do quiz com o owner e os dados sociológicos validados
    const quizData: Quiz = {
      id: Date.now(), // ID temporário até ser gerado pelo backend
      title: quizName,
      identifier: quizIdentifier,
      type: quizType,
      description: quizDescription,
      category: defaultCategory, // Categoria padrão para o quiz
      image: imageFile ? { imageFile: imageFile.imageFile, imageUrl: imageFile.imageUrl } : null,
      audio: audioFile
        ? {
            audioFile: audioFile.audioFile,
            audioUrl: audioFile.audioUrl,
            blobData: audioFile.blobData
          }
        : null,
      sociologicalData: validSociologicalData, // Usar apenas dados válidos
      questions: quizQuestions,
      status: 'published',
      owner: {
        id: loggedUser.id,
        username: loggedUser.username,
        fullName: loggedUser.fullName,
        email: loggedUser.email
      }
    }

    console.log('Publicando quiz com os seguintes dados:', quizData)

    // Enviar os dados para a API de quizzes
    fetch('http://localhost:4000/quizzes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(quizData)
    })
      .then(response => {
        console.log('Resposta do servidor:', response)
        if (!response.ok) {
          throw new Error(`Erro ao publicar: ${response.statusText}`)
        }
        return response.json()
      })
      .then(data => {
        console.log('Quiz publicado com sucesso:', data)
        alert('Quiz publicado com sucesso!')
        clearAllData()
      })
      .catch(error => {
        console.error('Erro ao publicar o quiz:', error)
        alert('Erro ao publicar o quiz. Tente novamente.')
      })
  }

  // Função para limpar todos os dados após a publicação
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
        <Button variant='outlined' onClick={handleSaveDraft}>
          Salvar Rascunho
        </Button>
        <Button variant='contained' onClick={handlePublish}>
          Publicar Quiz
        </Button>
      </div>
    </div>
  )
}

export default QuizHeader
