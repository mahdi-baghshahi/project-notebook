import React from 'react'
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import styles from './Settings.module.css';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import Styledtext from '../../../components/common/styled-text/Styledtext'
import Btn from '../../../components/common/Btn';
import iconSetting from '../../../components/data/itemIconSetting';
import ItemSetting from "../../../components/common/ItemSetting"
// import LogOut from '../popUp/logOut/LogOut';
import LogOuttt from '../popUp/logOut/LogOut';
import Notification from '../popUp/notficationSetting/Notification';
import { Bell } from './../../../components/Icons/Icons';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

import Profile from '../../../assets/images/photo.jpg';

export default function Settings() {
 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpennot, setIsModalOpennot] = useState(false);

    const [userInfo , setUserInfo] = useState({
      name:'Michael Antonio' , 
      email:'anto_michael@gmail.com'
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('registeredUser'); 

        if (storedUser) {
            try { 
                const userData = JSON.parse(storedUser);

                if (userData && userData.fullName && userData.email) {
                    setUserInfo({
                        name: userData.fullName,
                        email: userData.email
                    });
                }
            } catch (error) { 
                console.error("Error parsing user data from localStorage:", error);
             
            }
        }
    }, []);
    


    const handlenotification = () => {
      setIsModalOpennot(true);
    };

  const closeModall = () => {
      setIsModalOpennot(false);
   };


    const handlelogout = () => {
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  
  return (
    <>
      <nav className={styles.navbarsetting}>
        <Backlink addres={'/home0notes'}>Back</Backlink>
        <p className={styles.p_setting}>Settings</p>
      </nav>
      <section className={styles.container_setting}>
        <div className={styles.hritem}>
          <div className={styles.profileInfo}>
            <img src={Profile} className={styles.profileImage} alt='profile'/>
            <div className={styles.main}>
              <div className={styles.textInfo}>
                <Styledtext variant={'h4'} className={styles.text} sx={{ margin: '0px',padding: '0px'}}>{userInfo.name}</Styledtext>
              </div>
              <div className={styles.email}>
                <LocalPostOfficeOutlinedIcon sx={{ width:'15.25px' , height:'13.75px',color:'#827D89', marginRight: '4px' }} />
                <Styledtext variant={'p1'} sx={{ margin: '0px',padding: '0px'}}>{userInfo.email}</Styledtext>
              </div>
            </div>
          </div>
          <div className={styles.btn_edit}>
            <Link to={'/settings/editprofile'} className={styles.btn_edit_link}>
                <Btn sx={{ backgroundColor: "#ffffff", color: "#6A3EA1", border: "1px solid #6A3EA1" , height:'38px' , width:'328px', fontWeight:"500",display:'flex' , gap :'8px' , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}}>
                 <svg class="my-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="#6A3EA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
                  <span>Edit Profile</span></Btn>    
            </Link>
            
              
          </div>

        </div>
        <div className={styles.hritem1}>
          <div>

             <Styledtext variant={'p1'} >APP SETTINGS</Styledtext>
          </div>
          <div className={styles.itemsetting}>
            {iconSetting.map((item) => (
              <ItemSetting 
                key={item.id} 
                IconComponent={item.IconComponent} 
                lable={item.lable}
                textitem={item.textitem} 
                targetPath={item.targetPath}
              />
            ))}
           <div className={styles.leftContent} onClick={handlenotification} >
             
            <Bell />
            <p style={{color:'#180E25' , fontSize:'16px' , fontWeight:'500'}}>Notifications</p>
           </div>
          </div>

        </div>
          <div>
                  
        <div className={styles.leftContent} onClick={handlelogout}>
             
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M17 16L21 12M21 12L17 8M21 12L7 12M13 16V17C13 18.6569 11.6569 20 10 20H6C4.34315 20 3 18.6569 3 17V7C3 5.34315 4.34315 4 6 4H10C11.6569 4 13 5.34315 13 7V8" stroke="#CE3A54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> 
            <p style={{color:'#CE3A54' , fontSize:'16px' , fontWeight:'500'}}>Log Out</p>
        </div>
        
       </div>

          

      </section>
       <footer className={styles.footersetting}>
          <Styledtext variant={'p2'} >Makarya Notes v1.1</Styledtext>
       </footer>
       <LogOuttt  isOpen={isModalOpen} onClose={closeModal} />
     
       <Notification isOpen={isModalOpennot} onClose={closeModall} />
    

    </>
  )
}
