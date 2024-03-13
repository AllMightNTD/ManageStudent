import { Box, Stack, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import SideBarM from './Sidebar/Sidebar'
import { Header } from './Header'

const Layout: React.FC = () => {
  return (
    <Box display="flex">
      <SideBarM />
      <Main>
         <Header/>
        <Outlet />
      </Main>
    </Box>
  )
}

const Main = styled('div')({
  minHeight: '100vh',
  width: 'calc(100% - 260px)'
})

export { Layout }
