
import React, { useState } from 'react';
import styles from './Buying.module.css';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import Styledtext from '../../../components/common/styled-text/Styledtext';
import { Plusee , Check} from '../../../components/Icons/Icons';
import Btn from '../../../components/common/Btn';
import BottomNavbarHome from '../../../components/common/BottomNavbarHome/BottomNavbarHome';

export default function Buying() {

    const [items , setItems] = useState([]); 

    const handAddcheckbox = () =>{
        const newItem = {
            id:Date.now() , 
            text:'', 
            completed:false
        };
    
        setItems([...items , newItem]); 
    }

    
    const handleTextChange = (id, newText) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, text: newText } : item
        ));
    };
    
  
    const handleCheckboxToggle = (id) => {
        setItems(items.map(item => 
            item.id === id ? { ...item, completed: !item.completed } : item
        ));
    };

    return (
        <div>
            <nav className={styles.nav_buying}>
                <Backlink addres={'/creatnewnotes'} className={styles.Backlink_newnotes}>Back</Backlink>
            </nav>
            <div className={styles.main_buying}>
                
                <div>
                    <Styledtext variant={'h2'}>🛒 Monthly Needs</Styledtext>
                </div>

                <div>
                    <div className={styles.checkbox_fa}>
                        <span className={styles.custom_checkbox}></span>
                        <p>A box of instant noodles</p>
                    </div>
                    <div className={styles.checkbox_fa}>
                        <span className={styles.custom_checkbox}></span>
                        <p>3 box of coffee</p>
                    </div>
                </div>
                
    
                <div>
                    {items.map(item => (
                        <div key={item.id} className={styles.checkbox_f}>
                     
                            <input 
                                type='checkbox' 
                                className={styles.nima}
                                checked={item.completed}
                                onChange={() => handleCheckboxToggle(item.id)}
                            />
                 
                            <input 
                                className={styles.inpute}
                                type="text"
                                placeholder='Type...' 
                                value={item.text} 
                                onChange={(e) => handleTextChange(item.id, e.target.value)}
                            />
                        </div>
                    ))}
                </div>
                
           
                <div className={styles.hr_buying}> 
                    <button className={styles.add_checkbox} style={{marginBottom:'55px'}} onClick={handAddcheckbox}>
                        <Plusee />
                        <span>Add checkbox</span>
                    </button>
                </div>
                
                <p style={{fontSize:'12px', color:'#827D89' , fontWeight:'400'}}>Reminder set on 15/07/2021, 18:30</p>
                
               
                <div>
                    <div>
                        <div className={styles.tag_text}>
                            <Btn sx={{width:'80px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0" , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Important</span></Btn>
                            <Btn sx={{width:'100px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0" , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Top Priority</span></Btn>
                            <Btn sx={{width:'190px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0" , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Should be Done This Week</span></Btn>
                            <Btn sx={{width:'80px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0" , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Important</span></Btn>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavbarHome />
        </div>
    );
}