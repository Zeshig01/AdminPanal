import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'
import App from './App.jsx'
import theme from './Constraint/theme.js'
//

createRoot(document.getElementById('root')).render(
  
  
  <ThemeProvider theme={theme}>
  
  <App />
</ThemeProvider>
)
