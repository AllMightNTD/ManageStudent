import { Box, Typography, styled } from '@mui/material'
import DashboardItem from './DashboardItem'
import User from '../../../public/image/user_dashboard.png'
import Bank from '../../../public/image/bank_dashboard.png'
import StudentDashboard from '../../../public/image/student_dashboard.png'
import { ButtonCommon } from '../../components/Button'
import Radio from '../../../public/image/radio.png'
const Dashboard: React.FC = () => {
  return (
    <DashboardM>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '36px',
          color: '#3D3D3D'
        }}
      >
        Welcome to your dashboard, Udemy school
      </Typography>
      <Typography
        sx={{
          fontWeight: '600',
          fontSize: '24px',
          color: '#3D3D3D',
          marginTop: '24px',
          marginLeft: '80px'
        }}
      >
        Uyo/school/@teachable.com
      </Typography>
      <Box sx={{ padding: '68px 90px', display: 'flex', flexDirection: 'column' }}>
        <DashboardItem
          icon={User}
          label="Add other admins"
          description="Create rich course content and coaching products for your students.
        When you give them a pricing plan, they’ll appear on your site!"
        />
        <DashboardItem
          icon={Bank}
          label="Add classes "
          description="Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!"
        />
        <DashboardItem
          icon={StudentDashboard}
          label="Add other admins"
          description="Create rich course content and coaching products for your students.
        When you give them a pricing plan, they’ll appear on your site!"
        />
      </Box>
      <ButtonCommon
        variant="contained"
        sx={{
          borderRadius: '30px',
          padding: '22px',
          backgroundColor: '#152259',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          height: '60px',
          width: '180px',
          float:'right'
        }}
      >
        <img src={Radio} />
        Support
      </ButtonCommon>
    </DashboardM>
  )
}

const DashboardM = styled(Box)({
  padding: '78px 144px'
})
export { Dashboard }
