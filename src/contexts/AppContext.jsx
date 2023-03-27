import { createContext, ReactNode, useReducer } from 'react';
import { reducer } from '../reducers/appReducer';

export const AppContext = createContext({});

const AppProvider = ({ children }) => {
  /*  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
 */
  const initialState = {
    darkMode: true,
    //theme: prefersDarkMode ? darkTheme : lightTheme,
  };

  const [appState, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...appState,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
