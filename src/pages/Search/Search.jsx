import styles from './Search.module.css';
import SearchNavBar from '../../components/common/SearchNavBar/SearchNavBar';
import Styledtext from '../../components/common/styled-text/Styledtext';
import { Cheveron_left } from '../../components/Icons/Icons';
import { Link } from 'react-router-dom';

export default function Search() {
 
    return (
      <>
      <nav className={styles.navbark}>
        <Link to={'/home0notes'}>
           <div >
              <Cheveron_left /> 
            </div>
        </Link>
        <SearchNavBar />
      </nav>
      <section className={styles.sectionSearch}>
         <div>
            <Styledtext variant={'p3'} >RECENT SEARCHES</Styledtext>
         </div>
      </section>
      </>
    );
}
