'use client'

// MUI Imports
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// Context Imports
import { useSociologicalData } from './AddQuizContext';

const QuizTypesDropdown = () => {
  // Acessar o contexto
  const { quizType, setQuizType } = useSociologicalData();

  return (
    <Card>
      <CardHeader title="Tipo do Quiz a ser criado" />
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
          <FormControl fullWidth>
            <InputLabel>Selecione o Tipo</InputLabel>
            <Select
              label="Selecione o Tipo"
              value={quizType} // O valor é retirado do contexto
              onChange={(e) => setQuizType(e.target.value)} // Atualizar o tipo de quiz no contexto
            >
              <MenuItem value={`Pergunta com Texto`}>Pergunta com Texto</MenuItem>
              <MenuItem value={`Pergunta com Áudio`}>Pergunta com Áudio</MenuItem>
            </Select>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuizTypesDropdown;
