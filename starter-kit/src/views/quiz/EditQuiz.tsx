'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getQuizById, updateQuiz } from '@/libs/quiz/handlers';
import type { Quiz } from '@/types/apps/quizTypes';
import { TextField, Button, Box, Typography, Card, CardHeader, CardContent, Grid, Divider, List, ListItem, IconButton, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDropzone } from 'react-dropzone';
import CustomAvatar from '@core/components/mui/Avatar';
import type { BoxProps } from '@mui/material/Box';

// Styled Dropzone Component
const Dropzone = styled(Box)<BoxProps>(({ theme }) => ({
  '& .dropzone': {
    minHeight: 'unset',
    padding: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      paddingInline: theme.spacing(5),
    },
    '&+.MuiList-root .MuiListItem-root .file-name': {
      fontWeight: theme.typography.body1.fontWeight,
    },
  },
}));

const EditQuiz = () => {
  const router = useRouter();
  const { id } = useParams();
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchedQuiz = getQuizById(Number(id));
      if (fetchedQuiz) {
        setQuiz(fetchedQuiz);
      }
    }
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (quiz) {
      setQuiz({ ...quiz, [e.target.name]: e.target.value });
    }
  };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (quiz) {
      let updatedQuiz: Quiz = { ...quiz };

      if (imageFile) {
        const reader = new FileReader();
        reader.onload = () => {
          updatedQuiz.image = reader.result as string;
        };
        reader.readAsDataURL(imageFile);
      }

      if (logoFile) {
        const reader = new FileReader();
        reader.onload = () => {
          updatedQuiz.logo = reader.result as string;
        };
        reader.readAsDataURL(logoFile);
      }

      setTimeout(async () => {
        await updateQuiz(Number(id), updatedQuiz);
        setOpenSnackbar(true);
        setTimeout(() => {
          router.push('/quiz');
        }, 1500);
      }, 500);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  if (!quiz) return <p>Loading...</p>;

  return (
    <Card>
      <CardHeader title="Edit Quiz" />
      <CardContent>
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Grid container spacing={5} className='mbe-5'>
            <Grid item xs={12}>
              <TextField
                name="title"
                label="Title"
                value={quiz.title}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="identifier"
                label="Identifier"
                value={quiz.identifier}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="time"
                label="Time (seconds)"
                value={quiz.time.toString()}
                onChange={handleChange}
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Typography className='mbe-1'>Description</Typography>
              <TextField 
                name="description" 
                value={quiz.description} 
                onChange={handleChange} 
                required 
                fullWidth 
                multiline 
                rows={4} 
                placeholder='Write the quiz description here...'
              />
            </Grid>
          </Grid>
          
          <Divider />

          <Typography variant="h6">Change Logo</Typography>
          <Dropzone>
            <div {...getRootPropsLogo({ className: 'dropzone' })}>
              <input {...getInputPropsLogo()} />
              <div className='flex items-center flex-col gap-2 text-center'>
                <CustomAvatar variant='rounded' skin='light' color='secondary'>
                  <i className='ri-upload-2-line' />
                </CustomAvatar>
                <Typography variant='h4'>Drag and Drop Your Logo Here.</Typography>
                <Typography color='text.disabled'>or</Typography>
                <Button variant='outlined' size='small'>
                  Browse Logo
                </Button>
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
          </Dropzone>

          <Typography variant="h6">Change Quiz Image</Typography>
          <Dropzone>
            <div {...getRootPropsImage({ className: 'dropzone' })}>
              <input {...getInputPropsImage()} />
              <div className='flex items-center flex-col gap-2 text-center'>
                <CustomAvatar variant='rounded' skin='light' color='secondary'>
                  <i className='ri-upload-2-line' />
                </CustomAvatar>
                <Typography variant='h4'>Drag and Drop Your Image Here.</Typography>
                <Typography color='text.disabled'>or</Typography>
                <Button variant='outlined' size='small'>
                  Browse Image
                </Button>
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
          </Dropzone>

          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
              Quiz alterado com sucesso!
            </Alert>
          </Snackbar>
        </Box>
      </CardContent>
    </Card>
  );
};

export default EditQuiz;
