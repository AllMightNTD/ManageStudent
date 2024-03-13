import { Box, Button, Grid, Container as MContainer, styled } from '@mui/material'
import { InputCommon } from '../../../components/Input/InputCommon'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserLoginArgs, UserLoginRes } from '../../../lib/types'
import { ButtonCommon } from '../../../components/Button'
import { request } from '../../../lib/api/request'
import { useSetAtom } from 'jotai'
import { tokenAtom } from '../../../lib/atom'
import { useNavigate } from 'react-router-dom'

const validateSchema = yup
  .object({
    email: yup.string().email('Email không hợp lệ').required('Email không được bỏ trống'),
    password: yup.string().required('Mật khẩu không được bỏ trống')
  })
  .required()

const Login: React.FC = () => {
  const {
    control,
    handleSubmit,
    setError: setFormError,
    formState
  } = useForm<UserLoginArgs>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(validateSchema)
  })
  const navigate = useNavigate();
  const setToken = useSetAtom(tokenAtom);
  const onSubmit:SubmitHandler<UserLoginArgs> = async (value) => {
      try {
         const res = await request.post('/user/login', { email:value.email, password:value.password });
         setToken(res.data.access_token);
         navigate('/dashboard')
      } catch (error) {
         console.log(error);         
      }
  }
  return (
    <Container maxWidth="xs">
      <Box component="form" onSubmit={handleSubmit(onSubmit)} width="100%">
        <InputCommon
          type="email"
          sx={{ marginBottom: '16px' }}
          placeholder="Email"
          fullWidth
          control={control}
          name="email"
          label="Email"
        />
        <InputCommon
          type="password"
          placeholder="Password"
          fullWidth
          control={control}
          name="password"
          label="Password"
        />
        <Grid container justifyContent="center" mt={3}>
              <ButtonCommon type='submit' variant='contained'>Sign In</ButtonCommon>
        </Grid>
      </Box>
    </Container>
  )
}
const Container = styled(MContainer)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
})

export { Login }
