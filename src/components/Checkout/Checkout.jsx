import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Checkout = () => {
  const { getTotalCartAmount, cartItems, removeCart, all_product } = useContext(ShopContext);
  const [userInfo, setUserInfo] = useState({
    name: '',
    address: '',
    pincode: '',
  });

  const handleRemoveItem = (itemId) => {
    removeCart(itemId);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </div>
       
        
      </form>

      <div>
        <h3>Order Summary</h3>
        {Object.keys(cartItems).map((itemId) => {
          const quantity = cartItems[itemId];
          if (quantity > 0) {
            const itemInfo = all_product.find((product) => product.id === Number(itemId));
            return (
              <div key={itemId}>
                <p>{itemInfo.name} - Quantity: {quantity}</p>
                <button onClick={() => handleRemoveItem(itemId)}>Remove</button>
              </div>
            );
          }
          return null;
        })}
        <div>
          <h3>Total: ₹{getTotalCartAmount()}</h3>
        </div>
        <Link to="/">
          <button type="button">
            ORDER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
