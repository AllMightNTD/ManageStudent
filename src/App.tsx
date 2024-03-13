import { CssBaseline, ThemeProvider } from '@mui/material'
import { defaultTheme } from './styles/theme'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './lib/api/react-query'
import { ToastContainer } from 'react-toastify'
import { Router } from './router'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <CssBaseline/>
        <ToastContainer />
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
