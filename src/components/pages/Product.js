import React from 'react';
import Card from '../UI/Card';
import './Product.css';

const Product = () => {
  return (
    <>
      <div className='product-container'>
        <h3>Product</h3>
        <div className='product-wrapper'>
          <Card
            imageUrl='images/vest.jpg'
            title='Vest'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, incidunt suscipit sed porro reprehenderit molestiae?'
          />
          <Card
            imageUrl='images/overalls.jpg'
            title='Overalls'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, incidunt suscipit sed porro reprehenderit molestiae?'
          />
          <Card
            imageUrl='images/shorts-1.jpg'
            title='Shorts'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, incidunt suscipit sed porro reprehenderit molestiae?'
          />
          <Card
            imageUrl='images/shorts-2.jpeg'
            title='Shorts'
            body='Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, incidunt suscipit sed porro reprehenderit molestiae?'
          />
        </div>
      </div>
    </>
  );
};

export default Product;
