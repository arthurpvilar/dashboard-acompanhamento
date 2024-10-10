'use client'

// React Imports
import { useState } from 'react'
import type { SyntheticEvent } from 'react'

// MUI Imports
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'

import type { QuizDetailsDto } from '@/types/apps/quizTypes'

// Styled component for Accordion component
export const Accordion = styled(MuiAccordion)({
  boxShadow: 'none !important',
  border: '1px solid var(--mui-palette-divider) !important',
  borderRadius: '0 !important',
  overflow: 'hidden',
  background: 'none',
  '&:not(:last-of-type)': {
    borderBottom: '0 !important'
  },
  '&:before': {
    display: 'none'
  },
  '&.Mui-expanded': {
    margin: 'auto'
  },
  '&:first-of-type': {
    borderTopLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderTopRightRadius: 'var(--mui-shape-borderRadius) !important'
  },
  '&:last-of-type': {
    borderBottomLeftRadius: 'var(--mui-shape-borderRadius) !important',
    borderBottomRightRadius: 'var(--mui-shape-borderRadius) !important'
  }
})

// Styled component for AccordionSummary component
export const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  marginBottom: -1,
  padding: theme.spacing(3, 5),
  transition: 'none',
  backgroundColor: 'var(--mui-palette-action-hover)',
  borderBottom: '1px solid var(--mui-palette-divider) !important',
  '&.Mui-expanded': {
    '& .MuiAccordionSummary-expandIconWrapper': {
      transform: 'rotate(90deg)'
    }
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transform: theme.direction === 'rtl' && 'rotate(180deg)'
  }
}))

// Styled component for AccordionDetails component
export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `${theme.spacing(4, 3)} !important`,
  backgroundColor: 'var(--mui-palette-background-paper)'
}))

const QuizDetailsSideBar = ({ quizData }: { quizData?: QuizDetailsDto }) => {
  // State to manage expanded accordion
  const [expanded, setExpanded] = useState<number | false>(1)

  const handleChange = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  function formatTime(milliseconds: number): string {
    const seconds = Math.floor((milliseconds / 1000) % 60)
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60)
    const hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24)

    if (hours > 0) {
      return `${hours}:${minutes}:${seconds} Horas`
    } else if (minutes > 0) {
      return `${minutes}:${seconds} Minutos`
    } else {
      return `${seconds} Segundos`
    }
  }

  return (
    <>
      {/* Accordion for general statistics */}
      <Accordion expanded={expanded === 1} onChange={handleChange(1)}>
        <AccordionSummary
          id='panel-header-1'
          expandIcon={<i className='ri-arrow-right-s-line text-2xl text-textSecondary' />}
          aria-controls='panel-content-1'
        >
          <div>
            <Typography variant='h5'>Estatísticas Complementares</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <div className='flex flex-col gap-4'>
            <Typography>Total de Tentativas: {quizData?.totalAttempts}</Typography>
            <Typography>Taxa de Conclusão: {quizData?.completionRate}%</Typography>
            <Typography>Tempo Médio de Conclusão: {formatTime(quizData?.averageCompletionTime as number)}</Typography>
            <Typography>Peso Médio: {quizData?.averageWeight}</Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default QuizDetailsSideBar
