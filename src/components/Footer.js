import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-description'>
        <p className='footer-description-heading'>πζεζΊ«ζγζΊ«ζζδ½π</p>
        <p className='footer-subscription-text'>ζ­‘θΏθ¨ι±γθΏ½θΉ€γεδΊ«</p>
      </section>
      <div className='footer-links'>
        <h2>JoVi</h2>
        <Link to='/'>Home</Link>
        <Link to='/product'>η’ε</Link>
        <Link to='/about'>ιζΌζε</Link>
      </div>
      <section className='social-media'>
        <div className='social-icons'>
          <Link
            class='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'>
            <i class='fab fa-facebook-f' />
          </Link>
          <Link
            class='social-icon-link instagram'
            to='/'
            target='_blank'
            aria-label='Instagram'>
            <i class='fab fa-instagram' />
          </Link>
          <Link
            class='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Youtube'>
            <i class='fab fa-youtube' />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
