import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notetypecard.module.css';


export default function Notetypecard({ title, subtitle, icon, backgroundColor, path , subtitleColor }) {


  return (
    <Link to={path} className={styles.cardLink}>
      <div className={styles.card} style={{ backgroundColor: backgroundColor }}>
        <img src={icon} alt={title} className={styles.icon} />
        <div className={styles.textContainer}>
          <p className={styles.texttitle}>{title}</p>
          <p className={styles.subtitle} style={{ color: subtitleColor }}>{subtitle}</p>
        </div>
      </div>
    </Link>
  );
}