import React, { useState, useEffect  , useRef} from 'react';
import styles from './EditProfile.module.css';
// import Backlink from '../../../common/Backlink';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
// import Btn from '../../../common/Btn';
import Btn from '../../../components/common/Btn';
// import Inputd from '../../../common/Inputd';
import Inputd from '../../../components/common/Inputd';
import { useNavigate } from 'react-router-dom';
import Styledtext from '../../../components/common/styled-text/Styledtext';
import { Checked } from '../../../components/Icons/Icons';


import Profile from '../../../assets/images/photo.jpg';


export default function EditProfile() {
  const navigate = useNavigate();
  const [fullname, setFullName] = useState('');
  // const [imgaddress , setImgAddress] = useState('');
  const [profileImage, setProfileImage] = useState('images/photo.jpg'); 
  const [emailaddress, setEmailAddress] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);

  
  useEffect(() => {
    const storeduser = localStorage.getItem('registeredUser');
    if (storeduser) {
      const user = JSON.parse(storeduser);
      
      setFullName(user.fullName || ''); 
      setEmailAddress(user.email || '');
    }
  }, []); 



    
    // localStorage.setItem('registeredUser', JSON.stringify(userData));


  const handleUppdate = (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    if (!fullname || !emailaddress) {
      setError('لطفاً فیلدهای نام کامل و آدرس ایمیل را پر کنید.');
      return;
    }

    const storeduser = localStorage.getItem('registeredUser');
    if (storeduser) {
      const oldUser = JSON.parse(storeduser);

    
      const updatedUser = {
        ...oldUser,
        fullName: fullname, 
        email: emailaddress, 
      };

      localStorage.setItem('registeredUser', JSON.stringify(updatedUser));
      
      setSuccess('اطلاعات پروفایل با موفقیت به‌روزرسانی شد.');
      

    } else {
      setError("خطا: اطلاعات کاربری در دسترس نیست. شاید نیاز به لاگین مجدد باشد.");
    }
  };


  return (
    <>
      <nav className={styles.navbaredit}>
        <Backlink addres={'/settings'}>Settings</Backlink>
        <p className={styles.p_edit}>Edit Profile</p>
      </nav>
      <section className={styles.sectionedit}>
        <form onSubmit={handleUppdate}> 
          <div>
            <div className={styles.changeprofil}>
              <div>
                <img src={Profile} className={styles.profileImage} alt='profile' />
              </div>
              <div>
                <Btn sx={{ backgroundColor: "#ffffff", color: "#6A3EA1", border: "1px solid #6A3EA1", height: '38px', width: '171px', fontWeight: "500", display: 'flex', gap: '8px' , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="#6A3EA1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Change Image</span>
                </Btn>
              </div>
            </div>
            <div>
              <div className={styles.input_link}>
           
                <Inputd placeholdertext="Michael Antonio" value={fullname}
                  onChange={(e) => setFullName(e.target.value)}>Full Name</Inputd>
           
                <Inputd placeholdertext="anto_michael@gmail.com" type="email" value={emailaddress}
                  onChange={(e) => setEmailAddress(e.target.value)}>Email Address</Inputd>
              </div>
              <div>
                <Styledtext variant={'p2'}>Changing email address information means you<br /> 
                 need to re-login to the apps.</Styledtext>
              </div>
              <div className={styles.btn_edit}>
            
                <Btn type="submit" sx={{ marginTop: '20px', width: '100%', height: '48px', backgroundColor: "#6A3EA1", color: "#ffffffff" , '&:hover': {  }}} className={styles.submitbtnContainer}>
                  <Checked className={styles.btnIcon} />
                  <span className={styles.btnText}>Save Changes</span>
                </Btn>
                {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
                {success && <p style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>{success}</p>}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}