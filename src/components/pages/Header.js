import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            JOVI Handmade
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/product'
                className='nav-links'
                onClick={closeMobileMenu}>
                PRODUCT
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
