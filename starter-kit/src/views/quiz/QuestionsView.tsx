'use client';

// React Imports
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

// Type Imports
import { getQuizById, updateQuiz } from '@/libs/quiz/handlers';
import type { Quiz, QuizQuestion } from '@/types/apps/quizTypes';

const QuizStart = () => {
  const { id } = useParams();
  const router = useRouter();
  const [quizData, setQuizData] = useState<Quiz | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  // Função para salvar o resultado do quiz no histórico
  const saveQuizResult = (userId: number, quizResult: any) => {
    const quizHistory = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    quizHistory.push({ userId, ...quizResult });
    localStorage.setItem('quizHistory', JSON.stringify(quizHistory));
  };

  useEffect(() => {
    if (id) {
      const fetchedQuiz = getQuizById(Number(id));
      if (fetchedQuiz) {
        setQuizData(fetchedQuiz);
      }
    }
  }, [id]);

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    if (!quizData) return;

    // Contar a quantidade de questões respondidas
    const questionsAnswered = Object.keys(answers).length;
    const totalQuestions = quizData.questions.length;

    // Cálculo do percentual de conclusão baseado em questões respondidas
    const completionPercentage = Math.floor((questionsAnswered / totalQuestions) * 100);
    quizData.progressValue = `${completionPercentage}%`;

    // Calcular as estatísticas sociológicas (sem alteração)
    let totalWeight = 0;
    let sociologicalWeights: { [key: number]: number } = {};

    quizData.questions.forEach((question) => {
      const userAnswer = answers[question.id];
      if (userAnswer) {
        totalWeight += question.weight || 0;
        const sociologicalId = question.sociologicalId;
        if (sociologicalId !== undefined) {
          if (!sociologicalWeights[sociologicalId]) {
            sociologicalWeights[sociologicalId] = 0;
          }
          sociologicalWeights[sociologicalId] += question.weight || 0;
        }
      }
    });

    // Calculando o impacto percentual de cada categoria sociológica
    const totalCategoryWeight = Object.values(sociologicalWeights).reduce((sum, weight) => sum + weight, 0);
    const sociologicalData = quizData.sociologicalData.map((data) => {
      const weight = sociologicalWeights[data.id] || 0;
      const impactPercentage = totalCategoryWeight > 0 ? (weight / totalCategoryWeight) * 100 : 0;
      return {
        ...data,
        value: parseFloat(impactPercentage.toFixed(2)),  // Garantindo duas casas decimais
      };
    });

    // Salvar respostas e quiz atualizado no localStorage
    localStorage.setItem(`quiz_responses_${quizData.id}`, JSON.stringify(answers));
    quizData.sociologicalData = sociologicalData;

    // Salvar o resultado do quiz no histórico
    const quizResult = {
      title: quizData.title,
      date: new Date().toLocaleDateString(),
      answers: Object.values(answers),
    };
    const userId = 51; // Use o ID correto do usuário
    saveQuizResult(userId, quizResult);

    // Atualizar o quiz no localStorage
    updateQuiz(quizData.id, quizData);
    router.push('/quiz');
  };

  if (!quizData) return <p>Quiz não encontrado!</p>;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" className="mb-4">
          {quizData.title}
        </Typography>
        <List>
          {quizData.questions.map((question: QuizQuestion, index: number) => (
            <ListItem key={index} className="mb-4">
              <FormControl component="fieldset" fullWidth>
                <Typography
                  variant="h5"
                  sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}
                >
                  {question.question}
                </Typography>
                {question.options && question.options.length > 0 ? (
                  <RadioGroup
                    aria-label={`question-${index}`}
                    name={`question-${index}`}
                    value={answers[question.id] || ''}
                    onChange={(e) =>
                      handleAnswerChange(question.id, e.target.value)
                    }
                  >
                    {question.options.map((option, i) => (
                      <FormControlLabel
                        key={i}
                        value={option}
                        control={<Radio />}
                        label={option}
                      />
                    ))}
                  </RadioGroup>
                ) : (
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Digite sua resposta"
                    multiline
                    rows={4}
                    sx={{ marginTop: 2, fontSize: '1.25rem', width: '100%' }}
                    value={answers[question.id] || ''}
                    onChange={(e) =>
                      handleAnswerChange(question.id, e.target.value)
                    }
                  />
                )}
              </FormControl>
            </ListItem>
          ))}
        </List>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar Respostas
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizStart;
