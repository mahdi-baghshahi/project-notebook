// import React from 'react'
// import styles from './ChangColor.module.css'

// export default function ChangColor({bordercolor,color}) {
//   return (
    
//     <>
//     <button className={styles.circular_button} style={{borderColor:bordercolor , color:color}}></button>
//     </>
//   )
// }
import React from 'react';
import styles from './ChangColor.module.css';

export default function ChangColor({ color, bordercolor }) {

  return (
    <>
     <div className={styles.color_container} >

     
      <button 
        className={styles.circular_button} 
        style={{ borderColor: bordercolor , backgroundColor: color }}>
      </button>
      </div>
    </>
  );
}



  // const isWhite = color === "#FFFFFF";
  // const innerFillClasses = `${styles.inner_fill} ${isWhite ? styles.is_white : ''}`;
