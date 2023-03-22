import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Wine } from '../../Models/wine';
import WineCard from './wineCard/wineCard';
import styles from './wineDashboard.module.css';



export default function WineDashboard() {

  const [wines, setWines] = useState<Wine[]>();
  const url = process.env.REACT_APP_API_URL + 'wines';

  useEffect(() => {
    axios.get<Wine[]>(url)
    .then(Response => {
      console.log(Response);
      setWines(Response.data);
    })
  }, [])

  return (
    <div className="row">
      <div className='col-11 offset-1'>
        <div className='row'>
            {wines && wines.map(singlewine => (
              <WineCard key={singlewine.id} wineInfo={singlewine}></WineCard>
            ))}
        </div>
        <button><NavLink className="nav-link" to="/wines/add">Add Wine</NavLink></button>
      </div>
    </div>
  )
  
}
