'use client'

// API URL
const API_URL = 'http://31.220.22.205:4000'

// Custom response type
export type RequestResponse = {
  success: boolean
  message: string
  statusCode: number
  data?: unknown
}

export const loginUser = async (email: string, password: string): Promise<any> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }) // Dados de login
    })

    if (!response.ok) {
      const errorData = await response.json()

      console.error('Erro ao fazer login:', errorData.message)

      return null
    }

    const loginData = await response.json()

    return loginData
  } catch (error: any) {
    console.error('Erro ao fazer login:', error.message)

    return null
  }
}

// Função para buscar uma tentativa de quiz existente
export const findQuizAttempt = async (quizId: number, userId?: string, email?: string) => {
  try {
    // Construindo a URL com os parâmetros adequados para a requisição
    const params = new URLSearchParams()

    params.append('quizId', quizId.toString())

    if (userId) {
      params.append('userId', userId)
    } else if (email) {
      params.append('email', email)
    }

    const response = await fetch(`${API_URL}/quiz-attempts/recover?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`
      }
    })

    if (!response.ok) {
      const errorData = await response.json()

      console.error('Erro ao buscar a tentativa de quiz:', errorData.message)
      throw new Error(errorData.message || 'Erro desconhecido ao buscar a tentativa de quiz.')
    }

    const attemptData = await response.json()

    return attemptData
  } catch (error: any) {
    console.error('Erro ao buscar a tentativa de quiz:', error.message)
    throw new Error(error.message || 'Erro ao buscar a tentativa de quiz.')
  }
}
