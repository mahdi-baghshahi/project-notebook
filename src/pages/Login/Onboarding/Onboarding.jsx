import React from 'react';
import Btn from '../../../components/common/Btn';
import styles from './Onboarding.module.css';
import { Link } from 'react-router-dom';
import Indicator from '../../../components/common/indicator/Indicator';
import { EastIconn } from '../../../components/Icons/Icons';


import Illustration1 from '../../../assets/images/pages/login/illustration1.svg';

export default function Onboarding1() {
  return (
    <>
      <div className={styles.Onboarding1}>
        <div className={styles.imageContainer}>
          <img src={Illustration1} className={styles.image1} alt="تصویر" />
        </div>
      <div className={styles.p_container}>
        <p>Jot Down anything you want to achieve, today or in the future</p>
      </div>
      <div className={styles.bottomSection}>
        <div>
        <Indicator />
        </div>
        <div className={styles.btn}>
          <Link to={'/login'}>
              <Btn sx={{ backgroundColor: "#ffffff", color: "#6A3EA1", fontWeight: '900', top: '70px' }}>
                <span>Let’s Get Started</span>
                <div style={{ position: "absolute", right: "15px" ,display:'flex' , alignContent:"center" }}>
                <EastIconn  sx={{ position: "absolute", right: "15px" }}/>
                </div>
              </Btn>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

