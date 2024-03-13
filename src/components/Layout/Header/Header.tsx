import { Box, Button, styled } from '@mui/material'
import React from 'react'
import Bell from '../../../../public/image/bell.png'
import { grey } from '../../../styles/color'
import { ButtonCommon } from '../../Button'
const Header: React.FC = () => {
  return (
    <HeaderM>
      <Box sx={{...BellItem}}>
        <Button>
          <img src={Bell} />
        </Button>
        <ButtonCommon sx={{ ...styleButton }} variant="contained">
          Log out
        </ButtonCommon>
      </Box>
    </HeaderM>
  )
}

const HeaderM = styled(Box)({
  padding:'24px',
  height: '95px',
  width: '100%',
  backgroundColor: grey[150],
  display: 'flex',
  justifyContent:'flex-end'
})

const BellItem = {
  display:'flex',
  alignItems: 'center',
  gap:'48px',
  marginRight:'127px'
}

const styleButton = {
  borderRadius: '8px',
  backgroundColor: '#509CDB'
}
export { Header }

