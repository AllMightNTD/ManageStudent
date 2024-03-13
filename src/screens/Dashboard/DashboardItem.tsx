import { Box, Typography, styled } from '@mui/material'
import React from 'react'

interface DashboardItemProps {
  icon: any
  label: string
  description: string
}

const DashboardItem: React.FC<DashboardItemProps> = ({ icon, label, description }) => {
  return (
    <Item>
      <img src={icon} alt="Icon" />
      <Box sx={{ maxWidth: '450px' }}>
        <Typography sx={{ fontSize: '24px' }}>{label}</Typography>
        <Typography sx={{ ...Description }}>{description}</Typography>
      </Box>
    </Item>
  )
}

const Item = styled(Box)({
  marginBottom: '50px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '20px'
})

const Description = {
  fontSize: '14px',
  marginTop: '16px',
  wordWrap: 'break-word'
}

export default DashboardItem
