'use client';

// React Imports
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Type Imports
import { getQuizById } from '@/libs/quiz/handlers';
import type { Quiz, QuizSociologicalData, QuizQuestion } from '@/types/apps/quizTypes';

// Components Imports
import SociologicalTopics from './SociologicalTopics';

type SociologicalImpact = {
  sociologicalId: number;
  name: string;
  totalWeight: number;
  impactPercentage: number;
  colorClass: string;
};

const Details = () => {
  const { id } = useParams();
  const [quizData, setQuizData] = useState<Quiz | null>(null);
  const [sociologicalImpact, setSociologicalImpact] = useState<SociologicalImpact[]>([]);
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (id) {
      const fetchedQuiz = getQuizById(Number(id));
      if (fetchedQuiz) {
        setQuizData(fetchedQuiz);
        calculateSociologicalImpact(fetchedQuiz);
      }
    }
  }, [id]);

  const calculateSociologicalImpact = (quiz: Quiz) => {
    const storedResponses = localStorage.getItem(`quiz_responses_${quiz.id}`);
    if (!storedResponses) {
      setSociologicalImpact([]);
      return;
    }
  
    const userResponses = JSON.parse(storedResponses);
    let totalWeight = 0;
    let categoryWeights: { [key: number]: number } = {};
  
    // Calcular o peso total das perguntas respondidas
    quiz.questions.forEach((question) => {
      if (userResponses[question.id]) {
        const weight = question.weight || 0;
        totalWeight += weight;
  
        const sociologicalId = question.sociologicalId;
        if (sociologicalId !== undefined) {
          if (!categoryWeights[sociologicalId]) {
            categoryWeights[sociologicalId] = 0;
          }
          categoryWeights[sociologicalId] += weight;
        }
      }
    });
  
    if (totalWeight === 0) {
      setSociologicalImpact([]);
      return;
    }
  
    let totalImpact = 0;
    const sociologicalGroups = quiz.sociologicalData.map((data) => {
      const totalWeightForCategory = categoryWeights[data.id] || 0;
      const impactPercentage = (totalWeightForCategory / totalWeight) * 100;
      totalImpact += impactPercentage;
  
      return {
        sociologicalId: data.id,
        name: data.name,
        totalWeight: totalWeightForCategory,
        impactPercentage: impactPercentage,
        colorClass: data.color || 'primary'
      };
    });
  
    const normalizedGroups = sociologicalGroups.map(group => ({
      ...group,
      impactPercentage: parseFloat(((group.impactPercentage / totalImpact) * 100).toFixed(2)) // Limita a 2 casas decimais
    }));
  
    setSociologicalImpact(normalizedGroups);
  };
  
  
  
  

  if (!quizData) return <p>Quiz não encontrado!</p>;

  return (
    <Card>
      <CardContent className='flex flex-wrap items-center justify-between gap-4 pbe-6'>
        <div>
          <Typography variant='h5'>{quizData.title}</Typography>
          <Typography>
            Por: <span className='font-medium text-textPrimary'>{quizData.owner.fullName}</span>
          </Typography>
        </div>
        <div className='flex items-center gap-4'>
          <i className='ri-bookmark-line cursor-pointer' />
        </div>
      </CardContent>
      <CardContent>
        <div className='border rounded'>
          <div className='mli-2 mbs-2 overflow-hidden rounded'>
            <div
              className='bg-black'
              style={{
                height: smallScreen ? 280 : 440,
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              <img
                src={quizData.image || '/default-image.png'} // Se a imagem estiver vazia, exibe uma imagem padrão
                alt='Thumbnail'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  backgroundColor: 'var(--backgroundPaper)' 
                }}
              />
            </div>
          </div>
          <div className='flex flex-col gap-6 p-5'>
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Descrição do Quiz</Typography>
              <Typography sx={{ textAlign: 'justify' }}>{quizData.description}</Typography>
            </div>
            <Divider />
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Estatísticas</Typography>
              <div className='flex flex-wrap gap-x-12 gap-y-2'>
                <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='ri-group-line text-xl text-textSecondary' />
                    <Typography>Qtd. Usuários: {quizData.users.length}</Typography>
                  </ListItem>
                </List>
                <List role='list' component='div' className='flex flex-col gap-2 plb-0'>
                  <ListItem role='listitem' className='flex items-center gap-2 p-0'>
                    <i className='ri-time-line text-xl text-textSecondary' />
                    <Typography>Tempo médio: {quizData.averageTime}</Typography>
                  </ListItem>
                </List>
              </div>
            </div>
            <Divider />
            <div className='flex flex-col gap-4'>
              <Typography variant='h5'>Estatísticas sociológicas</Typography>
              <div className='flex flex-wrap gap-x-12 gap-y-2'>
                {sociologicalImpact.length > 0 ? (
                  <SociologicalTopics sociologicalData={sociologicalImpact.map(impact => ({
                    title: impact.name,
                    value: impact.impactPercentage,
                    colorClass: impact.colorClass // Usando a cor associada ao dado sociológico
                  }))} />
                ) : (
                  <Typography>Nenhuma estatística disponível ainda.</Typography>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Details;
