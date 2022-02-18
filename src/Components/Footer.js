import React from 'react';
import { useGlobalContext } from '../context';

function Footer() {
  const { isLoading, isError, empty } = useGlobalContext();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={isLoading || isError || empty ? 'fix' : ''}>
      <div className='footer'>
        copyright &copy; {currentYear} <span>C</span>ock<span>T</span>ails All
        rights reserved
      </div>
    </footer>
  );
}

export default Footer;
