import React, { useContext, useState, useEffect } from 'react';
import { useFetch } from './useFetch';

// PARAMS
const AppContext = React.createContext();
const nameUrl = 'https://thecocktaildb.com/api/json/v1/1/search.php?s=';
const iniTheme = localStorage.getItem('theme')
  ? JSON.parse(localStorage.getItem('theme'))
  : 'light';

export const AppProvider = ({ children }) => {
  // HOOKS
  const [input, setInput] = useState('');
  const [isError, setIsError] = useState(false);
  const [theme, setTheme] = useState(iniTheme);
  const { items, isLoading } = useFetch(nameUrl + input);
  const [empty, setEmpty] = useState(false);

  // useEffect for local storage
  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        input,
        setInput,
        theme,
        setTheme,
        isError,
        setIsError,
        items,
        empty,
        setEmpty,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
