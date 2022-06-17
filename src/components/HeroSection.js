import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>手作的溫度</h1>
      <p>還在等什麼？</p>
      <div className='hero-btns'>
        WATCH TRAILER <i className='fa fa-play-circle' />
      </div>
    </div>
  );
};

export default HeroSection;
