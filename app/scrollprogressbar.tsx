import React, { useState, useEffect } from 'react';
import ScrollProgressBar from 'react-scroll-progress-bar';
import './Navbar.css';

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navBackground !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [navBackground]);

  return (
    <nav className={`nav ${navBackground ? 'navBackground' : ''}`}>
      <ScrollProgressBar height='10px' bgcolor='black' />
      <div className='nav-content'>{"Your Navbar items here"}</div>
    </nav>
  );
};

export default Navbar;