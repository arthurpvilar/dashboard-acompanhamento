import React, { useEffect, useRef, useState } from 'react'

import { Box, IconButton, Slider, styled, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

interface AudioPlayerProps {
  audioUrl: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomSlider = styled(Slider)(({ theme }) => ({
  height: 4,
  '& .MuiSlider-thumb': {
    width: 12,
    height: 12,
    '&:hover, &.Mui-focusVisible': {
      boxShadow: '0px 0px 0px 8px rgba(58, 133, 137, 0.16)'
    }
  }
}))

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(new Audio(audioUrl))

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (audioRef.current && typeof newValue === 'number') {
      const newTime = (newValue / 100) * audioRef.current.duration

      audioRef.current.currentTime = newTime
      setProgress(newValue)
    }
  }

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100

        setProgress(currentProgress)
      }
    }

    const audioElement = audioRef.current

    audioElement.addEventListener('timeupdate', updateProgress)
    audioElement.addEventListener('ended', () => setIsPlaying(false))

    return () => {
      audioElement.removeEventListener('timeupdate', updateProgress)
      audioElement.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <Box display='flex' alignItems='center'>
      <IconButton onClick={handlePlayPause} size='large'>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Typography variant='body2' color='textSecondary' sx={{ marginLeft: '10px', marginRight: '15px' }}>
        {formatTime(audioRef.current?.currentTime || 0)}
      </Typography>
      <Box flexGrow={1} mx={2} sx={{ paddingTop: '7px', paddingRight: '10px' }}>
        <CustomSlider value={progress} onChange={handleSliderChange} />
      </Box>
    </Box>
  )
}

export default AudioPlayer
