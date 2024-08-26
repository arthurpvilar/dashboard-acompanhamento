'use client'

import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';

interface SociologicalDataType {
  name: string;
  value: number;
  color: string;
}

// Definição dos tipos para o contexto
interface SociologicalContextProps {
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
  const [sociologicalData, setSociologicalData] = useState<SociologicalDataType[]>([]);
  const [quizName, setQuizName] = useState<string>('');
  const [quizType, setQuizType] = useState<string>('');
  const [quizIdentifier, setQuizIdentifier] = useState<string>('');
  const [quizDescription, setQuizDescription] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);

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
