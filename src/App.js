import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [data,setData] = useState(null);
  const fetchData = async()=>{
      const res = await axios.get('http://localhost:8900/pets',{ rejectUnauthorized: false });
      console.log(res.data)
      setData(res.data)
  }
  useEffect(()=>{
    fetchData();
  },[])
  console.log("count")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
