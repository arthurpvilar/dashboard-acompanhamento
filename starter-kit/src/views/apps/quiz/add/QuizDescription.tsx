'use client'

// MUI Imports
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// Third-party Imports
import type { Editor } from '@tiptap/react';
import { useEditor, EditorContent } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import { Underline } from '@tiptap/extension-underline';
import { Placeholder } from '@tiptap/extension-placeholder';
import { TextAlign } from '@tiptap/extension-text-align';

// Components Imports
// eslint-disable-next-line import/no-unresolved
import CustomIconButton from '@core/components/mui/IconButton';

// Context Imports
import { useSociologicalData } from './AddQuizContext'; // Importar o contexto

// Style Imports
// eslint-disable-next-line import/no-unresolved
import '@/libs/styles/tiptapEditor.css';

const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 pbs-5 pbe-4 pli-5">
      <CustomIconButton
        {...(editor.isActive('bold') && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className="ri-bold text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('underline') && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className="ri-underline text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('italic') && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className="ri-italic text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className="ri-strikethrough text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'left' }) && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className="ri-align-left text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'center' }) && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i className="ri-align-center text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'right' }) && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i className="ri-align-right text-textSecondary" />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        variant="outlined"
        size="small"
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i className="ri-align-justify text-textSecondary" />
      </CustomIconButton>
    </div>
  );
};

const QuizDescription = () => {
  const {
    quizName,
    setQuizName,
    quizIdentifier,
    setQuizIdentifier,
    quizDescription,
    setQuizDescription,
  } = useSociologicalData(); // Acessando o contexto

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Escreva uma descrição aqui...',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Underline,
    ],
    content: quizDescription, // Preencher o conteúdo inicial com o estado global
    onUpdate: ({ editor }) => {
      setQuizDescription(editor.getHTML()); // Atualizar o estado global com a descrição
    },
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
  });

  return (
    <Card>
      <CardHeader title="Informações do Quiz" />
      <CardContent>
        <Grid container spacing={5} className="mbe-5">
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Nome do Quiz"
              placeholder="Conhecimentos Gerais"
              value={quizName} // Pegar o valor do estado global
              onChange={(e) => setQuizName(e.target.value)} // Atualizar o estado global
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Identificador"
              placeholder="FXSK123U"
              value={quizIdentifier} // Pegar o valor do estado global
              onChange={(e) => setQuizIdentifier(e.target.value)} // Atualizar o estado global
            />
          </Grid>
        </Grid>
        <Typography className="mbe-1">Descrição (Opcional)</Typography>
        <Card className="p-0 border shadow-none">
          <CardContent className="p-0">
            <EditorToolbar editor={editor} />
            <Divider className="mli-5" />
            <EditorContent editor={editor} className="bs-[135px] overflow-y-auto flex" />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default QuizDescription;
