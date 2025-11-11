
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import emailjs from '@emailjs/browser';
import styles from './Forgotpassword.module.css';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import Styledtext from '../../../components/common/styled-text/Styledtext';
import Inputd from '../../../components/common/Inputd';
import CustomButton from '../../../components/common/Btn';


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!email) {
      alert('لطفاً آدرس ایمیل خود را وارد کنید.');
      return;
    }

    
    const verificationCode = 1234; 

    const templateParams = {
      emailmahdi: email, 
      passcode: verificationCode,
    };

    try {
      await emailjs.send('service_xuk0rts', 'template_30idgs7', templateParams, 'gNiVMM5fGzyUFgoGG');
      
      navigate('/emailcode', { state: { email, verificationCode } });
    } catch (error) {
      console.error('FAILED...', error.text);
      alert('خطایی در ارسال کد رخ داد.');
    }
  };

  return (
    <div className={styles.ForgotPassword}>
      <nav className={styles.NavbarForgot}>
        <Backlink addres={'/login'}>Back to Login</Backlink>
      </nav>
      <section>
      <div className={styles.text}>
        <Styledtext variant={'h2'}>Forgot Password</Styledtext>
        <Styledtext variant={'p'}>Insert your email address to receive a code for creating a new password</Styledtext>
      </div>
      <form onSubmit={sendEmail} className={styles.input_container_forgotpassword}>
         <Inputd 
         typee={'email'}
           placeholdertext={"anto_michael@gmail.com"} 
           sx={{color:'#250e0eff'}} 
           name="emailmahdi"
           onChange={(e) => setEmail(e.target.value)}>
           Email Address
          </Inputd>
         <CustomButton type="submit">Send Code</CustomButton>
       </form>
      </section>

    </div>
  );
}