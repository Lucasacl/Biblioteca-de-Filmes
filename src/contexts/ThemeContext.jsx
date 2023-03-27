import { createContext, ReactNode, useReducer } from "react";
import { reducer } from "../reducers/appReducer";

export const AppContext = createContext();

const ThemeProvider = ({ children }) => {
  const initialState = {
    darkMode: true,
  };

  const [appState, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...appState,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ThemeProvider;
