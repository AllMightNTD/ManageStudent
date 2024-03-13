import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound: React.FC = () => {
  return (
    <Box sx={{ ...container }}>
      <Box sx={{...notfound}}>
        <h3>404 page not found</h3>
        <Typography>We are sorry but the page you are looking for does not exist.</Typography>
        <a href='/dashboard'>Return to home</a>
      </Box>
    </Box>
  )
}
const container = {
    width:'100%',
    minHeight:'100vh',
    position:'relative'
}

const notfound = {
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign:'center'
}

export { NotFound }
