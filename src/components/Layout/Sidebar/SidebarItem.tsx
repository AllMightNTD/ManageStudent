import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SvgIconProps,
  styled
} from '@mui/material'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface SidebarItemProps {
  label: string
  path?: string
  Icon: React.ElementType<SvgIconProps>
  children?: SidebarItemProps[]
  level?: number
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, path, Icon, children, level = 1 }) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleToggle = () => {
    setOpen(!open)
  }

  const handleLink = () => {
    path && navigate(path)
  }

  return (
    <>
      <ListItemM
        onClick={children ? handleToggle : handleLink}
        sx={{
          backgroundColor: location.pathname === path ? '#509CDB' : 'transparent',
          paddingLeft: `${level * 20}px`,
          borderRadius: '6px',
          '&.MuiListItemButton-root:hover': {
            backgroundColor: '#50a3db'
          }
        }}
      >
        <ListItemIconM>
          <Icon />
        </ListItemIconM>
        <ListItemText primary={label} />
        {children ? ( open ? <ExpandLess /> : <ExpandMore />) : <></>}
      </ListItemM>
      {children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((child, index) => (
              <SidebarItem key={index} {...child} level={level + 1} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

const ListItemM = styled(ListItemButton)({
  display: 'flex',
  alignItems: 'center',
  margin: '4px 0',
  gap: '16px'
})

const ListItemIconM = styled(ListItemIcon)({
  minWidth: 'unset'
})

export default SidebarItem
