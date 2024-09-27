'use client'

import { useState } from 'react';

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

import { useSociologicalData } from './QuizContext';

// Styled Dropzone Component
const DropzoneContainer = styled('div')(({ theme }) => ({
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

const QuizMainImage = () => {
  const { imageFile, setImageFile } = useSociologicalData(); // Utilizar setOptionImage
  const [showUrlInput, setShowUrlInput] = useState(false);

  // Obter a imagem atual
  const currentImage = imageFile;

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const fileUrl = URL.createObjectURL(file);
        const blobImage = fileToBlob(file);

        setImageFile({
          imageFile: file,
          imageUrl: '',
          blobData: blobImage,
        });
      }
    },
  });

  const renderFilePreview = () => {
    if (currentImage?.imageFile) {
      return <img alt={currentImage.imageFile.name} src={URL.createObjectURL(currentImage.imageFile)} />;
    } else if (currentImage?.imageUrl) {
      return <img alt="Preview from URL" src={currentImage.imageUrl} />;
    }

    return null;
  };

  const handleRemoveFile = () => {
    setImageFile({
      imageFile: null,
      imageUrl: '',
      blobData: null,
    });
  };

  const toggleUrlInput = () => {
    setShowUrlInput((prev) => !prev);
  };

  const handleUrlChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;
    const fileBlobData = await urlToBlob(url); // Converte a URL em Blob

    setImageFile({
      imageFile: null,
      imageUrl: url,
      blobData: fileBlobData,
    });
  };

  // Função para converter um File em Blob
  const fileToBlob = (file: File): Blob => {
    return file;
  };

  // Função para converter uma URL em Blob
  const urlToBlob = async (url: string): Promise<Blob | null> => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Erro ao buscar a URL: ${response.statusText}`);
      }

      const blob = await response.blob();

      return blob;
    } catch (error) {
      console.error('Erro ao converter URL em Blob:', error);

      return null;
    }
  };

  return (
    <DropzoneContainer>
      <Card>
        <CardHeader
          title="Imagem do Quiz"
          action={
            <Typography
              component="a"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleUrlInput();
              }}
              color="primary"
              className="font-medium"
              sx={{ cursor: 'pointer' }}
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
              {!currentImage && (
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
                  value={currentImage?.imageUrl || ''}
                  onChange={handleUrlChange}
                  placeholder="Cole o link da imagem aqui"
                />
              </div>
            </Box>
          )}
          {(currentImage?.imageFile || currentImage?.imageUrl) && (
            <div className="buttons">
              <Button color="error" variant="outlined" onClick={handleRemoveFile}>
                Remover Imagem
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </DropzoneContainer>
  );
};

export default QuizMainImage;
