import React from 'react'
import styles from './NoteCardFinished.module.css'
import { useSelector } from 'react-redux';

export default function NoteCardFinished({title , category , description }) {
  // const active = useSelector((state) => state.activeNote.currentNote);
  return (
    <div className={styles.ideaCard}>
      <div className={styles.card_inner}>
       
        <div className={styles.header_section}>
          <p className={styles.idea_title}>{title}</p>
        </div>

        
        <p className={styles.idea_description} >{description}</p>
      </div>

      <div className={styles.card_footer}>
        <div
          className={styles.interesting_idea_button}>
          {category}
        </div>
      </div>
    </div>
  )
}
