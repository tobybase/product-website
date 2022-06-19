import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-description'>
        <p className='footer-description-heading'>👋手做溫暖、問暖手作👋</p>
        <p className='footer-subscription-text'>歡迎訂閱、追蹤、分享</p>
      </section>
      <div className='footer-links'>
        <h2>JoVi</h2>
        <Link to='/sign-up'>Home</Link>
        <Link to='/'>產品</Link>
        <Link to='/'>關於我們</Link>
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
