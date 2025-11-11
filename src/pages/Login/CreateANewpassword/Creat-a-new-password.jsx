import React from 'react'
import Styledtext from '../../../components/common/styled-text/Styledtext'
import Inputd from '../../../components/common/Inputd';
import Btn from '../../../components/common/Btn';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import styles from './Creat-a-new-password.module.css'

export default function CreateANewPassword() {
  return (
    <div className={styles.CreateANewPassword}>
      <div className={styles.backlink_creat_a}>
        <Backlink >Back to Login</Backlink>
      </div>
        <div className={styles.text_craet_a}>
          <Styledtext variant={'h2'}>Create a New Password</Styledtext>
          <Styledtext variant={'p'}>Your new password should be different from the previous password</Styledtext>
        </div>
        <div className={styles.input_creat_a}>
          <Inputd placeholdertext={"********"}>New Password</Inputd>
          <Inputd placeholdertext={"********"}>Retype New Password</Inputd>
          <Btn>Create Password</Btn>
        </div>
    </div>
  )
}
