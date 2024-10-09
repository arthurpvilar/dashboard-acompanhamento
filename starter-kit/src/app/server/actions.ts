/* eslint-disable import/no-unresolved */
/**
 * ! The server actions below are used to fetch the static data from the fake-db. If you're using an ORM
 * ! (Object-Relational Mapping) or a database, you can swap the code below with your own database queries.
 */

'use server'

// Data Imports
import { db as eCommerceData } from '@/fake-db/apps/ecommerce'
import { db as quizData, dbDetailed as quizDataDetailed } from '@/fake-db/apps/quiz'
import { db as academyData } from '@/fake-db/apps/academy'
import { db as vehicleData } from '@/fake-db/apps/logistics'
import { db as invoiceData } from '@/fake-db/apps/invoice'
import { db as userData } from '@/fake-db/apps/user-list'
import { db as permissionData } from '@/fake-db/apps/permissions'
import { db as profileData } from '@/fake-db/pages/user-profile'
import { db as faqData } from '@/fake-db/pages/faq'
import { db as pricingData } from '@/fake-db/pages/pricing'
import { db as statisticsData } from '@/fake-db/pages/widget-examples'

// Types to send to the server
import type { CreateQuizDto, QuizDetailsDto, SimplifiedQuizListDto, UserQuizAttemptDto } from '@/types/apps/quizTypes'
import type { BackEndUsersType } from '@/types/apps/userTypes'

// API URL
const API_URL = 'http://localhost:4000'

// Custom response type
export type RequestResponse = {
  success: boolean
  message: string
  statusCode: number
  data?: unknown
}

export const getEcommerceData = async () => {
  return eCommerceData
}

export const getUserQuizAttempts = async (accessToken: string, userId: string): Promise<UserQuizAttemptDto[]> => {
  try {
    const response = await fetch(`${API_URL}/quiz-attempts/user-attempts/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}` // Caso utilize autenticação JWT, inclua o token aqui
      },
      cache: 'no-store'
    })

    if (!response.ok) {
      const errorData = await response.json()

      console.error('Erro ao buscar tentativas de quiz:', errorData.message)

      return []
    }

    const attempts: UserQuizAttemptDto[] = await response.json()

    return attempts
  } catch (error: any) {
    console.error('Erro ao buscar tentativas de quiz:', error.message)

    return []
  }
}

// Função para salvar o quiz no servidor
export const saveQuizToServer = async (accessToken: string, quizData: CreateQuizDto): Promise<RequestResponse> => {
  try {
    const response = await fetch(`${API_URL}/quizzes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      },
      body: JSON.stringify(quizData)
    })

    const statusCode = response.status

    // Verificar se a resposta foi bem-sucedida
    if (!response.ok) {
      const errorData = await response.json()

      // Retornar a mensagem que o backend enviou
      return {
        success: false,
        message: errorData.message || 'Erro desconhecido ao publicar o quiz.',
        statusCode
      }
    }

    const data = await response.json()

    console.log('Quiz publicado com sucesso:', data)

    return {
      success: true,
      message: 'Quiz publicado com sucesso!',
      statusCode
    }
  } catch (error: any) {
    console.error('Erro ao publicar o quiz:', error.message)

    return {
      success: false,
      message: error.message || 'Erro ao publicar o quiz. Tente novamente.',
      statusCode: 500
    }
  }
}

export const getLatestQuizData = async (): Promise<QuizDetailsDto> => {
  const response = await fetch(`${API_URL}/quizzes/latest`, {
    cache: 'no-store'
  })

  return await response.json()
}

export const getUsersDataFromServer = async (): Promise<BackEndUsersType[]> => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      const errorData = await response.json()

      console.error('Erro ao buscar usuários:', errorData.message)

      return []
    }

    const users: BackEndUsersType[] = await response.json()

    return users
  } catch (error: any) {
    console.error('Erro ao buscar usuários:', error.message)

    return []
  }
}

export const getAllQuizzesSimplified = async (): Promise<SimplifiedQuizListDto[]> => {
  try {
    const response = await fetch(`${API_URL}/quizzes/details/simplified`, {
      cache: 'no-store'
    })

    const quizzes: SimplifiedQuizListDto[] = await response.json()

    return quizzes
  } catch (error: any) {
    console.error('Erro ao buscar quizzes:', error.message)

    return []
  }
}

// Função para criar um usuário no servidor
export const createUserOnServer = async (
  newUserData: BackEndUsersType & { password: string }
): Promise<RequestResponse> => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUserData)
    })

    const statusCode = response.status

    if (!response.ok) {
      const errorData = await response.json()

      console.error('Erro ao criar usuário:', errorData.message)

      return {
        success: false,
        message: errorData.message || 'Erro desconhecido ao criar o usuário.',
        statusCode
      }
    }

    const data = await response.json()

    console.log('Usuário criado com sucesso:', data)

    return {
      success: true,
      message: 'Usuário criado com sucesso!',
      statusCode,
      data
    }
  } catch (error: any) {
    console.error('Erro ao criar usuário:', error.message)

    return {
      success: false,
      message: error.message || 'Erro ao criar o usuário. Tente novamente.',
      statusCode: 500
    }
  }
}

export const getUserStatistics = async (): Promise<RequestResponse> => {
  try {
    const response = await fetch(`${API_URL}/users/statistics`, {
      cache: 'no-store',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const statusCode = response.status

    if (!response.ok) {
      const errorData = await response.json()

      console.error('Erro ao buscar estatísticas dos usuários x01:', errorData.message)

      return {
        success: false,
        message: errorData.message || 'Erro desconhecido ao buscar as estatísticas.',
        statusCode
      }
    }

    const statistics = await response.json()

    return {
      success: true,
      message: 'Estatísticas carregadas com sucesso!',
      statusCode,
      data: statistics
    }
  } catch (error: any) {
    console.error('Erro ao buscar estatísticas dos usuários x02:', error.message)

    return {
      success: false,
      message: error.message || 'Erro ao buscar as estatísticas. Tente novamente.',
      statusCode: 500
    }
  }
}

// Função para excluir o usuário no servidor
export const deleteUserOnServer = async (token: string, userId: string): Promise<RequestResponse> => {
  try {
    const response = await fetch(`${API_URL}/users/${userId}`, {
      cache: 'no-store',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const statusCode = response.status

    if (!response.ok) {
      const errorData = await response.json()

      console.error('Erro ao excluir usuário:', errorData.message)

      return {
        success: false,
        message: errorData.message || 'Erro desconhecido ao excluir o usuário.',
        statusCode
      }
    }

    return {
      success: true,
      message: 'Usuário excluído com sucesso!',
      statusCode
    }
  } catch (error: any) {
    console.error('Erro ao excluir usuário:', error.message)

    return {
      success: false,
      message: error.message || 'Erro ao excluir o usuário. Tente novamente.',
      statusCode: 500
    }
  }
}

export const getQuizDetailedData = async (index: number) => {
  return quizDataDetailed.find(quiz => quiz.id === index)
}

export const getQuizData = async () => {
  return quizData
}

export const getAcademyData = async () => {
  return academyData
}

export const getLogisticsData = async () => {
  return vehicleData
}

export const getInvoiceData = async () => {
  return invoiceData
}

export const getUserData = async () => {
  return userData
}

export const getPermissionsData = async () => {
  return permissionData
}

export const getProfileData = async () => {
  return profileData
}

export const getFaqData = async () => {
  return faqData
}

export const getPricingData = async () => {
  return pricingData
}

export const getStatisticsData = async () => {
  return statisticsData
}
