import React, { FC } from 'react';
import { Wine } from '../../Models/wine';
import WineCard from './wineCard/wineCard';
import styles from './wineDashboard.module.css';

interface WineDashboardProps {
  wines: Wine[];
}

export default function WineDashboard({wines}: WineDashboardProps) {
  return (
    <div className="row">
      <div className='col-1'></div>
      <div className='col-11'>
        <div className='row'>
            {wines.map(singlewine => (
              <WineCard wineInfo={singlewine}></WineCard>
            ))}
        </div>
      </div>
    </div>
  )
  
}
