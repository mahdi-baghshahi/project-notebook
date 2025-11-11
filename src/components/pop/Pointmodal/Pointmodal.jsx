import React from 'react'
import styles from './Pointmodal.module.css';
import ItemSetting from '../../common/ItemSetting';
import IconPopupPoint from '../../data/itemIconPopupPoint';
import changecolor from '../../data/changecolor';
import ChangeColor from './../../common/ChangeColorBackgrond/ChangColor'
import ReactDOM from 'react-dom'; 


import Close from '../../../assets/images/popup/Pin/CloseBottom.svg';


export default function Pointmodal({ onClose , isopen , markfinished}) {
  if(!isopen){
    return null;
  }

     const modalContentpoint = (

            <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
              <div>
                <button className={styles.closeButton} onClick={onClose}>
                    <div><img src={Close} alt="Close" /></div>
                </button>

              </div>
            
                <div className={styles.Itemcolor}>
                   <p style={{fontSize:'10px' , lineHeight:'100%', fontWeight:'400' , color:'#827D89'}}>CHANGE BACKGROUND</p>
                  
                   {changecolor.map((bom , index) => (
                    <ChangeColor 
                    key={index}
                    color={bom.color}
                    bordercolor={bom.bordercolor}
                     />

                    
                   ))}
                </div>
                <div className={styles.Itempoint}>

                <p style={{fontSize:'10px' , lineHeight:'100%', fontWeight:'400' , color:'#827D89'}}>EXTRAS</p>
                 {IconPopupPoint.map((item) => (
                  <ItemSetting 
                  key={item.id} 
                  IconComponent={item.IconComponent} 
                  IconComponentlable={item.IconComponentlable} 
                  lable={item.lable}
                  textitem={item.textitem} 
                  targetPath={item.targetPath}
                  />
                     ))}
                  <button className={styles.markfinished} onClick={markfinished} >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M5 13L9 17L19 7" stroke="#180E25" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p style={{color:'#180E25' , fontSize:'16px' , fontWeight:'500'}}>Mark as Finished</p>
                </button>
                </div>
                <div className={styles.leftContent}>
                       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M19 7L18.1327 19.1425C18.0579 20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732 19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V7M4 7H20" stroke="#CE3A54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                    <p style={{color:'#CE3A54' , fontSize:'16px' , fontWeight:'500'}}>Delete Note</p>
                </div>
            </div>
        </div>
  )
      
      return ReactDOM.createPortal(
          modalContentpoint,
          document.getElementById('modal-root') 
      );
}

