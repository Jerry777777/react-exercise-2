import React from 'react';
import ImageCart from '../assets/cart.png';

const Header = () => (
  <section className="header">
    <h1>
      Store
      <img className="image-cart" alt="product_image" src={ImageCart}></img>
    </h1>
  </section>
);
export default Header;
