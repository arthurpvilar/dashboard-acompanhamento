/* eslint-disable import/no-unresolved */
'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import LinearProgress from '@mui/material/LinearProgress'
import TablePagination from '@mui/material/TablePagination'
import type { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Checkbox from '@mui/material/Checkbox'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import OptionMenu from '@core/components/option-menu'

// Type Imports
import type { Locale } from '@configs/i18n'

import tableStyles from '@core/styles/table.module.css'

import type { Quiz } from '@/types/apps/quizTypes'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

type QuizWithProgress = Quiz & {
  progressValue?: string
  userLength?: number
  action?: string
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({ itemRank })

  return itemRank.passed
}

const DebouncedInput = ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextFieldProps, 'onChange'>) => {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value, onChange, debounce])

  return <TextField {...props} value={value} onChange={e => setValue(e.target.value)} size='small' />
}

// Column Definitions
const columnHelper = createColumnHelper<QuizWithProgress>()

const QuizListTableOld = ({ quizData }: { quizData?: Quiz[] }) => {
  const [data] = useState(...[quizData])
  const [filteredData] = useState(data)
  const [globalFilter, setGlobalFilter] = useState('')
  const { lang: locale } = useParams()

  const columns = useMemo<ColumnDef<QuizWithProgress, any>[]>(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <Checkbox
            {...{
              checked: table.getIsAllRowsSelected(),
              indeterminate: table.getIsSomeRowsSelected(),
              onChange: table.getToggleAllRowsSelectedHandler()
            }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            {...{
              checked: row.getIsSelected(),
              disabled: !row.getCanSelect(),
              indeterminate: row.getIsSomeSelected(),
              onChange: row.getToggleSelectedHandler()
            }}
          />
        )
      },
      columnHelper.accessor('title', {
        header: 'Nome do Quiz',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <CustomAvatar variant='rounded' skin='light' color={row.original.color}>
              <i className={classnames('text-[28px]', row.original.logo)} />
            </CustomAvatar>
            <div className='flex flex-col'>
              <Typography
                component={Link}
                href={getLocalizedUrl(`/quiz-details/${row.original.id}`, locale as Locale)}
                className='font-medium hover:text-primary'
                color='text.primary'
              >
                {row.original.title}
              </Typography>
              <div className='flex items-center gap-2'>
                <CustomAvatar src={row.original.image} size={22} />
                <Typography variant='body2'>{row.original.owner.fullName}</Typography>
              </div>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('identifier', {
        header: 'Código',
        cell: ({ row }) => (
          <Typography className='font-medium' color='text.primary'>
            {row.original.identifier}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('userLength', {
        header: 'Acessos',
        cell: ({ row }) => (
          <div className='flex items-center gap-2'>
            <i className='ri-group-line text-primary' />
            <Typography className='font-medium' color='text.primary'>
              {row.original.users.length}
            </Typography>
          </div>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('progressValue', {
        header: 'Percentual Médio de Conclusão',
        sortingFn: (rowA, rowB) => {
          const percentA = Math.floor((rowA.original.completedQuiz / rowA.original.totalQuiz) * 100) || 0
          const percentB = Math.floor((rowB.original.completedQuiz / rowB.original.totalQuiz) * 100) || 0

          return percentA - percentB
        },
        cell: ({ row }) => (
          <div className='flex items-center gap-4 min-is-48'>
            <Typography className='font-medium' color='text.primary'>{`${Math.floor(
              (row.original.completedQuiz / row.original.totalQuiz) * 100
            )}%`}</Typography>
            <LinearProgress color={'success'} value={Math.floor(100)} variant='determinate' className='is-full bs-2' />
            <Typography variant='body2'>{`2`}</Typography>
          </div>
        )
      }),
      columnHelper.accessor('action', {
        header: () => <div className='flex justify-end gap-1 ml-auto pr-14'>Actions</div>,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        cell: ({ row }) => (
          <div className='flex items-center'>
            <div className='flex items-center gap-1.5 ml-auto pr-4'>
              <IconButton>
                <i className='ri-edit-box-line text-textSecondary' />
              </IconButton>
              <IconButton>
                <i className='ri-delete-bin-7-line text-textSecondary' />
              </IconButton>
              <OptionMenu
                iconButtonProps={{ size: 'medium' }}
                iconClassName='text-textSecondary'
                options={[
                  {
                    text: 'Relatório',
                    icon: 'ri-download-line',
                    menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                  }
                ]}
              />
            </div>
          </div>
        ),
        enableSorting: false
      })
    ],
    [locale]
  )

  const table = useReactTable({
    data: filteredData as Quiz[],
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 5
      }
    },
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  return (
    <Card>
      <CardHeader title='Filtros' />
      <Divider />
      <div className='flex justify-between p-5 gap-4 flex-col items-start sm:flex-row sm:items-center'>
        <Button color='secondary' variant='outlined' startIcon={<i className='ri-upload-2-line text-xl' />}>
          Exportar
        </Button>
        <div className='flex items-center gap-x-4 is-full gap-4 flex-col sm:is-auto sm:flex-row'>
          <DebouncedInput
            value={globalFilter ?? ''}
            onChange={value => setGlobalFilter(String(value))}
            placeholder='Procurar por Quiz'
            className='is-full sm:is-auto'
          />
          <Button
            variant='contained'
            href={getLocalizedUrl(`/quiz/create`, locale as Locale)}
            className='is-full sm:is-auto'
          >
            Criar Quiz
          </Button>
        </div>
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.quizTable}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
                        className={classnames({
                          'flex items-center': header.column.getIsSorted(),
                          'cursor-pointer select-none': header.column.getCanSort()
                        })}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <i className='ri-arrow-up-s-line text-xl' />,
                          desc: <i className='ri-arrow-down-s-line text-xl' />
                        }[header.column.getIsSorted() as 'asc' | 'desc'] ?? null}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  Sem dados disponíveis!
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table.getRowModel().rows.map(row => (
                <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        className='border-bs'
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
        onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
      />
    </Card>
  )
}

export default QuizListTableOld
