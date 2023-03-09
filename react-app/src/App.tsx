import React, { useEffect, useState } from 'react';
import axios from 'axios';
import wineCard from './components/wineDashboard/wineCard/wineCard';
import { Wine } from './Models/wine';
import NavBar from './components/NavBar/NavBar';
import  './styles.css';
import WineDashboard from './components/wineDashboard/wineDashboard';
import { Button } from 'reactstrap'; 

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
        <WineDashboard wines={wines} />
      </div>
    </div>
    
  );
}

export default App;
