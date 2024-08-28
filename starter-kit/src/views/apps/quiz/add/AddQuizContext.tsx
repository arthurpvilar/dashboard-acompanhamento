'use client'

import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

import type { QuizQuestion } from '@/types/apps/quizTypes';
import { primaryColorConfig } from './QuizSociologicalData';

export type SociologicalDataType = {
  id: number;
  name: string;
  value: number;
  color: string;
}

// Definição dos tipos para o contexto
interface SociologicalContextProps {
  quizQuestions: QuizQuestion[];
  addQuizQuestion: (newQuestion: QuizQuestion) => void;
  updateQuizQuestion: (id: number, updatedQuestion: QuizQuestion) => void;
  deleteQuizQuestion: (id: number) => void;
  setQuizQuestions: (questions: QuizQuestion[]) => void;
  sociologicalData: SociologicalDataType[];
  addSociologicalData: (newData: SociologicalDataType, index?: number) => void;
  removeSociologicalData: (index: number) => void;
  quizName: string;
  setQuizName: (name: string) => void;
  quizType: string;
  setQuizType: (type: string) => void;
  quizIdentifier: string;
  setQuizIdentifier: (identifier: string) => void;
  quizDescription: string;
  setQuizDescription: (description: string) => void;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
}

// Tipo para o provider
interface SociologicalProviderProps {
  children: ReactNode;
}

const SociologicalContext = createContext<SociologicalContextProps | undefined>(undefined);

// Hook para acessar o contexto
export const useSociologicalData = (): SociologicalContextProps => {
  const context = useContext(SociologicalContext);

  if (!context) {
    throw new Error('useSociologicalData must be used within a SociologicalProvider');
  }

  return context;
};

// Provider que englobará os componentes
export const SociologicalProvider = ({ children }: SociologicalProviderProps): JSX.Element => {
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [sociologicalData, setSociologicalData] = useState<SociologicalDataType[]>([]);
  const [quizName, setQuizName] = useState<string>('');
  const [quizType, setQuizType] = useState<string>('');
  const [quizIdentifier, setQuizIdentifier] = useState<string>('');
  const [quizDescription, setQuizDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  // Efeito para adicionar o primeiro dado sociológico
  useEffect(() => {
    if (sociologicalData.length === 0) {
      // Obter a primeira cor disponível da lista
      const firstAvailableColor = primaryColorConfig.length > 0 ? primaryColorConfig[0].main : '';

      addSociologicalData({
        id: 1,
        name: 'Dado sociológico 01',
        value: 50,
        color: firstAvailableColor, // Atribuir a primeira cor disponível
      });
    }
  });

  const addQuizQuestion = (newQuestion: QuizQuestion) => {
    setQuizQuestions([...quizQuestions, newQuestion]);
  };

  const updateQuizQuestion = (id: number, updatedQuestion: QuizQuestion) => {
    setQuizQuestions(quizQuestions.map(question => (question.id === id ? updatedQuestion : question)));
  };

  const deleteQuizQuestion = (id: number) => {
    setQuizQuestions(quizQuestions.filter(question => question.id !== id));
  };

  const addSociologicalData = (newData: SociologicalDataType, index?: number) => {
    if (typeof index === 'number' && index >= 0 && index < sociologicalData.length) {
      const updatedData = sociologicalData.map((data, i) => (i === index ? newData : data));

      setSociologicalData(updatedData);
    } else {
      setSociologicalData([...sociologicalData, newData]);
    }
  };

  const removeSociologicalData = (index: number) => {
    const updatedData = sociologicalData.filter((_, i) => i !== index);

    setSociologicalData(updatedData);
  };

  return (
    <SociologicalContext.Provider
      value={{
        quizQuestions,
        addQuizQuestion,
        updateQuizQuestion,
        deleteQuizQuestion,
        setQuizQuestions,
        sociologicalData,
        addSociologicalData,
        removeSociologicalData,
        quizName,
        setQuizName,
        quizType,
        setQuizType,
        quizIdentifier,
        setQuizIdentifier,
        quizDescription,
        setQuizDescription,
        imageUrl,
        setImageUrl,
        imageFile,
        setImageFile,
      }}
    >
      {children}
    </SociologicalContext.Provider>
  );
};
