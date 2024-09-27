'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import type {
  SelectChangeEvent} from '@mui/material';
import {
  Button,
  TextField,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  List,
  ListItem,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDropzone } from 'react-dropzone';
import CustomAvatar from '@core/components/mui/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import type { BoxProps } from '@mui/material/Box';
import Link from '@components/Link';

import type { ThemeColor } from '@core/types';

import type { Quiz, QuizSociologicalData, QuizQuestion } from '@/types/apps/quizTypes';
import { createQuiz } from '@/libs/quiz/handlers';

type SociologicalImpact = {
  sociologicalId: number;
  name: string;
  totalWeight: number;
  impactPercentage: number;
};

const Dropzone = styled(Box)<BoxProps>(({ theme }) => ({
  '& .dropzone': {
    border: '2px dashed #474361',
    padding: theme.spacing(12),
    backgroundColor: '#312D4B',
    borderRadius: '8px',
  },
}));

const Section = styled(Box)<BoxProps>(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#312D4B',
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(4),
  color: '#FFFFFF',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#6C5DD3',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#5B4CC0',
  },
}));

const CreateQuiz = () => {
  const [quiz, setQuiz] = useState<Omit<Quiz, 'id' | 'image' | 'logo'>>({
    title: '',
    description: '',
    identifier: '',

    //averageTime: 0,
    sociologicalData: [],
    questions: [],

    //attempts: [],
    //completedQuiz: 0,
    //totalQuiz: 0,
    //time: 0,
    //color: 'primary',
    owner: {
      id: 51,
      role: 'Admin',
      email: 'admin@example.com',
      status: 'Active',
      avatar: 'https://example.com/avatar1.jpg',
      company: 'Example Corp',
      country: 'USA',
      contact: '+1234567890',
      fullName: 'John Doe',
      username: 'johndoe',
      currentPlan: 'Enterprise',
      avatarColor: 'primary',
    },

    //users: [],
  });

  const [sociologicalData, setSociologicalData] = useState<QuizSociologicalData[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentSociological, setCurrentSociological] = useState<Omit<QuizSociologicalData, 'id'>>({ name: '', value: 0, color: 'primary' as ThemeColor });
  const [currentQuestion, setCurrentQuestion] = useState<Omit<QuizQuestion, 'id'>>({ question: '', options: [''], answer: '', weight: 1, sociologicalId: 0 });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [quizType, setQuizType] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz({ ...quiz, [e.target.name]: e.target.value });
  };

  const handleQuizTypeChange = (event: SelectChangeEvent<string>) => {
    setQuizType(event.target.value);
  };

  const handleSociologicalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentSociological({ ...currentSociological, [e.target.name]: e.target.value });
  };

  const handleColorChange = (event: SelectChangeEvent<ThemeColor>) => {
    setCurrentSociological({ ...currentSociological, color: event.target.value as ThemeColor });
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuestion({ ...currentQuestion, [e.target.name]: e.target.value });
  };

  const handleSociologicalSelectChange = (event: SelectChangeEvent<number>) => {
    setCurrentQuestion({ ...currentQuestion, sociologicalId: Number(event.target.value) });
  };

  const addSociologicalData = () => {
    setSociologicalData([...sociologicalData, { ...currentSociological, id: sociologicalData.length }]);
    setCurrentSociological({ name: '', value: 0, color: 'primary' as ThemeColor });
  };

  const addQuestion = () => {
    const newQuestion: QuizQuestion = {
      ...currentQuestion,
      id: questions.length + 1,
    };

    // Verifica se o tipo de quiz é dissertativo e remove as opções
    if (quizType === 'dissertativo') {
      delete newQuestion.options;
    }

    setQuestions([...questions, newQuestion]);
    setCurrentQuestion({ question: '', options: quizType === 'dissertativo' ? [] : [''], answer: '', weight: 1, sociologicalId: 0 });
  };

  const removeQuestion = (index: number) => {
    const newQuestions = [...questions];

    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  function calculateSociologicalImpact(quiz: Quiz, userResponses: Record<number, string>): SociologicalImpact[] {
    // Somar o peso total de todas as perguntas respondidas pelo usuário
    const totalWeight = quiz.questions.reduce((sum, question) => {
      const userAnswer = userResponses[question.id];


return sum + (userAnswer ? question.weight || 0 : 0);
    }, 0);

    if (totalWeight === 0) {
      return []; // Retorna vazio se não houver respostas ainda
    }

    // Agrupar perguntas por SociologicalId e calcular o impacto percentual
    const sociologicalGroups = quiz.sociologicalData.map((data) => {
      const totalWeightForCategory = quiz.questions
        .filter((question) => question.sociologicalId === data.id)
        .reduce((sum, question) => {
          const userAnswer = userResponses[question.id];


return sum + (userAnswer ? question.weight || 0 : 0);
        }, 0);

      const impactPercentage = totalWeight > 0 ? (totalWeightForCategory / totalWeight) * 100 : 0;

      return {
        sociologicalId: data.id,
        name: data.name,
        totalWeight: totalWeightForCategory,
        impactPercentage: impactPercentage,
      };
    });

    return sociologicalGroups;
  }


  const { getRootProps: getRootPropsImage, getInputProps: getInputPropsImage } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setImageFile(acceptedFiles[0]);
      }
    },
  });

  const { getRootProps: getRootPropsLogo, getInputProps: getInputPropsLogo } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setLogoFile(acceptedFiles[0]);
      }
    },
  });

  const renderFilePreview = (file: File) => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file)} />;
    } else {
      return <i className='ri-file-text-line' />;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let imageBase64 = imageUrl || null;
    let logoBase64 = logoUrl || null;

    if (imageFile) {
      const reader = new FileReader();

      reader.onloadend = () => {
        imageBase64 = reader.result as string;

        if (logoFile) {
          const logoReader = new FileReader();

          logoReader.onloadend = () => {
            logoBase64 = logoReader.result as string;

            const newQuiz: Quiz = {
              ...quiz,
              id: Date.now(),
              image: imageBase64!,
              logo: logoBase64!,
              sociologicalData,
              questions,
            };

            createQuiz(newQuiz);
            setMessage('Quiz criado com sucesso! Redirecionando...');
            setTimeout(() => {
              router.push('/quiz');
            }, 2000);
          };

          logoReader.readAsDataURL(logoFile);
        }
      };

      reader.readAsDataURL(imageFile);
    } else if (imageUrl && logoUrl) {
      const newQuiz: Quiz = {
        ...quiz,
        id: Date.now(),
        image: imageUrl,
        logo: logoUrl,
        sociologicalData,
        questions,
      };

      createQuiz(newQuiz);
      setMessage('Quiz criado com sucesso! Redirecionando...');
      setTimeout(() => {
        router.push('/quiz');
      }, 2000);
    } else {
      alert('Please upload both an image and a logo.');
    }
  };


  return (
    <Card sx={{ backgroundColor: '#28243D', color: '#FFFFFF' }}>
      <Typography variant='h4' className='mbe-1'>
        Add a new Quiz
      </Typography>
      <CardContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

          {/* Seção 1: Títulos, Descrição, Tempo, Identificador */}
          <Section>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <TextField name="title" label="Title" onChange={handleChange} required fullWidth sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="identifier" label="Identifier" onChange={handleChange} required fullWidth sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField name="time" label="Time (seconds)" onChange={handleChange} required fullWidth sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }} />
              </Grid>
              <Grid item xs={12}>
                <Typography className='mbe-1'>Description</Typography>
                <TextField
                  name="description"
                  onChange={handleChange}
                  required
                  fullWidth
                  multiline
                  rows={4}
                  placeholder='Write the quiz description here...'
                  sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                />
              </Grid>
            </Grid>
          </Section>

          {/* Seção 2: Importar Imagens */}
          <Section>
            <Typography variant="h6">Upload Image</Typography>
            <Dropzone>
              <div {...getRootPropsImage({ className: 'dropzone' })}>
                <input {...getInputPropsImage()} />
                <div className='flex items-center flex-col gap-2 text-center'>
                  <CustomAvatar variant='rounded' skin='light' color='secondary'>
                    <i className='ri-upload-2-line' />
                  </CustomAvatar>
                  <Typography variant='h4'>Drag and Drop Your Image Here.</Typography>
                  <Typography color='text.disabled'>or</Typography>
                  <CustomButton variant='outlined' size='small'>
                    Browse Image
                  </CustomButton>
                </div>
              </div>
              {imageFile && (
                <List>
                  <ListItem key={imageFile.name} className='pis-4 plb-3'>
                    <div className='file-details'>
                      <div className='file-preview'>{renderFilePreview(imageFile)}</div>
                      <div>
                        <Typography className='file-name font-medium' color='text.primary'>
                          {imageFile.name}
                        </Typography>
                        <Typography className='file-size' variant='body2'>
                          {Math.round(imageFile.size / 100) / 10 > 1000
                            ? `${(Math.round(imageFile.size / 100) / 10000).toFixed(1)} mb`
                            : `${(Math.round(imageFile.size / 100) / 10).toFixed(1)} kb`}
                        </Typography>
                      </div>
                    </div>
                    <IconButton onClick={() => setImageFile(null)}>
                      <i className='ri-close-line text-xl' />
                    </IconButton>
                  </ListItem>
                </List>
              )}
              <CardHeader
                title='Quiz Image'
                action={
                  <Typography component={Link} color='primary' className='font-medium'>
                    Add media from URL
                  </Typography>
                }
                sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
              />
              <CardContent>
                <TextField
                  fullWidth
                  placeholder="Enter image URL"
                  value={imageUrl || ''}
                  onChange={(e) => setImageUrl(e.target.value)}
                  sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                />
              </CardContent>
            </Dropzone>

            <Typography variant="h6">Upload Logo</Typography>
            <Dropzone>
              <div {...getRootPropsLogo({ className: 'dropzone' })}>
                <input {...getInputPropsLogo()} />
                <div className='flex items-center flex-col gap-2 text-center'>
                  <CustomAvatar variant='rounded' skin='light' color='secondary'>
                    <i className='ri-upload-2-line' />
                  </CustomAvatar>
                  <Typography variant='h4'>Drag and Drop Your Logo Here.</Typography>
                  <Typography color='text.disabled'>or</Typography>
                  <CustomButton variant='outlined' size='small'>
                    Browse Logo
                  </CustomButton>
                </div>
              </div>
              {logoFile && (
                <List>
                  <ListItem key={logoFile.name} className='pis-4 plb-3'>
                    <div className='file-details'>
                      <div className='file-preview'>{renderFilePreview(logoFile)}</div>
                      <div>
                        <Typography className='file-name font-medium' color='text.primary'>
                          {logoFile.name}
                        </Typography>
                        <Typography className='file-size' variant='body2'>
                          {Math.round(logoFile.size / 100) / 10 > 1000
                            ? `${(Math.round(logoFile.size / 100) / 10000).toFixed(1)} mb`
                            : `${(Math.round(logoFile.size / 100) / 10).toFixed(1)} kb`}
                        </Typography>
                      </div>
                    </div>
                    <IconButton onClick={() => setLogoFile(null)}>
                      <i className='ri-close-line text-xl' />
                    </IconButton>
                  </ListItem>
                </List>
              )}
              <CardHeader
                title='Quiz Logo'
                action={
                  <Typography component={Link} color='primary' className='font-medium'>
                    Add media from URL
                  </Typography>
                }
                sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
              />
              <CardContent>
                <TextField
                  fullWidth
                  placeholder="Enter logo URL"
                  value={logoUrl || ''}
                  onChange={(e) => setLogoUrl(e.target.value)}
                  sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                />
              </CardContent>
            </Dropzone>
          </Section>

          {/* Seção 3: Perguntas */}
          <Section>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="quiz-type-label">Quiz Type</InputLabel>
                  <Select
                    labelId="quiz-type-label"
                    value={quizType}
                    label="Quiz Type"
                    onChange={handleQuizTypeChange}
                    fullWidth
                    sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                  >
                    <MenuItem value="perguntas">Perguntas</MenuItem>
                    <MenuItem value="dissertativo">Dissertativo</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {quizType === 'dissertativo' && (
                <Grid item xs={12}>
                  <Typography variant="h6">Add a Question</Typography>
                  <TextField
                    fullWidth
                    label="Question"
                    value={currentQuestion.question}
                    name="question"
                    onChange={handleQuestionChange}
                    sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                  />
                  <CustomButton variant="contained" sx={{ marginTop: 2 }} onClick={addQuestion}>
                    Add Question
                  </CustomButton>
                </Grid>
              )}

              {quizType === 'perguntas' && (
                <Grid item xs={12}>
                  <Typography variant="h6">Add a Question</Typography>
                  <TextField
                    fullWidth
                    label="Question"
                    value={currentQuestion.question}
                    name="question"
                    onChange={handleQuestionChange}
                    sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                  />
                  {currentQuestion.options?.map((option: string, index: number) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                      <TextField
                        fullWidth
                        label={`Option ${index + 1}`}
                        value={option}
                        name="options"
                        onChange={(e) => {
                          const newOptions = [...(currentQuestion.options || [])];

                          newOptions[index] = e.target.value;
                          setCurrentQuestion({ ...currentQuestion, options: newOptions });
                        }}
                        sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                      />
                      <IconButton
                        onClick={() => {
                          const newOptions = [...(currentQuestion.options || [])];

                          newOptions.splice(index, 1);
                          setCurrentQuestion({ ...currentQuestion, options: newOptions });
                        }}
                        color="error"
                        sx={{ marginLeft: 2 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                  <CustomButton
                    variant="outlined"
                    sx={{ marginTop: 2 }}
                    onClick={() => setCurrentQuestion({ ...currentQuestion, options: [...(currentQuestion.options || []), ''] })}
                  >
                    Add Option
                  </CustomButton>
                  <TextField
                    fullWidth
                    label="Correct Answer"
                    value={currentQuestion.answer}
                    name="answer"
                    onChange={handleQuestionChange}
                    sx={{ marginTop: 2, backgroundColor: '#312D4B', color: '#FFFFFF' }}
                  />
                  <TextField
                    fullWidth
                    label="Weight"
                    type="number"
                    value={currentQuestion.weight}
                    name="weight"
                    onChange={handleQuestionChange}
                    sx={{ marginTop: 2, backgroundColor: '#312D4B', color: '#FFFFFF' }}
                  />

                  {/* Seletor de Categoria Sociológica */}
                  <FormControl fullWidth sx={{ marginTop: 2 }}>
                    <InputLabel id="sociological-category-label">Sociological Category</InputLabel>
                    <Select
                      labelId="sociological-category-label"
                      value={currentQuestion.sociologicalId}
                      label="Sociological Category"
                      onChange={handleSociologicalSelectChange}
                      fullWidth
                      sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                    >
                      {sociologicalData.map((data) => (
                        <MenuItem key={data.id} value={data.id}>
                          {data.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <CustomButton variant="contained" sx={{ marginTop: 2 }} onClick={addQuestion}>
                    Add Question
                  </CustomButton>
                </Grid>
              )}
            </Grid>
          </Section>

          {/* Exibir todas as perguntas */}
          <Section>
            <Typography variant="h6">All Questions</Typography>
            <List>
              {questions.map((q, index) => (
                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography>{q.question}</Typography>
                  <IconButton
                    onClick={() => removeQuestion(index)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              ))}
            </List>
          </Section>

          {/* Seção 4: Questões Sociológicas */}
          <Section>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant="h6">Add Sociological Data</Typography>
                <TextField
                  fullWidth
                  label="Name"
                  value={currentSociological.name}
                  name="name"
                  onChange={handleSociologicalChange}
                  sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                />
                <TextField
                  fullWidth
                  label="Value"
                  type="number"
                  value={currentSociological.value}
                  name="value"
                  onChange={handleSociologicalChange}
                  sx={{ marginTop: 2, backgroundColor: '#312D4B', color: '#FFFFFF' }}
                />
                <FormControl fullWidth sx={{ marginTop: 2, backgroundColor: '#312D4B', color: '#FFFFFF' }}>
                  <InputLabel id="color-label">Color</InputLabel>
                  <Select
                    labelId="color-label"
                    value={currentSociological.color}
                    label="Color"
                    onChange={handleColorChange}
                    fullWidth
                    sx={{ backgroundColor: '#312D4B', color: '#FFFFFF' }}
                  >
                    <MenuItem value="primary">Primary</MenuItem>
                    <MenuItem value="secondary">Secondary</MenuItem>
                    <MenuItem value="error">Error</MenuItem>
                    <MenuItem value="warning">Warning</MenuItem>
                    <MenuItem value="info">Info</MenuItem>
                    <MenuItem value="success">Success</MenuItem>
                  </Select>
                </FormControl>
                <CustomButton variant="contained" sx={{ marginTop: 2 }} onClick={addSociologicalData}>
                  Add Sociological Data
                </CustomButton>
                <List>
                  {sociologicalData.map((data, index) => (
                    <ListItem key={index}>
                      <Typography>{data.name} - {data.value} ({data.color})</Typography>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Section>

          {message && <Typography color="success">{message}</Typography>}

          <CustomButton type="submit" variant="contained" color="primary">
            Create Quiz
          </CustomButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreateQuiz;
