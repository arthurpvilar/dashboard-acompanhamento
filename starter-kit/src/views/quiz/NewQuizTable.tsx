'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import { createColumnHelper, flexRender, useReactTable, getCoreRowModel, getFilteredRowModel, FilterFn } from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import { getQuizzes, deleteQuiz } from '@/libs/quiz/handlers';
import type { Quiz } from '@/types/apps/quizTypes';
import tableStyles from '@core/styles/table.module.css';
import CustomAvatar from '@core/components/mui/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import classNames from 'classnames';
import CustomIconButton from '@core/components/mui/IconButton';
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import OptionMenu from '@/@core/components/option-menu';
import { useImageVariant } from '@core/hooks/useImageVariant'
import type { Mode } from '@core/types'

type QuizWithProgress = Quiz & {
  progressValue?: string;
};

type Props = {
  mode: Mode
}

const columnHelper = createColumnHelper<QuizWithProgress>();


const QuizTable = (props:Props) => {
  const [data, setData] = useState<Quiz[]>([]);
  const [quizCode, setQuizCode] = useState<string>('');
  const [quizId, setQuizId] = useState<number>(0);
  const [userRole, setUserRole] = useState<string>(''); 
  const router = useRouter();
  const { mode} = props

  useEffect(() => {
    const fetchUserRole = () => {
      const role = 'admin'; 
      setUserRole(role);
    };

    fetchUserRole();

    const fetchData = async () => {
      const quizzes = getQuizzes();
      // Ajuste para garantir que totalQuiz esteja definido
      const quizzesWithTotal = quizzes.map(quiz => ({
        ...quiz,
        totalQuiz: quiz.questions ? quiz.questions.length : 0,
      }));
      setData(quizzesWithTotal);
    };
    fetchData();
  }, []);

const calculateCompletionPercentage = (quiz: Quiz) => {
  const totalQuestions = quiz.totalQuiz;
  const answeredQuestions = quiz.questions.filter(q => q.answer !== undefined && q.answer !== null && q.answer !== '').length;

  const completionPercentage = totalQuestions > 0 
    ? (answeredQuestions / totalQuestions) * 100
    : 0;

  return {
    completionPercentage: Math.min(completionPercentage, 100),
    completedQuestions: answeredQuestions,
  };
};

  const handleQuizData = (quizCode: string) => {
    const quiz = data.find((q) => q.identifier === quizCode);

    setQuizCode(quizCode);

    if (quiz) {
      setQuizId(quiz.id);
    } else {
      setQuizId(0);
    }
  };

  const handleEdit = (id: number) => {
    window.location.href = `/quiz/edit/${id}`;
  };

  const handleDelete = (id: number) => {
    deleteQuiz(id);
    setData(getQuizzes());
  };

  const handleReportDownload = (id: number) => {
    // Implementação para download do relatório
  };

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Nome do Quiz',
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <CustomAvatar variant="rounded" skin="light" color={row.original.color}>
              {row.original.logo ? (
                <img src={row.original.logo} alt="Logo do Quiz" style={{ width: '100%', height: '100%' }} />
              ) : (
                <i className="text-[28px] ri-image-line" />
              )}
            </CustomAvatar>
            <div className="flex flex-col gap-0.5">
              <Typography
                component={Link}
                href={`/quiz-details/${row.original.id}`}
                className="font-medium hover:text-primary"
                color="text.primary"
              >
                {row.original.title}
              </Typography>
              <div className="flex items-center gap-2">
                <CustomAvatar src={row.original.image} size={22} />
                <Typography variant="body2">{row.original.owner.fullName}</Typography>
              </div>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('identifier', {
        header: 'Código',
        cell: ({ row }) => (
          <Typography className="font-medium" color="text.primary">
            {row.original.identifier}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('progressValue', {
        header: 'Percentual Médio de Conclusão',
        sortingFn: (rowA, rowB) => {
          const { completionPercentage: completionA } = calculateCompletionPercentage(rowA.original);
          const { completionPercentage: completionB } = calculateCompletionPercentage(rowB.original);

          return completionA - completionB;
        },
        cell: ({ row }) => {
          const { completionPercentage, completedQuestions } = calculateCompletionPercentage(row.original);
          return (
            <div className="flex items-center gap-4 min-is-48">
              <Typography className="font-medium" color="text.primary">
                {`${Math.floor(completionPercentage)}%`}
              </Typography>
              <LinearProgress
                color={row.original.color}
                value={Math.floor(completionPercentage)}
                variant="determinate"
                className="is-full bs-2"
              />
              <Typography variant="body2">{`${completedQuestions}/${row.original.totalQuiz}`}</Typography>
            </div>
          );
        }
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Ações',
        cell: ({ row }) =>
          userRole === 'admin' && (
            <div className='flex items-center justify-between gap-5'>
              <div className='flex items-center gap-1.5 ml-auto pr-4'>
                <OptionMenu
                  iconButtonProps={{ size: 'medium' }}
                  iconClassName='text-[22px]'
                  options={[
                    {
                      text: 'Relatório',
                      icon: 'ri-download-line',
                      menuItemProps: {
                        onClick: () => handleReportDownload(row.original.id),
                        className: 'flex items-center is-full gap-2 plb-2 pli-4'
                      }
                    },
                    {
                      text: 'Editar',
                      icon: 'ri-edit-box-line',
                      menuItemProps: {
                        onClick: () => handleEdit(row.original.id),
                        className: 'flex items-center is-full gap-2 plb-2 pli-4'
                      }
                    },
                    {
                      text: 'Deletar',
                      icon: 'ri-delete-bin-7-line text-[22px]',
                      menuItemProps: {
                        onClick: () => handleDelete(row.original.id),
                        className: 'flex items-center gap-2'
                      }
                    }
                  ]}
                />
              </div>
            </div>
          ),
        enableSorting: false
      })
    ],
    [userRole]
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: (row, columnId, value, addMeta) => {
        const itemRank = rankItem(row.getValue(columnId), value);
        addMeta({ itemRank });
        return itemRank.passed;
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const lightIllustration = '/images/illustrations/hand-with-bulb-light.png'
  const darkIllustration = '/images/illustrations/hand-with-bulb-dark.png'

  const theme = useTheme();
  
  const leftIllustration = useImageVariant(mode, lightIllustration, darkIllustration)
  return (
    <>
      <Card className='relative flex justify-center'>
        <img src={leftIllustration} className='max-md:hidden absolute max-is-[100px] top-12 start-12' />
        <div className='flex flex-col items-center gap-4 max-md:pli-5 plb-12 md:is-1/2'>
          <Typography variant='h4' className='text-center md:is-3/4'>
            Seu conhecimento, diversão e aprendizado. <span className='text-primary'>Tudo isso em um só lugar.</span>
          </Typography>
          <Typography className='text-center'>
            Aprimore seus conhecimentos respondendo quizzes educativos em áreas de conhecimentos gerais, tecnologia,
            programação e ciência etc.
          </Typography>
          <div className='flex items-center gap-4 max-sm:is-full'>
            <TextField
              placeholder='Coloque o código de um Quiz para iniciar!'
              value={quizCode}
              onChange={(e) => handleQuizData(e.target.value)}
              size='small'
              className='sm:is-[350px] max-sm:flex-1'
            />
            <CustomIconButton
              variant='contained'
              color='primary'
              onClick={() => quizId !== 0 && router.push(`/quiz/start/${quizId}`)}
            >
              <i className='ri-search-2-line' />
            </CustomIconButton>
          </div>
        </div>
        <img
          src='/images/illustrations/9.png'
          className={classNames('max-md:hidden absolute max-bs-[180px] bottom-0 end-0', {
            'scale-x-[-1]': theme.direction === 'rtl'
          })}
        />
      </Card>

      <Card>
        <CardHeader
          title="Quizzes cadastrados no sistema"
          action={
            userRole === 'admin' && (
              <Button variant="contained" color="primary" onClick={() => window.location.href = '/quiz/create'}>
                Criar Quiz
              </Button>
            )
          }
          className="flex-wrap gap-4"
        />
        <div className="overflow-x-auto">
          <table className={tableStyles.quizTable}>
            <thead>
              {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th key={header.id}>{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={5}
          page={0}
          onPageChange={() => {}}
        />
      </Card>
    </>
  );
};

export default QuizTable;
