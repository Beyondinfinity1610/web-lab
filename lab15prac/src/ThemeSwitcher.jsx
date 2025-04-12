// ThemeSwitcher.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider';

export const ThemeProviderDemo = () => {
  const { theme, toggle } = useContext(ThemeContext);

  const style = {
    background: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#333' : '#eee',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <div style={style}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggle}>Toggle Theme</button>
    </div>
  );
};
