import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img">
            <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
    <div className="productdisplay-right-price-old">₹.{product.old_price}</div>
    <div className="productdisplay-right-price-new">₹.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        In the garden, every plant plays a unique role in a harmonious symphony of greens. 
        From the towering trees to the smallest ground cover,
         each contributes to the verdant composition, creating a lush and vibrant landscape.
        </div>
       <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default ProductDisplay
