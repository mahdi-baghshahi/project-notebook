import React, { useState } from 'react'
import styles from './Login.module.css'
import Inputd from '../../../components/common/Inputd';
import { Link, useNavigate } from 'react-router-dom'
import Btn from '../../../components/common/Btn'
import EastIcon from '@mui/icons-material/East'



import IconGoogle from '../../../assets/images/pages/login/e8d493e21d0f63058bc2971ca8e8212abe371c31.png';

export default function Login() {
  const [emailll , setEmailll] = useState('');
  const [passwordd , setPasswordd] = useState('');
  const [errorr , setErrorr] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storeduser = localStorage.getItem('registeredUser');
    
    if (!storeduser) {
      setErrorr('کاربری ثبت نام نکرده است.');
      return;
    }

    const mahdi = JSON.parse(storeduser);
    
    if (emailll === mahdi.email && passwordd === mahdi.password) {
      setErrorr('');
      alert('ورود با موفقیت انجام شد!');
      
      navigate('/home0notes'); 
    } else {
      setErrorr('ایمیل یا رمز عبور اشتباه است.');
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h2 className={styles.h2_login}>Let’s Login</h2>
        <p className={styles.p_login}>And notes your idea</p>
        <form onSubmit={handleLogin}>
          <div className={styles.input_link}>
            <Inputd placeholdertext="Example: johndoe@gmail.com" value={emailll}
              onChange={(e) => setEmailll(e.target.value)}>Email Address</Inputd>
            <Inputd placeholdertext="********" type="password" value={passwordd}
              onChange={(e) => setPasswordd(e.target.value)}>Password</Inputd>
          </div>
          <div className={styles.Link_countlogin}>
            <Link to={'/forgotpassword'} className={styles.Link_login}>Forgot Password</Link>
          </div>
          <div className={styles.input_login}>
           
            <Btn type="submit" className={styles.btn_link_login} sx={{ backgroundColor: "#6A3EA1", color: "#ffffffff", fontWeight: '500' }}>
              <span>Login</span>
              <EastIcon sx={{ position: "absolute", right: "15px", height: "22px" }} />
            </Btn>
            {errorr && <p className={styles.errorMessage}>{errorr}</p>}
          </div>
        </form>
        <div className={styles.divider}>
          <span className={styles.divider}>Or</span>
        </div>
        <Btn className={styles.btn_link_google} sx={{ backgroundColor: "#ffffffff", color: "#060000ff", fontWeight: '500' }}>
          <img src={IconGoogle} className={styles.img_login} alt='m'></img>
          <span>Login with Google</span>
        </Btn>
        <div className={styles.Link_countlogin}>
          <Link to={'/register'} className={styles.Link1_login}>Don’t have any account? Register here</Link>
        </div>
      </div>
    </div>
  );
}