// Type Imports
import type { ThemeColor } from '@core/types'

export type UsersType = {
  id: number
  role: string
  email: string
  status: string
  avatar: string
  company: string
  country: string
  contact: string
  fullName: string
  username: string
  currentPlan?: string
  avatarColor?: ThemeColor
}

export type UserStatisticsDto = {
  students: number
  teachers: number
  administrators: number
  active: number
  pending: number
  inactive: number
}

export type BackEndUsersType = {
  index?: string
  username: string
  fullName: string
  email: string
  role: UserRole
  avatar?: string
  status: UserStatus
}

export enum UserRole {
  STUDENT = 'Student',
  TEACHER = 'Teacher',
  ADMINISTRATOR = 'Administrator'
}

export enum UserStatus {
  ATIVO = 'Ativo',
  PENDENTE = 'Pendente',
  INATIVO = 'Inativo'
}
