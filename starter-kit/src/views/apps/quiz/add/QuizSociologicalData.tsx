'use client';

// MUI Imports
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Box, CardHeader } from '@mui/material';

// Components Imports
// eslint-disable-next-line import/no-unresolved
import CustomIconButton from '@core/components/mui/IconButton';

import { useSociologicalData } from './AddQuizContext';
import QuizSociologicalTopics from './QuizSociologicalTopics';


// Primary color config object
const primaryColorConfig = [
  { name: 'Roxo', main: '#8C57FF' },
  { name: 'Verde', main: '#0D9394' },
  { name: 'Vermelho', main: '#EB3D63' },
  { name: 'Amarelo', main: '#FFAB1D' },
  { name: 'Azul', main: '#2092EC' },
  { name: 'Ciano', main: '#2EC' },
];

const MAX_ITEMS = 6;

const SociologicalData = () => {
  const { sociologicalData, addSociologicalData, removeSociologicalData } = useSociologicalData();

  const getAvailableColors = (currentColor?: string) => {
    const usedColors = sociologicalData.map(data => data.color).filter(Boolean);


return primaryColorConfig.filter(color => !usedColors.includes(color.main) || color.main === currentColor);
  };

  const handleAddSociologicalData = () => {
    if (sociologicalData.length < MAX_ITEMS) {
      const randomValue = Math.floor(Math.random() * (100 - 15 + 1)) + 15;

      // addSociologicalData({ id: 0, color: '', name: '', value: randomValue });
      addSociologicalData({ id: 0, name: `Dado sociológico ${sociologicalData.length + 1}`, value: randomValue, color: '' });
    }
  };

  const handleRemoveSociologicalData = (index: number) => {
    if (sociologicalData.length > 1) {
      removeSociologicalData(index);
    }
  };

  return (
    <Card>
      <CardHeader title="Dados Sociológicos" />
      <CardContent>
        <Grid container spacing={5}>
          {sociologicalData.map((data, index) => {
            const availableColors = getAvailableColors(data.color);

            return (
              <Grid key={index} item xs={12} className="repeater-item">
                <Grid container spacing={5}>
                  <Grid item xs={12} md={3}>
                    <FormControl fullWidth>
                      <InputLabel>Selecione a Cor</InputLabel>
                      <Select
                        label="Selecione a Cor"
                        value={data.color}
                        onChange={(e) => addSociologicalData({ ...data, color: e.target.value }, index)}
                        renderValue={(selected) => (
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                            <Box
                              sx={{
                                width: 25,
                                height: 25,
                                backgroundColor: selected as string,
                                border: '1px solid var(--border-color)',
                                borderRadius: 'var(--border-radius)',
                              }}
                            />
                            <span>{primaryColorConfig.find((color) => color.main === selected)?.name}</span>
                          </Box>
                        )}
                      >
                        {availableColors.map((color) => (
                          <MenuItem key={color.name} value={color.main}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                              <Box
                                sx={{
                                  width: 25,
                                  height: 25,
                                  backgroundColor: color.main,
                                  border: '1px solid var(--border-color)',
                                  borderRadius: 'var(--border-radius)',
                                }}
                              />
                              <span>{color.name}</span>
                            </Box>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <div className="flex items-center gap-5">
                      <TextField
                        fullWidth
                        label="Nome da propriedade sociológica"
                        placeholder="Propriedade Sociológica"
                        value={data.name}
                        onChange={(e) => addSociologicalData({ ...data, name: e.target.value }, index)}
                      />
                      <CustomIconButton onClick={() => handleRemoveSociologicalData(index)} className="min-is-fit">
                        <i className="ri-close-line" />
                      </CustomIconButton>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
          <Grid item xs={12}>
            <Button
              variant="contained"
              onClick={handleAddSociologicalData}
              startIcon={<i className="ri-add-line" />}
              disabled={sociologicalData.length >= MAX_ITEMS}
            >
              Adicionar nova propriedade
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <CardHeader title="Quadro Sociológico Atual" />
        <QuizSociologicalTopics />
      </CardContent>
    </Card>
  );
};

export default SociologicalData;
