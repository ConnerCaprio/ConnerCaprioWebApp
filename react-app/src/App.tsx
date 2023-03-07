import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import WineCard from './components/WineCard/WineCard';

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
    <div className="row">
      <div className='col-1'></div>
      <div className='col-11'>
        <div className='row'>
            {wines.map((wine: any) => (
              
              <WineCard></WineCard>
              
            ))}
        </div>
      </div>
    </div>
    
  );
}

export default App;
