import React from 'react'
import styles from './BottomNavbar.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
// import { Pluse , Search} from './../../icons/Icons';



import PluseIcon from '../../../assets/images/navbarbottonhome/Pluse.svg';
import Setting from  '../../../assets/images/navbarbottonhome/Setting.svg';
import Search from '../../../assets/images/navbarbottonhome/search.svg';
import HomeActive from '../../../assets/images/navbarbottonhome/homep.svg';
import HomeinActive from '../../../assets/images/navbarbottonhome/Home.svg';
import FinishedActive from '../../../assets/images/navbarbottonhome/finishedp.svg';
import FinishedinActive from '../../../assets/images/navbarbottonhome/finished.svg';


export default function BottomNavbar() {
      const location = useLocation();
      const currentPath = location.pathname;
const navItem = [
  { path: '/home0notes', label: 'Home', activeIcon: HomeActive , inactiveIcon: HomeinActive },
  { path: '/finished', label: 'Finished', activeIcon: FinishedActive , inactiveIcon: FinishedinActive },
];

  return (
    <div className={styles.BottomNavbar}>
         <nav className={styles.navBar}>
    {navItem.map((item) => (
      <div key={item.path} className={styles.navlogo}>
        <Link to={item.path} className={styles.navLink}>
          {currentPath === item.path ? 
            <img src={item.activeIcon} className={styles.icon} alt={item.label} /> : 
            <img src={item.inactiveIcon} className={styles.icon} alt={item.label} />}
          <span className={styles.icon_lable}>{item.label}</span>
        </Link>
      </div>
    ))}


      <div className={styles.plusContainer}>
        <Link to="/creatnewnotes" className={styles.plusButton}>
          <span className={styles.icon_pluse}><img src={PluseIcon} alt='pluse' /></span>
        </Link>
      </div>

      <div className={styles.navlogo}>
        <Link to="/search" className={styles.navLink}>
          <img className={styles.icon} src={Search} alt='search'></img>
          <span className={styles.icon_lable}>Search</span>
        </Link>
      </div>

      <div className={styles.navlogo}>
        <Link to="/settings" className={styles.navLink}>
          <img className={styles.icon} src={Setting} alt='setting'></img>
          <span className={styles.icon_lable}>Settings</span>
        </Link>
      </div>
    </nav>
    </div>
  )
}