import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import ProductsContext from "./contexts/ProductsContext";
import Cart from "./components/Cart";
import "./App.css";

let defaultProducts = [];

function App() {
  const [productsList, setProductsList] = useState(defaultProducts);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductsList(json.slice(0, 10));
        defaultProducts = json;
      });
  }, []);

  const addToCart = (prop) => {
    setCartProducts([...cartProducts, prop]);
  };

  return (
    <ProductsContext.Provider value={{ addToCart }}>
      <div className="App">
        <Cart cartProducts={cartProducts} />
        <ProductList products={productsList} />
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
