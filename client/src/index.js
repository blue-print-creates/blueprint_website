import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { amber } from '@mui/material/colors';

import App from './App';

let theme = createTheme({
  palette: {
    primary: {
      main: "#F23E16"
    },

    secondary: {
      main: "#FF8C00",
      contrastText: "#FFFFFF"
    },
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  , document.getElementById('root'));