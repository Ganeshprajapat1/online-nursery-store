import React, { createContext, useState, useEffect, useCallback } from 'react';
import all_product from '../components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = useCallback(() => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }, [cartItems]);

  useEffect(() => {
    console.log(getTotalCartAmount());
  }, [getTotalCartAmount]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartItems = () => {
    let totalitem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalitem += cartItems[item];
      }
    }
    return totalitem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;