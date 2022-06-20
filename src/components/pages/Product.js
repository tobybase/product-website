import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <>
      <div className='product-container'>
        <h3>Product</h3>
        <div className='product-item'>
          <img src='images/vest.jpg' alt='product' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, incidunt suscipit sed porro reprehenderit molestiae?
          </p>
        </div>
        <div className='product-item'>
          <img src='images/overalls.jpg' alt='product' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, incidunt suscipit sed porro reprehenderit molestiae?
          </p>
        </div>
        <div className='product-item'>
          <img src='images/shorts-1.jpg' alt='product' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, incidunt suscipit sed porro reprehenderit molestiae?
          </p>
        </div>
        <div className='product-item'>
          <img src='images/shorts-2.jpeg' alt='product' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, incidunt suscipit sed porro reprehenderit molestiae?
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
