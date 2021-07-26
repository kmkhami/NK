import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'; 

function App() {
  const [data, setData] = useState(null);
  const [productList, setProductList] = useState(null); 
  

  useEffect(() => {
    const commerce_api_key = process.env.COMMERCE_API_KEY; 
    const commerce_base_url = 'https://api.chec.io/v1'; 

    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    axios.get(commerce_base_url + '/products', { 
      headers: {
        'X-Authorization': commerce_api_key
      }
    })
      .then((productList) => setProductList(productList.message))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{!productList ? "Loading Products...": productList} </p>
      </header>
    </div>
  );
}

export default App;