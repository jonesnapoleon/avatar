import React, { useState, useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import './App.css'
import { red, blue, yellow, green } from '@material-ui/core/colors';

export default ({ children }) => {
  const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode') === 'dark' ? 'dark' : 'light')

  const theme = responsiveFontSizes(createMuiTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
    palette: {
      primary: themeMode === 'dark' ? red : blue,
      secondary: themeMode === 'dark' ? yellow : green,
      background: themeMode === 'dark' ? { default: 'black' } : { default: 'white' },
      type: themeMode
    },
  }));

  const handleTheme = () => setThemeMode(a => (a === 'dark' ? 'light' : 'dark'))
  useEffect(() => localStorage.setItem('themeMode', themeMode), [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant='h6' color='primary'><a href='https://jonesnapoleon.com' className='author'>Jones Napoleon</a></Typography>
      <IconButton onClick={handleTheme} >
        {themeMode !== 'light' ? (
          <Brightness4 className="nav-icon" />
        ) : (
            <Brightness7 className="nav-icon" />
          )
        }
      </IconButton>
      {children}
    </ThemeProvider>

  )
}