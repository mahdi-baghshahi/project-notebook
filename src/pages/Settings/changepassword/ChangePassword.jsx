import { useState } from 'react'
import styles from './ChangePassword.module.css'
// import Btn from '../../../common/Btn';
// import Btn from '../../../components/common/Btn';

// import Backlink from '../../../common/Backlink';
// import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';

import Styledtext from '../../../components/common/styled-text/Styledtext';
// import Inputd from '../../../common/Inputd';
// import Inputd from '../../../components/common/Inputd';
import Inputd from '../../../components/common/Inputd';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import Btn from '../../../components/common/Btn'
import { Password } from '@mui/icons-material';
// import { ArrowRight } from '@mui/icons-material';
import { ArrowRight } from '../../../components/Icons/Icons';


export default function ChangePassword() {
  const [error , setError] = useState('');
  const [success , setSuccess] = useState('');
  const [currentPass, setCurrentPass] = useState('');
  const [newPass , setNewPass] = useState('');
  const [retypePass , setRetypePass] = useState('');


   const handleChangePassword = (e) => {
   e.preventDefault();
   setError('');
   setSuccess('');

   if (!currentPass || !newPass || !retypePass) {
    setError('لطفاً همه فیلدهای رمز عبور را پر کنید');
     return;
    }

    if (newPass !== retypePass) {
     setError("رمز عبور جدید و تکرار آن یکسان نیستند");
      return;
    }

  
    const storedUser = localStorage.getItem('registeredUser');

    if(storedUser) { 
      try{
        const userData = JSON.parse(storedUser);
        if (userData.password !== currentPass) {
          setError('رمز عبور فعلی شما نادرست است')
          return;
        }
        const updatedUser ={
          ...userData,
          password:newPass,
        };
        localStorage.setItem('registeredUser', JSON.stringify(updatedUser));

        setSuccess('رمز عبور با موفقیت به‌روزرسانی شد.');
        setCurrentPass('');
        setNewPass('');
        setRetypePass('');
      } catch (e) {
        setError('خطا: اطلاعات کاربری برای به‌روزرسانی یافت نشد.')
      }
   }
};
  return (
    <>
    <nav className={styles.navbarchange}>
        <Backlink addres={'/settings'}>Back</Backlink>
        <p className={styles.p_change}>Change Password</p>
    </nav>
    <form onSubmit={handleChangePassword}>
     <section className={styles.curentpass}>
      <div className={styles.currentpass_input}>
        <span className={styles.textChange}>Please input your current password first</span>
        <Inputd placeholdertext={'*********'} typee={Password}
        value={currentPass} 
        onChange={(e) => setCurrentPass(e.target.value)}
        >Current Password</Inputd>
      </div>
      <div className={styles.container_input}>
        <div>
          <span  className={styles.textChange}>Now, create your new password</span>
        </div> 
        <div className={styles.containerpass}>
         <div>
          <Inputd typee={Password} placeholdertext={'*********'}
          value={newPass}
          onChange={(e) => setNewPass(e.target.value)}
          >New Password</Inputd>
          <Styledtext variant={'p2'}>Password should contain a-z, A-Z, 0-9</Styledtext>

          </div>
          <div>
          <Inputd typee={Password} placeholdertext={'*********'}
           value={retypePass}
           onChange={(e) => setRetypePass(e.target.value)}
          >Retype New Password</Inputd>

         </div>
        </div>
      </div>

      {error && <p style={{color:'red' }}>{error}</p>}
      {success && <p style={{color:'green'}}>{success}</p>}
      <div className={styles.btn}>
      <Btn className={styles.submitbtnContainer} type="submit">
       <span className={styles.btnText}>
        Submit New Password
       </span>
        <ArrowRight className={styles.btnIcon}></ArrowRight>
      </Btn>
        
      </div>

     </section>
    </form>
    </>
  )
}



