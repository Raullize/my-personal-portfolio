import { useEffect, useState } from 'react';

const useThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Ao montar o componente, verifica se há preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
    
    // Aplica o tema
    applyTheme(darkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyTheme(newDarkMode);
    
    // Salva a preferência
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const applyTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return { darkMode, toggleTheme };
};

export default useThemeToggle; 