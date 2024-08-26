// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

// Type Imports
import type { UsersType } from '@/types/apps/userTypes'

const TableFilters = ({ setData, tableData }: { setData: (data: UsersType[]) => void; tableData?: UsersType[] }) => {
  // States
  const [status, setStatus] = useState<UsersType['status']>('')

  useEffect(() => {
    const filteredData = tableData?.filter(user => {
      if (status && user.status !== status) return false

      return true
    })

    setData(filteredData || [])
  }, [status, tableData, setData])

  return (
    <CardContent>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id='status-select'>Selecione o Status</InputLabel>
            <Select
              fullWidth
              id='select-status'
              label='Selecione o Status'
              value={status}
              onChange={e => setStatus(e.target.value)}
              labelId='status-select'
              inputProps={{ placeholder: 'Selecione o Status' }}
            >
              <MenuItem value=''>Selecione o Status</MenuItem>
              <MenuItem value='Pendente'>Ativação Pendente</MenuItem>
              <MenuItem value='Ativo'>Ativo</MenuItem>
              <MenuItem value='Inativo'>Inativo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </CardContent>
  )
}

export default TableFilters
