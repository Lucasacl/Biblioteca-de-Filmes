import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import React, { useContext } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { AppContext } from './contexts/AppContext';
import { darkTheme, lightTheme } from './theme';

function App() {
  const { darkMode } = useContext(AppContext);

  return (
    <div className="app-container">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </div>
  );
}

export default App;
