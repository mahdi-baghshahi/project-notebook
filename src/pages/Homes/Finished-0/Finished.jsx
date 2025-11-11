import React from 'react'
import { useSelector } from 'react-redux';
// import NoteCard from '../../../components/common/NoteCard/NoteCard';
import styles from './Finished.module.css';
// import Styledtext from '../../../components/common/styled-text/Styledtext';
import NoteCardFinished from './../../../components/common/NoteCardFinished/NoteCardFinished'



import Direction from '../../../assets/images/pages/homes/Direction.svg';
import Illustration5 from '../../../assets/images/pages/homes/Illustration5.svg';
import Illustration10 from '../../../assets/images/pages/homes/Illustration10.svg';

export default function Finished() {
  const finishedList = useSelector((state) => state.finishedNotes.finishedNotes);
  const isEmpty = finishedList.length === 0 ;
  const EmptyStatee = (
        <section  className={styles.Finish0Notes}>
      <div className={styles.img_count}>
        <img   src={Illustration5} className={styles.img_finish0notess} alt='Illustration5'/>
      </div>
      <div className={styles.text_finish0notes}>
        <p style={{fontSize:"24px" , fontWeight:"700" , lineHeight:"120%" , color:"#180E25" , marginTop:"24px"}}>Start Your Journey</p>
        <p style={{fontSize:"14px" , fontWeight:"400" , lineHeight:"140%" , color:"#827D89" }}>Every big step start with small step.<br />
               Notes your first idea and start <br />your journey!</p>
      </div>
      <div className={styles.img_count_2} >
        <img src={Direction} alt='Direction'/>
      </div>
    </section>
  );
      const FilledStatee = (
        <div className={styles.FinishedBannerContainer}>
        <nav  className={styles.Finish0NotesNav}>
          <div className={styles.PurpleBanner}>
            <p>Amazing Journey!</p>
            <p className={styles.SubText}>
              <span>You have successfully</span>
              <span>finished 5 notes</span>
            </p>
          </div>
          <div className={styles.IllustrationWrapper}>
            <img src={Illustration10} alt='Illustration10'/>
          </div>
        </nav>
        
        <div className={styles.finishedListContainer}>
          {finishedList.map((note) => ( 
            <NoteCardFinished
                    key={note.id} 
                    title={note.title}
                    description={note.description}
                    category={note.category}
               />
           ))}
        </div>
        </ div>
      
    )
  return(
    <div>
      {isEmpty ? EmptyStatee : FilledStatee}
    </div>
  )
}

//     const active = useSelector((state) => state.activeNote.currentNote);
//   const pinnedList = useSelector((state) => state.pinnedNotes.pinnedNotes);
//     const isnoteempty = !active.title.trim() && !active.description.trim() && pinnedList.length === 0; 
  // const EmptyState = (
  //       <section  className={styles.Finish0Notes}>
  //     <div className={styles.img_count}>
  //       <img   src='images/Illustration5.svg' className={styles.img_finish0notess} alt='m'/>
  //     </div>
  //     <div className={styles.text_finish0notes}>
  //       <p style={{fontSize:"24px" , fontWeight:"700" , lineHeight:"120%" , color:"#180E25" , marginTop:"24px"}}>Start Your Journey</p>
  //       <p style={{fontSize:"14px" , fontWeight:"400" , lineHeight:"140%" , color:"#827D89" }}>Every big step start with small step.<br />
  //              Notes your first idea and start <br />your journey!</p>
  //     </div>
  //     <div className={styles.img_count_2} >
  //       <img src='images/Direction.svg' alt='m'/>
  //     </div>
  //   </section>



//   );
// const FilledState = (
//         <div className={styles.filledContentWrapper}>
            
       
//             {pinnedList.length > 0 && (
//                 <div className={styles.sectionGroup}>
            
//                     <div className={styles.pinnedHeader}>
//                         <Styledtext variant={'h6'}>Pinned Notes</Styledtext>
//                         <a href='#' className={styles.viewAllLink}>View all</a>
//                     </div>

           
//                     <div className={styles.horizontalScrollContainer}>
//                         {pinnedList.map((note) => (
                           
//                             <NoteCard
//                                 key={note.id} 
//                                 title={note.title}
//                                 description={note.description}
//                                 category={note.category}
//                                 bg_color={note.bg_color}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}
            
      
//             {(!active.title.trim() || !active.description.trim()) ? (
//                 <div className={styles.sectionGroup}>
           
//                     <div className={styles.headerRow}>
//                         <Styledtext variant={'h6'}>Interesting Idea</Styledtext>
//                         <a href='#' className={styles.viewAllLink}>View all</a>
//                     </div>
                    
 
//                     <div className={styles.horizontalScrollContainer}>
//                         <NoteCard
//                             key="active-note" 
//                             title={active.title}
//                             description={active.description}
//                             category={active.category}
//                             bg_color={active.bg_color}
//                         />
//                     </div>
//                 </div>
//             ) : null}

           


//         </div>
//     );

//   return (
//     <>
//     {isnoteempty ? EmptyState : FilledState}
//     </>
//   )
// }
  

