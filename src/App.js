import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./contexts/ShopContext";
import { Navbar } from "./components/Navbar/Navbar";
import { ShopPage } from "./pages/ShopPage";
import { CartPage } from "./pages/CartPage";
import "./App.css";

function App() {
  return (
    <ShopContextProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </div>
    </ShopContextProvider>
  );
}

export default App;
