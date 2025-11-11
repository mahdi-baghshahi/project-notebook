import React from 'react'
import styles from './Notification.module.css';
import Styledtext from '../../../../components/common/styled-text/Styledtext';
import BtnSwitch from '../../../../components/common/BtnSwitch';
import { CloseBotton } from '../../../../components/Icons/Icons';
import ReactDOM from 'react-dom';

export default function Notification({isOpen , onClose}) {

    if(!isOpen) {

        return null ; 
    };

       
  const modalnotification = (
    <div className={styles.modalOverlay1}>

      <div className={styles.modalContainer1}>
        <div className={styles.btn_close} onClick={onClose}>
            <CloseBotton />
        </div>
        <div className={styles.containerbtn}>
            <div className={styles.btn_text}>
                <div> <Styledtext variant={'h5'}>Email Notifications</Styledtext></div>
                <div><BtnSwitch /></div>
            </div>
            <div className={styles.btn_text}>
                <div><Styledtext variant={'h5'}>Push Notifications</Styledtext></div>
                <div><BtnSwitch /></div>
            </div>
        </div>
      </div>
    </div>
    
  );
           return ReactDOM.createPortal(
          modalnotification,
          document.getElementById('modal-root') 
      );
}
