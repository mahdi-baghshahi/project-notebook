import React from 'react'
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import styles from './CreateNewNotes.module.css'
import Styledtext from '../../../components/common/styled-text/Styledtext'
import notetypes from '../../../components/data/notetype'
import Notetypecard from '../../../components/common/Notetypecard';
import { Link } from 'react-router-dom'

export default function CreateNewNotes() {
  return (
    <div>
      <div className={styles.nav_newnotes}>
         <Backlink addres={'/home0notes'}   className={styles.Backlink_newnotes}>Back</Backlink>
         <p className={styles.p_newnotes}>New Notes</p>
      </div>
      <div className={styles.main_newnotes}>
        <div>
          <Styledtext variant={'h3'}>What Do You Want to<br />Notes?</Styledtext>
         </div>
         <div>
      {notetypes.map((note) => (
      <Link style={{textDecoration:"none"}} to={note.path} key={note.title} className={styles.cardLink}>
        <Notetypecard
          title={note.title}
          subtitle={note.subtitle}
          icon={note.icon}
          backgroundColor={note.backgroundColor}
          subtitleColor={note.subtitleColor}
          path={note.path} 
        />
      </Link>
  
      
        
      ))}
         </div>
      </div>


    </div>

  )
}