import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import Inputd from '../../../components/common/Inputd';
import Btn from '../../../components/common/Btn';
import EastIcon from '@mui/icons-material/East';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';


export default function Register() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState(''); 
  const [error, setError] = useState('');

  
  const handleRegister = (e) => {
    e.preventDefault();

    
    if (password !== retypePassword) {
      setError('رمز عبور و تکرار آن با هم برابر نیستند.');
      return; 
    }
    
    
    setError('');

  
    const userData = {
      fullName: fullName,
      email: email,
      password: password,
    };
    

    localStorage.setItem('registeredUser', JSON.stringify(userData));
    
    alert('ثبت نام با موفقیت انجام شد!');
  };

  return (
    <div className={styles.registerCountainer}>
      <div className={styles.link_container_register}>
        <Backlink addres={'/login'}>Back to Login</Backlink>
      </div>
      <div className={styles.contentContainer}>
        <h2 className={styles.h2_link}>Register</h2>
        <p className={styles.p_link}>And start taking notes</p>
   
        
        
        <form onSubmit={handleRegister}>
          <div className={styles.input_register}>
            <Inputd
              placeholdertext="Example: John Doe"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)} >
              Full Name
            </Inputd>
            <Inputd
              placeholdertext="Example: johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            >
              Email Address
            </Inputd>
            <Inputd
              placeholdertext="********"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            >
              Password
            </Inputd>
            <Inputd
              placeholdertext="********"
              type="password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)} 
            >
              Retype Password
            </Inputd>
          </div>
          <Btn
            className={styles.btn_register_login}
            sx={{ backgroundColor: "#6A3EA1", color: "#ffffffff", fontWeight: '500', marginTop: '40px' }}
            type="submit">
            <span>Register</span>
            <EastIcon sx={{ position: "absolute", right: "15px", height: "22px" }} />
          </Btn>
        </form>
      </div>
    </div>
  );
}
