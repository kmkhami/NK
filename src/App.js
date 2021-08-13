import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.js'
import './stylesheets/App.css';
import axios from 'axios'; 

function App() {
  const [localMsg, setLocalMsg] = useState(null);
  const [productList, setProductList] = useState(null); 
  const [isLoading, setLoading] = useState(true); 
  

  useEffect(() => {
    const commerce_api_key = process.env.REACT_APP_COMMERCE_API_KEY; 
    const commerce_base_url = 'https://api.chec.io/v1'; 

    fetch("/api")
      .then((res) => res.json())
      .then((localMsg) => setLocalMsg(localMsg.message));

    axios.get(commerce_base_url + '/products', { 
      headers: {
        'X-Authorization': commerce_api_key
      }
    })
    .then(productList => {
      setProductList(productList.data.meta.pagination.total);
      setLoading(false);
    })
  }, []);

  if(isLoading) {
    return <div className='App'>
      <span id="loading-icon">
        <i class="fi-7x fi-xwsuxl-reload fi-spin"></i>
      </span>
    </div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        {/*img src={logo} className="App-logo" alt="logo" />
        <p>{!localMsg ? "Loading..." : localMsg}</p>
        <p>{productList} Current Products Created</p> --> */
        }
      </header>
      {window.friconix_update()}
    </div>
  );
}

export default App;