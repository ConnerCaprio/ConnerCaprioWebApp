import React, { FC } from 'react';
import { Wine } from '../../../Models/wine';
import styles from './wineCard.module.css';

interface wineCardProps {
  wineInfo: Wine;
}

export default function WineCard ({wineInfo}: wineCardProps) {
  return (
    <div className={`col-3 rounded ${styles.wineCardBackground}`}>
      <div >
        {wineInfo.name}
      </div>
    </div>
  )
}
  

