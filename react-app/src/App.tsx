import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WineCard from './components/WineCard/WineCard';
import { Wine } from './Models/wine';
import NavBar from './components/NavBar/NavBar';
import  './styles.css';

function App() {
  const [wines, setWines] = useState<Wine[]>([]);

  useEffect(() => {
    axios.get<Wine[]>('http://localhost:5000/API/wines')
    .then(Response => {
      console.log(Response);
      setWines(Response.data);
    })
  }, [])
  return (
    <div className='background'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <NavBar></NavBar>
          </div>
        </div>
        
        <div className="row">
          
          <div className='col-1'></div>
          <div className='col-11'>
            <div className='row'>
                {wines.map(singlewine => (
                  <WineCard></WineCard>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
