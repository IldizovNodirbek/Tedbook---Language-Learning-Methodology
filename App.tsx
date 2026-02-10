
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || Theme.LIGHT;
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    if (theme === Theme.DARK) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('bg-gray-950');
      document.body.classList.remove('bg-white');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.add('bg-white');
      document.body.classList.remove('bg-gray-950');
    }
  }, [theme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === Theme.DARK ? 'dark text-white' : 'text-gray-900'}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <LandingPage theme={theme} />
      </main>
      <Footer theme={theme} />
    </div>
  );
};

export default App;
