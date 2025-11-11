import React from 'react'
import styles from './Indicator.module.css';

export default function Indicator() {
  return (
    <>
        <div className={styles.circlesContainer}>
            <div className={`${styles.circle} ${styles.active}`}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
        </div>
    </>

  )
}
