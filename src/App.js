import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [ data, setData] = useState();

  useEffect(() => {
    const getData = async ()=>{
      const response = await fetch("http://localhost:3000/api/catalog_system/pub/products/search/ropa")
      const dataRAW = await response.json()
      setData(dataRAW)
    }
    getData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>EXPERIMENTALITY TEST</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
        search: {
            data && data.length
          }
        </p>

      </header>
    </div>
  );
}

export default App;
