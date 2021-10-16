import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';

import App from './App';

let theme = createTheme({
  palette: {
    primary: {
      main: "#F23E16"
    },

    secondary: {
      main: "#F2AA52"
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  , document.getElementById('root'));