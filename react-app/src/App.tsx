import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [wines, setWines] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/API/wines')
    .then(Response => {
      console.log(Response);
      setWines(Response.data);
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {wines.map((wine: any) => (
              <li key={wine.id}>{wine.name}</li>
            ))}
          </ul>
      </header>
    </div>
  );
}

export default App;
