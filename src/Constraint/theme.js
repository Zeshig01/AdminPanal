import React from 'react';
import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#0060ef', // Primary color
    },
    secondary: {
      main: '#F3F4F6', // Secondary color
    },
    text: {
      primary: '#000000', // Primary text color
      secondary: '#F3F4F6', // Secondary text color
    },
  },
  typography: {
    fontFamily: 'Rubik, sans-serif', // Base font family

    h1: {
      fontSize: '1.5rem',
      fontWeight: 700,
      margin: '16px 0',
      '@media (max-width:1200px)': {
        fontSize: '3.5rem', // For large screens below 1200px
      },
      '@media (max-width:900px)': {
        fontSize: '2rem', // For medium screens below 900px
        fontWeight: 600,
      },
      '@media (max-width:600px)': {
        fontSize: '2rem', // For small screens below 600px
        fontWeight: 600,
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 450,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 300,
    },
    button: {
      textTransform: 'none', // Prevent buttons from being uppercase
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Customize button border radius
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          margin: '16px 0',
        },
        h2: {
          margin: '16px 0',
        },
        // Add more overrides as needed
      },
    },
  },
});

export default theme;