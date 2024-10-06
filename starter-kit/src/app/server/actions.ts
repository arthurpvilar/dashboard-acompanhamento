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
import type { CreateQuizDto } from '@/types/apps/quizTypes'

// Custom response type
export type RequestResponse = {
  success: boolean
  message: string
  statusCode: number
}

export const getEcommerceData = async () => {
  return eCommerceData
}

// Função para salvar o quiz no servidor
export const saveQuizToServer = async (accessToken: string, quizData: CreateQuizDto): Promise<RequestResponse> => {
  try {
    const response = await fetch('http://localhost:4000/quizzes', {
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

export const getLatestQuizData = async () => {
  const response = await fetch('http://localhost:4000/quizzes/latest', {
    cache: 'no-store'
  })

  return await response.json()
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
