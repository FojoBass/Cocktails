import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Navbar = () => {
  // HOOKS
  const { theme, setTheme } = useGlobalContext();
  // useEffects
  // set html class
  useEffect(() => {
    document.documentElement.className = theme + '-mode';
  }, [theme]);

  // FUNCTIONS
  function handleTheme() {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  }
  return (
    <nav id='nav-bar'>
      <article className='center'>
        <div className='logo'>
          <Link to='/'>
            <span>c</span>ock<span>T</span>ails
          </Link>
        </div>

        <div className='nav-links'>
          <Link to='/'>home</Link>
          <Link to='/about'>about</Link>
        </div>

        <div className='theme-btn'>
          <button
            className={theme === 'light' ? 'light' : 'dark'}
            onClick={handleTheme}
          >
            {theme === 'light' ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </article>
    </nav>
  );
};

export default Navbar;

// LOCAL STORAGE FUNCTION TO THEME
