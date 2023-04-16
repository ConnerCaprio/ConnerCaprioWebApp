import axios, { AxiosResponse } from 'axios';
import React, { FC, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useModal from '../../../hooks/useModal';
import { Wine } from '../../../Models/wine';
import WineForm from '../../forms/WineForm';
import styles from './wineCard.module.css';

interface wineCardProps {
  wineInfo: Wine;
  deleteClicked: Function;
}

export default function WineCard (props: wineCardProps) {

const { isOpen, toggle } = useModal();
const [modalDiv, setModalDiv] = useState();
const [isDeleted, setIsDeleted] = useState<boolean>(false);

  function wineImage() {
    if (props.wineInfo != null) {
      switch(props.wineInfo.wineType) {
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
  
  const responseBody = (response: AxiosResponse) => response.data;
  const requests = {
    delete: (url: string) =>
    axios
      .delete(url)
      .then(responseBody),
  };

  const url = process.env.REACT_APP_API_URL + 'wines/';

  function deleteWine() {
    requests.delete(`${url}${props.wineInfo.id}`);
    setIsDeleted(true);
    props.deleteClicked(props.wineInfo.id);
  }

  return (
    <div id={props.wineInfo.id} style={{paddingRight:'5px', paddingBottom:'5px', display: isDeleted ? 'none' : 'block' }} className={`col-3 rounded ${styles.wineCardBackground}`}>
      <div>
        <div className='row'>
          <div className='col-8'>
            
              <p className={styles.cardListElement}>{props.wineInfo.name}</p>
              <p  className={styles.cardListElement}>{props.wineInfo.grapeType}</p>
            
          </div>
          <div className='col-4'>
            <img src={`/assets/images/${wineImage()}`} className={styles.wineImages} alt={wineImage()}></img>
          </div>
        </div>
        
        
        <button style={{bottom:'30px', float:'right', marginLeft:'10px'}} className="btn btn-sm btn-outline-secondary">
        <NavLink className="nav-link" to={`/wines/details/${props.wineInfo.id}`}>Wine Details</NavLink>
        </button>
        
        <button type='button' style={{bottom:'30px', float:'right' }} className='btn btn-danger btn-sm' onClick={deleteWine}>Delete</button>
        <Modal isOpen={isOpen} toggle={toggle}>
          <WineForm></WineForm>
        </Modal>
      </div>
    </div>
  )
}
