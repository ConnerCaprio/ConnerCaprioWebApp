import React, { FC, useState } from 'react';
import { Modal } from 'react-bootstrap';
import useModal from '../../../hooks/useModal';
import { Wine } from '../../../Models/wine';
import WineForm from '../../forms/WineForm';
import styles from './wineCard.module.css';

interface wineCardProps {
  wineInfo: Wine;
}

export default function WineCard ({wineInfo}: wineCardProps) {

const { isOpen, toggle } = useModal();
const [modalDiv, setModalDiv] = useState();

  return (
    <div style={{paddingRight:'5px', paddingBottom:'5px'}} className={`col-3 rounded ${styles.wineCardBackground}`}>
      <div >
        <ul>
          <li className={styles.cardListElement}>{wineInfo.name}</li>
          <li className={styles.cardListElement}>{wineInfo.brand}</li>
          <li className={styles.cardListElement}>{wineInfo.review}</li>
          <li className={styles.cardListElement}>{wineInfo.year}</li>
          <li className={styles.cardListElement}>{wineInfo.price}</li>
          <li className={styles.cardListElement}>{wineInfo.grapeType}</li>
          <li className={styles.cardListElement}>{wineInfo.notes}</li>
          <li className={styles.cardListElement}>{wineInfo.wineType}</li>
        </ul>
        <button type='button' style={{bottom:'30px', float:'right', marginLeft:'10px'}} className='btn btn-sm btn-outline-secondary' onClick={toggle}>Edit Wine</button>
        <button type='button' style={{bottom:'30px', float:'right' }} className='btn btn-danger btn-sm' >Delete</button>
        <Modal isOpen={isOpen} toggle={toggle}>
          <WineForm></WineForm>
        </Modal>
      </div>
    </div>
  )
}
