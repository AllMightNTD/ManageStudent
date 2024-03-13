import { Box, Drawer, List, Typography } from '@mui/material'
import React from 'react'
import { blue } from '../../../styles/color'
import { sidebar } from './Listsidebar'
import SidebarItem from './SidebarItem'
import Home from '../../../../public/image/logo.png'

const drawerWidth = 300

const SideBarM: React.FC = () => {
  return (
    <Drawer sx={{ ...drawer }} variant="permanent" anchor="left">
      <List
        sx={{
          ...sideBar
        }}
        aria-labelledby="nested-list-subheader"
        component="nav"
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height:'190px',
            gap:'24px',
            borderBottom:'1px solid #FAFAFA'
          }}
        >
          <img src={Home} alt="Home" />
          <Typography>Udemy Inter. school</Typography>
        </Box>
        <Box sx={{padding:'12px 24px'}}>
        {sidebar.map((item, index) => (
          // @ts-ignore
          <SidebarItem key={index} {...item} />
        ))}
        </Box>
      </List>
    </Drawer>
  )
}
const drawer = {
  width: drawerWidth,
  backgroundColor: blue[150]
}
const sideBarHeader = {}
const sideBar = {
  width: drawerWidth,
  bgcolor: blue[150],
  maxWidth: 360,
  minHeight: '100vh',
  color: '#fff',
}
export default SideBarM
