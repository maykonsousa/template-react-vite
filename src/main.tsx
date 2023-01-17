import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { WrappedApp } from './App';
import { GlobalStyle } from './styles/global';
import { Default } from './styles/themes/Default.theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Default}>
      <WrappedApp />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);
