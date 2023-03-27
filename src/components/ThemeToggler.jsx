import { Button } from '@mui/material';
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { useTheme } from 'styled-components';
import Dark from '../icons/Dark';
import Light from '../icons/Light';

const ThemeToggler = () => {
  const { darkMode, dispatch } = useContext(AppContext);
  const theme = useTheme();

  const handleChangeTheme = () => {
    console.log(dispatch({ type: 'THEME_TOGGLE' }));
  };

  return (
    <Button onClick={handleChangeTheme}>
      {darkMode ? (
        <Light fillColor={theme.palette.text.primary} />
      ) : (
        <Dark fillColor={theme.palette.text.primary} />
      )}
    </Button>
  );
};
export default ThemeToggler;
