import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

// replace by a function that will create the object from the ShopPage products //
let DefaultCart = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
};

export const ShopContextProvider = (props) => {
  const [productsList, setProductsList] = useState([]);
  const [cartItems, setCartItems] = useState(DefaultCart);

  const setInitialProductsList = (allProducts, initialAmount) => {
    setProductsList(allProducts.slice(0, initialAmount));
  };

  const addToCart = (productID, amount) => {
    setCartItems((prev) => ({
      ...prev,
      [productID]: prev[productID] + amount,
    }));
  };

  const removeFromCart = (productID, amount) => {
    setCartItems((prev) => ({
      ...prev,
      [productID]: prev[productID] + amount,
    }));
  };

  const contextValue = {
    productsList,
    setInitialProductsList,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
