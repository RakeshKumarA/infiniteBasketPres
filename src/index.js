import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import AppRoot from './AppRoot';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <AppRoot />
  </ThemeProvider>,
  document.getElementById('root')
);
