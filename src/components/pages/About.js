import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='container'>
      <h3 className='heading'>About Us</h3>
      <img src='images/logo.jpg' alt='' />
      <div className='about-container'>
        <p>
          Jovi Select手作為限量商品
          <br /> 嚴選質感小眾布料 推出月系列商品 季節限定
        </p>
      </div>
    </div>
  );
};

export default About;
