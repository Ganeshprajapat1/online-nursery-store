import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; 
import './Cartitems.css';
import removeicon from '../Assets/cart_cross.png';
import { Link } from 'react-router-dom';

const Cartitems = () => {
  const { getTotalCartAmount,all_product, cartItems, removeCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        const quantity = cartItems[e.id];
        if (quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img src={e.image} alt={e.name} className='carticon-product-icon' />
                <p className='cartitems-name'>{e.name}</p>
                <p className='cartitems-price'>₹.{e.new_price}</p>
                <button className='cartitems-quantity'>{quantity}</button>
                <p className='cartitems-totalprice'>₹.{e.new_price * quantity}</p>
                <img src={removeicon} onClick={() => removeCart(e.id)} alt=""className='remove-icon' />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1> Total Bill</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <Link to="/checkout"><button>PROCEED TO CHECKOUT</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Cartitems;
