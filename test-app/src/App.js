import React, {useState, useEffect} from 'react'
import ProductList from './components/ProductList';
import './App.css';

let defaultProducts = [];

function App() {
  const [productsList, setProductsList] = useState(defaultProducts);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductsList(json.slice(0,10));
        defaultProducts = json;
      });
  }, []);

  return (
    <div className="App">
      <ProductList products = {productsList}/>
    </div>
  );
}

export default App;
