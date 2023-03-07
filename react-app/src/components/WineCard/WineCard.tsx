import React, { FC } from 'react';
import styles from './WineCard.module.css';

interface WineCardProps {}

const WineCard: FC<WineCardProps> = () => (
  <div className="col-3">
    <div className={styles.WineCard}>
      WineCard Component
    </div>
  </div>
  
);

export default WineCard;
