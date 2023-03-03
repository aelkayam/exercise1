import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsContext from "./contexts/ProductsContext";
import { Navbar } from "./components/Navbar/Navbar";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";
import "./App.css";

let defaultProducts = [];
let defaultCartProducts = [];

function App() {
  const [productsList, setProductsList] = useState(defaultProducts);
  const [cartProducts, setCartProducts] = useState(defaultCartProducts);

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
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </div>
    </ProductsContext.Provider>
  );
}

export default App;
