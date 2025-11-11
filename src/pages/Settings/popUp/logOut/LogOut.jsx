import React from 'react'
import ReactDOM from 'react-dom';
import styles from './LogOut.module.css'
import Styledtext from '../../../../components/common/styled-text/Styledtext'
// import Btn from '../../../../common/Btn'
import Btn from '../../../../components/common/Btn';

// import { Height } from '@mui/icons-material';
export default function LogOuttt({isOpen, onClose}) {

  if (!isOpen) {
    return null ;
  }
  
     const modalContent = (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContainer}>
          <div>
            <Styledtext variant={'h4'}>Log Out</Styledtext>
            <Styledtext variant={'p'} >Are you sure you want to log<br /> out from the application?</Styledtext>
          </div>
          <div className={styles.btn_logout}>
            <Btn  onClick={onClose}  sx={{width:'108px' , height :'38px' ,backgroundColor: '#FFFFFF', border:"1px solid #6A3EA1" , color:'#6A3EA1'}}>Cancel</Btn>
            <Btn    sx={{width:'108px' , height :'38px'}}>Yes</Btn>

          </div>
        </div>

      </div>
     );
         return ReactDOM.createPortal(
        modalContent,
        document.getElementById('modal-root') 
    );
  
}
