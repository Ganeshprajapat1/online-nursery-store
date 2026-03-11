import React from 'react';
import './Breadcrum.css';
import arrow from '../Assets/Arrow.png';

const Breadcrumbs = (props) => {
  const { product } = props;


  if (!product || !product.category || !product.name) {
    return null; 
  }

  return (
    <div className='breadcrumbs'>
      <span>HOME</span> <img src={arrow} alt="" />
      <span>SHOP</span> <img src={arrow} alt="" />
      <span>{product.category}</span> <img src={arrow} alt="" />
      <span>{product.name}</span>
    </div>
  );
}

export default Breadcrumbs;
