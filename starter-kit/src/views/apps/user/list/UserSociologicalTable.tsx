/* eslint-disable import/no-unresolved */
'use client'

// React Imports
import { useState, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import TablePagination from '@mui/material/TablePagination'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'
import type { ColumnDef, FilterFn } from '@tanstack/react-table'
import type { RankingInfo } from '@tanstack/match-sorter-utils'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { Locale } from '@configs/i18n'
import type { BackEndUsersType } from '@/types/apps/userTypes'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'
import tableStyles from '@core/styles/table.module.css'
import TableSociologicalUserFilters from './TableSociologicalUserFilters'
import AddSociologicalUserDrawer from './AddSociologicalUserDrawer'

// Util Imports
import { getInitials } from '@/utils/getInitials'
import { getLocalizedUrl } from '@/utils/i18n'

// Actions Import
import { deleteUserOnServer } from '@/app/server/actions'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

type BackEndUsersTypeWithAction = BackEndUsersType & {
  action?: string
}

type UserStatusType = {
  [key: string]: ThemeColor
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value)

  addMeta({ itemRank })

  return itemRank.passed
}

const userStatusObj: UserStatusType = {
  Ativo: 'success',
  Pendente: 'warning',
  Inativo: 'secondary'
}

// Column Definitions
const columnHelper = createColumnHelper<BackEndUsersTypeWithAction>()

const UserSociologicalTable = ({ tableData }: { tableData?: BackEndUsersType[] }) => {
  const [addUserOpen, setAddUserOpen] = useState(false)
  const [rowSelection, setRowSelection] = useState({})
  const [data, setData] = useState(tableData || [])
  const [filteredData, setFilteredData] = useState(data)
  const [globalFilter, setGlobalFilter] = useState('')

  const { lang: locale } = useParams()

  const columns = useMemo<ColumnDef<BackEndUsersTypeWithAction, any>[]>(
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
      columnHelper.accessor('fullName', {
        header: 'User',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            {getAvatar({ avatar: row.original.avatar, fullName: row.original.fullName })}
            <div className='flex flex-col'>
              <Typography className='font-medium' color='text.primary'>
                {row.original.fullName}
              </Typography>
              <Typography variant='body2'>{row.original.username}</Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: ({ row }) => <Typography>{row.original.email}</Typography>
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ row }) => (
          <div className='flex items-center gap-3'>
            <Chip
              variant='tonal'
              label={row.original.status}
              size='small'
              color={userStatusObj[row.original.status]}
              className='capitalize'
            />
          </div>
        )
      }),
      columnHelper.accessor('action', {
        header: () => <div className='flex justify-end gap-1 ml-auto pr-14'>Action</div>,
        cell: ({ row }) => (
          <div className='flex items-center'>
            <div className='flex items-center gap-1.5 ml-auto pr-4'>
              <IconButton
                onClick={async () => {
                  const accessToken = localStorage.getItem('accessToken') as string
                  const userId = row.original.index as string
                  const response = await deleteUserOnServer(accessToken, userId)

                  if (response.success) {
                    setData(data?.filter(user => user.index !== userId))
                  } else {
                    console.error('Erro ao excluir usuário:', response.message)
                  }
                }}
              >
                <i className='ri-delete-bin-7-line text-textSecondary' />
              </IconButton>
              <IconButton>
                <Link href={getLocalizedUrl('/apps/user/view', locale as Locale)} className='flex'>
                  <i className='ri-eye-line text-textSecondary' />
                </Link>
              </IconButton>
              <OptionMenu
                iconButtonProps={{ size: 'medium' }}
                iconClassName='text-textSecondary'
                options={[
                  {
                    text: 'Download',
                    icon: 'ri-download-line',
                    menuItemProps: { className: 'flex items-center gap-2 text-textSecondary' }
                  },
                  {
                    text: 'Editar',
                    icon: 'ri-edit-box-line',
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
    [data, locale]
  )

  const table = useReactTable({
    data: filteredData as BackEndUsersType[],
    columns,
    filterFns: { fuzzy: fuzzyFilter },
    state: { rowSelection, globalFilter },
    initialState: { pagination: { pageSize: 10 } },
    enableRowSelection: true,
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  const getAvatar = (params: Pick<BackEndUsersType, 'avatar' | 'fullName'>) => {
    const { avatar, fullName } = params

    return avatar ? (
      <CustomAvatar src={avatar} skin='light' size={34} />
    ) : (
      <CustomAvatar skin='light' size={34}>
        {getInitials(fullName as string)}
      </CustomAvatar>
    )
  }

  return (
    <>
      <Card>
        <CardHeader title='Filtros' />
        <TableSociologicalUserFilters setData={setFilteredData} tableData={data} />
        <Divider />
        <div className='flex justify-between p-5 gap-4 flex-col items-start sm:flex-row sm:items-center'>
          <Button
            color='secondary'
            variant='outlined'
            startIcon={<i className='ri-upload-2-line text-xl' />}
            className='is-full sm:is-auto'
          >
            Exportar
          </Button>
          <div className='flex items-center gap-x-4 is-full gap-4 flex-col sm:is-auto sm:flex-row'>
            <Button variant='contained' onClick={() => setAddUserOpen(!addUserOpen)} className='is-full sm:is-auto'>
              + Criar novo Usuário
            </Button>
          </div>
        </div>
        <div className='overflow-x-auto'>
          <table className={tableStyles.table}>
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
            <tbody>
              {table.getFilteredRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                    Nenhum dado disponível
                  </td>
                </tr>
              ) : (
                table
                  .getRowModel()
                  .rows.slice(0, table.getState().pagination.pageSize)
                  .map(row => (
                    <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component='div'
          className='border-bs'
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={table.getState().pagination.pageSize}
          page={table.getState().pagination.pageIndex}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' }
          }}
          onPageChange={(_, page) => {
            table.setPageIndex(page)
          }}
          onRowsPerPageChange={e => table.setPageSize(Number(e.target.value))}
        />
      </Card>
      <AddSociologicalUserDrawer
        open={addUserOpen}
        handleClose={() => setAddUserOpen(!addUserOpen)}
        userData={data}
        setData={setData}
      />
    </>
  )
}

export default UserSociologicalTable
