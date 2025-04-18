// src/App.jsx
import React from 'react';
import AppRoutes from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { SettingsProvider } from './contexts/SettingsContext';
import './styles/global.scss';

const App = () => (
  <ThemeProvider>
    <SettingsProvider>
      <AppRoutes />
    </SettingsProvider>
  </ThemeProvider>
);

export default App;
