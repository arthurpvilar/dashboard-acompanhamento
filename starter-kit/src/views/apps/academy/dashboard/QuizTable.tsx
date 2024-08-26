'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import { createColumnHelper, flexRender, useReactTable, getCoreRowModel, getFilteredRowModel, FilterFn } from '@tanstack/react-table';
import { rankItem } from '@tanstack/match-sorter-utils';
import { getQuizzes } from '@/libs/quiz/handlers';
import type { Quiz } from '@/types/apps/quizTypes';
import tableStyles from '@core/styles/table.module.css';
import CustomAvatar from '@core/components/mui/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import classNames from 'classnames'; 

type QuizWithProgress = Quiz & {
  progressValue?: string;
};

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank
  });
  return itemRank.passed;
};

const columnHelper = createColumnHelper<QuizWithProgress>();

const QuizTable = () => {
  const [data, setData] = useState<Quiz[]>([]);
  const { lang: locale } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const quizzes = getQuizzes();
      setData(quizzes);
    };
    fetchData();
  }, []);

  const columns = useMemo(
    () => [
      columnHelper.accessor('title', {
        header: 'Nome do Quiz',
        cell: ({ row }) => (
          <div className="flex items-center gap-4">
            <CustomAvatar variant="rounded" skin="light" color={row.original.color}>
              <i className={classNames('text-[28px]', row.original.logo)} />
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
          if (
            !Math.floor((rowA.original.completedQuiz / rowA.original.totalQuiz) * 100) ||
            !Math.floor((rowB.original.completedQuiz / rowB.original.totalQuiz) * 100)
          )
            return 0;

          return (
            Number(Math.floor((rowA.original.completedQuiz / rowA.original.totalQuiz) * 100)) -
            Number(Math.floor((rowB.original.completedQuiz / rowB.original.totalQuiz) * 100))
          );
        },
        cell: ({ row }) => (
          <div className="flex items-center gap-4 min-is-48">
            <Typography className="font-medium" color="text.primary">
              {`${Math.floor((row.original.completedQuiz / row.original.totalQuiz) * 100)}%`}
            </Typography>
            <LinearProgress
              color={row.original.color}
              value={Math.floor((row.original.completedQuiz / row.original.totalQuiz) * 100)}
              variant="determinate"
              className="is-full bs-2"
            />
            <Typography variant="body2">{`${row.original.completedQuiz}/${row.original.totalQuiz}`}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('title', {
        header: 'Acessos',
        cell: ({ row }) => (
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center gap-1.5 ml-auto pr-4">
              <i className="ri-group-line text-primary" />
              <Typography>{row.original.users.length}</Typography>
            </div>
          </div>
        ),
        enableSorting: false
      })
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <Card>
      <CardHeader
        title="Quizzes cadastrados no sistema"
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
  );
};

export default QuizTable;
