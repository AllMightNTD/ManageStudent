import { SvgIconProps } from '@mui/material/SvgIcon'
import DashboardIcon from '../../../../public/image/home-2.png'
import TeacherIcon from '../../../../public/image/teacher.png'
import Billing from '../../../../public/image/bank.png'
import ChatSquare from '../../../../public/image/chart-square.png'
import Setting from '../../../../public/image/Vector.png'
export type sidebarItem = {
  label: string
  path?: string
  children?: sidebarItem[]
  Icon?: (props: SvgIconProps) => JSX.Element
}

const sidebar: sidebarItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    Icon: () => <img src={DashboardIcon} />,
  },
  {
    label: 'Teacher',
    Icon: () => <img src={DashboardIcon} />,
    children: [
      {
        label: 'Setting Teacher',
        Icon: () => <img src={DashboardIcon} />,
        path:'/teacher'
      }
    ]
  },
  {
    label: 'Students/ classes',
    path: '/student-classes',
    Icon: () => <img src={TeacherIcon} />
  },
  {
    label: 'Billing',
    path: '/billing',
    Icon: () => <img src={Billing} />
  },
  {
    label: 'Setting and profile',
    path: '/setting',
    Icon: () => <img src={Setting} />
  },
  {
    label: 'Exams',
    path: '/exam',
    Icon: () => <img src={ChatSquare} />
  }
]

export { sidebar }
