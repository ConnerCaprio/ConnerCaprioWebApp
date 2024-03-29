import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wine } from '../../../Models/wine';
import styles from './wineDetails.module.css';


export default function WineDetails () {

    const params = useParams(); 
    const id = params.id;
    const [wine, setWine] = useState<Wine>();
    const url = process.env.REACT_APP_API_URL + 'wines/' + id;

    function wineImage() {
        if (wine != null) {
          switch(wine.wineType) {
            case 1:
              return 'redWine.png';
            case 2:
                return 'whiteWine.png';
            case 3:
              return 'sparklingWine.png';
            default:
              return 'emptyBottle.png';
          }
        }
          return 'emptyBottle.png';
    }
    
    useEffect(() => {
        axios.get<Wine>(url)
        .then(Response => {
          console.log(Response);
          setWine(Response.data);
        })
      }, [])

  return (
    <div className='row'>
        <div className='col-7' style={{marginBottom:'50px', fontSize:'20px'}}>
            <h2 style={{marginTop:'15px'}}>Details for {wine?.name}</h2>
            {wine && (<ul>
            <li className={styles.cardListElement}><b>Name:</b> {wine.name}</li>
            <li className={styles.cardListElement}><b>Brand:</b> {wine.brand}</li>
            <li className={styles.cardListElement}><b>Review:</b> {wine.review}</li>
            <li className={styles.cardListElement}><b>Year:</b> {wine.year}</li>
            <li className={styles.cardListElement}><b>Price:</b> {wine.price}</li>
            <li className={styles.cardListElement}><b>Grape Type:</b> {wine.grapeType}</li>
            <li className={styles.cardListElement}><b>Notes:</b> {wine.notes}</li>
            <li className={styles.cardListElement}><b>Wine Type:</b> {wine.wineType}</li>
            </ul>)}        
        </div>
        <div className='col-5'>
        <img src={`/assets/images/${wineImage()}`} className={styles.wineImages} alt={wineImage()}></img>
        </div>
    </div>
    
  )
}
