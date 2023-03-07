import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WineCard from './components/WineCard/WineCard';
import { Wine } from './Models/wine';

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
    
  );
}

export default App;
