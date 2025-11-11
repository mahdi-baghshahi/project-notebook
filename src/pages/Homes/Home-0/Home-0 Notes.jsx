import React from 'react'
import styles from './Home0Notes.module.css'
import {HomeContainer} from './Home.styles'
import { useSelector } from 'react-redux';
import Styledtext from '../../../components/common/styled-text/Styledtext';
import NoteCard from '../../../components/common/NoteCard/NoteCard';


import Direction from '../../../assets/images/pages/homes/Direction.svg';
import Illustration from '../../../assets/images/pages/homes/Illustration.svg';



export default function Home0Notes() {
      const active = useSelector((state) => state.activeNote.currentNote);
    const pinnedList = useSelector((state) => state.pinnedNotes.pinnedNotes);
      const isnoteempty = !active.title.trim() && !active.description.trim() && pinnedList.length === 0; 
    const EmptyState = (
    <HomeContainer >

      <div className={"img_count"}>
        <img   src={Illustration} className={styles.img_home0notess} alt='m'/>
      </div>
      <div className={styles.text_home0notes}>
        <p style={{fontSize:"24px" , fontWeight:"700" , lineHeight:"120%" , color:"#180E25" , marginTop:"24px"}}>Start Your Journey</p>
        <p style={{fontSize:"14px" , fontWeight:"400" , lineHeight:"140%" , color:"#827D89" }}>Every big step start with small step.<br />
               Notes your first idea and start <br />your journey!</p>
      </div>
      <div className={styles.img_count_2} >
        <img src={Direction} />
      </div>
         

    </HomeContainer>
  
  
  
    );
  const FilledState = (
          <div className={styles.notesContainer}>
              
         
              {pinnedList.length > 0 && (
                <div className={styles.sectionGroup}>
            
                    <div className={styles.pinnedHeader}>
                        <Styledtext variant={'h6'}>Pinned Notes</Styledtext>
                        <a href='#' className={styles.viewAllLink}>View all</a>
                    </div>
  
             
                      <div className={styles.horizontalScrollContainer}>
                          {pinnedList.map((note) => (
                             
                              <NoteCard
                                  key={note.id} 
                                  id={note.id}
                                  title={note.title}
                                  description={note.description}
                                  category={note.category}
                                  bg_color={note.bg_color}
                              />
                          ))}
                      </div>
                  </div>
              )}
              
        
              {(!active.title.trim() || !active.description.trim()) ? (
                  <div className={styles.sectionGroup}>
             
                      <div className={styles.headerRow}>
                          <Styledtext variant={'h6'}>Interesting Idea</Styledtext>
                          <a href='#' className={styles.viewAllLink}>View all</a>
                      </div>
                      
   
                      <div className={styles.horizontalScrollContainer}>
                          <NoteCard className={styles.hiding_container}
                              key={active.id} 
                              title={active.title}
                              description={active.description}
                              category={active.category}
                              bg_color={active.bg_color}
                          />
                      </div>
                  </div>
              ) : null}
  
             
  
          </div>
      );
  
    return (
      <>
      {isnoteempty ? EmptyState : FilledState}
      </>
    )
  }
    

