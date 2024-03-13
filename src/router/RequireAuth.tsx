import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../lib/hooks'

type RequireAuthProps = {
  children: JSX.Element
}

const RequireAuth: React.VFC<RequireAuthProps> = ({ children }) => {
  const { auth } = useAuth()
  const location = useLocation()
  const token = localStorage.getItem('access_token')

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  return children
}

export { RequireAuth }
