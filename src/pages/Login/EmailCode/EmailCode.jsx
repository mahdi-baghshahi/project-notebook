// import React from 'react'
// import styles from './EmailCode.module.css'
// import Backlink from '../common/Backlink'
// import Styledtext from '../common/Styledtext'
// import Btn from '../common/Btn'
// import Inputd from '../common/Inputd'
// import { Link } from 'react-router-dom'


// export default function EmailCode() {
    
//   return (
//         <div>
//       <div className={styles.backlink_emailcode}>
//         <Backlink addres={'/forgotpassword'} >Back to Forgot Password</Backlink>
//       </div>
//       <div className={styles.text_emailcode}>
//         <Styledtext  variant={'h2'}>Verification Code</Styledtext>
//         <Styledtext variant={'p'} >Check your email and enter the verification code.</Styledtext>
//       </div>
//       <div className={styles.input_container_emailcode}>
//         <Inputd placeholdertext={"********"} sx={{color:'#250e0eff' }}> Enter Code</Inputd>
//         <Link to={'/creatnewpassword'}>
//            <Btn >Enter</Btn>
//         </Link>
        

//       </div>
        
        


//     </div>
//   )
// }
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './EmailCode.module.css';
// import Backlink from '../../../common/Backlink';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';

import Styledtext from '../../../components/common/styled-text/Styledtext';
// import Btn from '../../../common/Btn';
import Btn from '../../../components/common/Btn';

import Inputd from '../../../components/common/Inputd';



// کد اصلاح شده در EmailCode.js

// کد اصلاح شده در EmailCode.js

export default function EmailCode() {
  const [enteredCode, setEnteredCode] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { verificationCode, email } = location.state || {};

  const handleVerification = () => {
    if (parseInt(enteredCode) === parseInt(verificationCode)) {
      navigate('/creatnewpassword', { state: { email } });
    } else {
      alert('کد وارد شده صحیح نیست.');
    }
  };

  return (
    <div>
      <div className={styles.input_container_emailcode}>
        <Inputd 
        typee={'number'}
        
          placeholdertext={"********"} 
          sx={{color:'#250e0eff'}} 
          onChange={(e) => setEnteredCode(e.target.value)}
        >
          Enter Code
        </Inputd>
        <Btn onClick={handleVerification}>Enter</Btn>
      </div>
    </div>
  );
}