import React from 'react';
import './Card.css';

const Card = ({ imageUrl, title, body }) => {
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='card-title'>
        <h3>{title}</h3>
      </div>
      <div className='card-body'>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default Card;
