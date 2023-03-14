import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { Wine } from '../../Models/wine';
import WineCard from './wineCard/wineCard';
import styles from './wineDashboard.module.css';



export default function WineDashboard() {

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
              <WineCard key={singlewine.id} wineInfo={singlewine}></WineCard>
            ))}
        </div>
      </div>
    </div>
  )
  
}
