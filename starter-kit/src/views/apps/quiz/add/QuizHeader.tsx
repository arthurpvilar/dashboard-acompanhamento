'use client'

// MUI Imports
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Importar o contexto
import { useSociologicalData } from './AddQuizContext';

const QuizHeader = () => {
  const {
    quizName,
    setQuizName,
    quizIdentifier,
    setQuizIdentifier,
    quizDescription,
    setQuizDescription,
    imageFile,
    setImageFile,
    quizType,
    quizQuestions,
    setQuizQuestions,
    optionImages,
    setOptionImage,
    audioFile,
    setAudioFile,
  } = useSociologicalData(); // Acessar o contexto

  // Função para limpar todos os dados
  const clearAllData = () => {
    setQuizName('');
    setQuizIdentifier('');
    setQuizDescription('');
    setImageFile(null);
    setQuizQuestions([]);
    setAudioFile(null);
    Object.keys(optionImages).forEach((key) => {
      setOptionImage(key, { imageUrl: '', imageFile: null, blobData: null });
    });
  };

  // Função para salvar o rascunho no localStorage
  const handleSaveDraft = () => {
    const quizDraft = {
      name: quizName,
      identifier: quizIdentifier,
      description: quizDescription,
      imageFile,
      quizType,
      questions: quizQuestions,
      audioFile,
    };

    localStorage.setItem('quizDraft', JSON.stringify(quizDraft));
    alert('Rascunho salvo!');
  };

  // Função para publicar o quiz (simulando envio para uma API)
  const handlePublish = () => {
    const quizData = {
      name: quizName,
      identifier: quizIdentifier,
      description: quizDescription,
      imageFile,
      quizType,
      questions: quizQuestions,
      audioFile,
    };

    console.log('Publicando quiz...', quizData);

    // Aqui você pode adicionar a lógica para enviar os dados para uma API
    alert('Quiz publicado com sucesso!');
    clearAllData(); // Limpar os dados após a publicação
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-6">
      <div>
        <Typography variant="h4" className="mbe-1">
          Adicionar novo Quiz
        </Typography>
        <Typography>
          Esse quiz será liberado para toda a plataforma, para ser acessado com um identificador
        </Typography>
      </div>
      <div className="flex flex-wrap gap-4">
        <Button variant="outlined" color="secondary" onClick={clearAllData}>
          Descartar
        </Button>
        <Button variant="outlined" onClick={handleSaveDraft}>
          Salvar Rascunho
        </Button>
        <Button variant="contained" onClick={handlePublish}>
          Publicar Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizHeader;
