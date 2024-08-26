'use client'

import { useState } from 'react';

import Link from 'next/link';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
import { useDropzone } from 'react-dropzone';
// eslint-disable-next-line import/no-unresolved
import CustomAvatar from '@core/components/mui/Avatar';

// eslint-disable-next-line import/no-unresolved
import AppReactDropzone from '@/libs/styles/AppReactDropzone';
import { useSociologicalData } from './AddQuizContext'; // Importar o contexto

// Styled Dropzone Component
const Dropzone = styled(AppReactDropzone)(({ theme }) => ({
  '& .dropzone': {
    border: '2px dashed #cccccc',
    borderRadius: '12px',
    padding: `${theme.spacing(10)} ${theme.spacing(4)}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    minHeight: '300px',
    position: 'relative',
  },
  '& img': {
    borderRadius: '12px',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
}));

const AddQuizImage = () => {
  const { imageFile, setImageFile, imageUrl, setImageUrl } = useSociologicalData(); // Usando o contexto
  const [showUrlInput, setShowUrlInput] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop: (acceptedFiles: File[]) => {
      setImageFile(acceptedFiles[0]); // Atualiza o arquivo de imagem no contexto
      setImageUrl(''); // Limpa a URL ao selecionar um arquivo
    },
  });

  const renderFilePreview = () => {
    if (imageFile) {
      return <img alt={imageFile.name} src={URL.createObjectURL(imageFile)} />;
    } else if (imageUrl) {
      return <img alt="Preview from URL" src={imageUrl} />;
    }


return null;
  };

  const handleRemoveFile = () => {
    setImageFile(null); // Limpa o arquivo do contexto
    setImageUrl(''); // Limpa a URL do contexto
  };

  const toggleUrlInput = () => {
    setShowUrlInput(!showUrlInput);
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value); // Atualiza a URL no contexto
    setImageFile(null); // Limpa o arquivo ao inserir uma URL
  };

  return (
    <Dropzone>
      <Card>
        <CardHeader
          title="Imagem do Quiz"
          action={
            <Typography
              component={Link}
              href="/"
              onClick={(e) => {
                e.preventDefault();
                toggleUrlInput();
              }}
              color="primary"
              className="font-medium"
            >
              {showUrlInput ? 'Fechar campo de URL' : 'Adicionar a partir de URL'}
            </Typography>
          }
          sx={{ '& .MuiCardHeader-action': { alignSelf: 'center' } }}
        />
        <CardContent>
          <Box mb={4}>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              {!imageFile && !imageUrl && (
                <div className="flex items-center flex-col gap-2 text-center">
                  <CustomAvatar variant="rounded" skin="light" color="secondary">
                    <i className="ri-upload-2-line" />
                  </CustomAvatar>
                  <Typography variant="h4">Arraste e solte sua imagem aqui.</Typography>
                  <Typography color="text.disabled">ou</Typography>
                  <Button variant="outlined" size="small">
                    Procurar Imagem
                  </Button>
                </div>
              )}
              {renderFilePreview()}
            </div>
          </Box>
          {showUrlInput && (
            <Box mb={4}>
              <div className="mt-4">
                <TextField
                  fullWidth
                  label="URL da Imagem"
                  value={imageUrl}
                  onChange={handleUrlChange}
                  placeholder="Cole o link da imagem aqui"
                />
              </div>
            </Box>
          )}
          {(imageFile || imageUrl) && (
            <div className="buttons">
              <Button color="error" variant="outlined" onClick={handleRemoveFile}>
                Remover Imagem
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </Dropzone>
  );
};

export default AddQuizImage;
