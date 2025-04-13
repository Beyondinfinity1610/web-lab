import React, { createContext, useState } from 'react';

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create the provider component
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
