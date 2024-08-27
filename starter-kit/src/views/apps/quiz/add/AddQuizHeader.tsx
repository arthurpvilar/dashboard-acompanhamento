'use client'

// MUI Imports
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Importar o contexto
import { useSociologicalData } from './AddQuizContext';

const QuizAddHeader = () => {
  const {
    setQuizName,
    setQuizIdentifier,
    setQuizDescription,
    setImageUrl,
    setImageFile,
    quizName,
    quizIdentifier,
    quizDescription,
    imageUrl,
    imageFile,
  } = useSociologicalData(); // Acessar o contexto

  const handleDiscard = () => {
    // Limpar os dados do quiz
    setQuizName('');
    setQuizIdentifier('');
    setQuizDescription('');
    setImageUrl('');
    setImageFile(null);
  };

  const handleSaveDraft = () => {
    // Exemplo: Salvar no localStorage (ou poderia ser no backend)
    const quizData = {
      name: quizName,
      identifier: quizIdentifier,
      description: quizDescription,
      imageUrl: imageUrl,
      imageFile: imageFile ? imageFile.name : null, // Se quiser salvar apenas o nome do arquivo
    };

    localStorage.setItem('quizDraft', JSON.stringify(quizData));
    alert('Rascunho salvo!');
  };

  const handlePublish = () => {
    // Exemplo: Publicar (enviar para o backend)
    const quizData = {
      name: quizName,
      identifier: quizIdentifier,
      description: quizDescription,
      imageUrl: imageUrl,
      imageFile: imageFile ? imageFile.name : null, // Se quiser enviar apenas o nome do arquivo
    };


    // Lógica para publicar (exemplo: enviar para uma API)
    console.log('Publicando quiz...', quizData);
    alert('Quiz publicado com sucesso!');
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
        <Button variant="outlined" color="secondary" onClick={handleDiscard}>
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

export default QuizAddHeader;
