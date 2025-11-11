import ReactDOM from 'react-dom'; 
import styles from './Pinmodal.module.css';


import Close from '../../../assets/images/popup/Pin/CloseBottom.svg';
import Illustration2 from '../../../assets/images/popup/Pin/Illustration2.svg';


export default function Pinmodal({ isOpen, onClose }) {
    if (!isOpen) {
        return null; 
    }
    
   
    const modalContent = (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
            
                <button onClick={onClose} className={styles.closeButton}>
                    <div><img src={Close} alt="Close" /></div>
                </button>
                <div>

                <img src={Illustration2} alt="Success Icon" />
                </div>
                <p style={{fontSize:'20px', fontWeight:"700" , color:'#180E25' , lineHeight:'140%'}}>Notes Pinned Successfully</p>
                <p style={{color:'#827D89' , lineHeight:'140%' , fontSize:'16px' , fontWeight:"400"}}>This note already displayed on<br />pinned section</p>
                <button onClick={onClose} style={{borderRadius:"100px" , width:'76px' , height:'38px', background:'#6A3EA1' , color:"#ffffff" , border:"1px #6A3EA1"}}>
                    <span style={{fontSize:'16px' , fontWeight:'500' , lineHeight:'140%'}}>Close</span>
                </button>
            </div>
        </div>
    );

    
    return ReactDOM.createPortal(
        modalContent,
        document.getElementById('modal-root') 
    );
}