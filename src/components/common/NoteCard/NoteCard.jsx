import React from 'react'
import styles from './NoteCard.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setActiveNote } from './../../../Redux/activeNoteSlice';


export default function NoteCard({ title , description, category , bg_color , id}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

const handleCardClick = () => {
        
        const noteData = { id, title, description, category, bg_color };
        dispatch(setActiveNote(noteData));

        const editRoute = category === 'Guidance Note' ? `/guidance/${id}` : `/interesting/${id}`;
        navigate(editRoute); 
    };
    const shouldShowImage = category === 'Guidance Note';
  return (
    <div className={styles.ideaCard} onClick={handleCardClick}>
      <div className={styles.card_inner}>
       
        <div className={styles.header_section}>
          <p className={styles.idea_title}>{title}</p>
        </div>
        {shouldShowImage && (
                    <div className={styles.imageContainer}>

                        <img 
                            src={ './images/mmm.png'} 
                            alt={`${category} thumbnail`} 
                            className={styles.cardImage} 
                        />
                    </div>
                )}
                


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
};
