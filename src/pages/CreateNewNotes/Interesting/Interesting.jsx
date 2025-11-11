import React, { useEffect } from 'react'
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import styles from './Interesting.module.css'
import Styledtext from '../../../components/common/styled-text/Styledtext';
import Btn from '../../../components/common/Btn';
import  { useState, useRef } from 'react'; 
import ContentEditable from 'react-contenteditable';
import { updateActiveNote  } from '../../../Redux/activeNoteSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 
import BottomNavbarHome from '../../../components/common/BottomNavbarHome/BottomNavbarHome';
// import { setNewNoteId } from '/src/Redux/activeNoteSlice.jsx';

const initialIdeaHTML = `
  <p>Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.</p>
  <p>There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.</p>
`;

const NOTE_CATEGORY = 'Interesting Idea';

export default function Interesting() {
  const [title, setTitle] = useState('💡 New Product Ideas');
  const [ideaHtml, setIdeaHtml] = useState(initialIdeaHTML);
  const [noteId, setNoteId] = useState(null); 
  
  const contentRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {

    if (!noteId) {
      const newId = uuidv4();
      setNoteId(newId);
      
    
      dispatch(updateActiveNote({ 
        id: newId, 
        title: title, 
        description: ideaHtml, 
        category: NOTE_CATEGORY 
      }));
    }
  }, [dispatch, noteId]); 

  useEffect(() => {
  
    if (!noteId) return; 

    
    const handler = setTimeout(() => {
    
        dispatch(updateActiveNote({
    
            id: noteId,
            title: title,
            description: ideaHtml,
            category: NOTE_CATEGORY 
        }));
    }, 1000); 

    return () => {
        clearTimeout(handler);
    };

  }, [title, ideaHtml, dispatch, noteId]); 


  const handleIdeaChange = (evt) => {
    setIdeaHtml(evt.target.value);
  };
  
  const handleTitleChange = (evt) => {
    setTitle(evt.target.value); 
  };


  return (
    <div className={styles.Interesting_container}> 
      <div className={styles.nav_int}>
        <Backlink addres={'/creatnewnotes'} className={styles.Backlink_newnotes}>Back</Backlink>
      </div>
      <div className={styles.Interesting}>
        <div className={styles.hr_int}>
          <ContentEditable html={title} disabled={false}
            onChange={handleTitleChange}
            tagName='h2'
            className={styles.editableTitle}
          />
          <ContentEditable
            innerRef={contentRef} 
            html={ideaHtml} 
            disabled={false} 
            onChange={handleIdeaChange} 
            tagName='div' 
            className={styles.editableContent} 
          />
        </div>
        <div>
          <p style={{fontSize:'12px', color:'#827D89' , fontWeight:'400'}}>Reminder set on 15/07/2021, 18:30</p>
        </div>
        <div >
          <div className={styles.tag_text}>
            <Btn sx={{width:'80px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0" , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Important</span></Btn>
            <Btn sx={{width:'100px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0" , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Top Priority</span></Btn>
            <Btn sx={{width:'190px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0" , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Should be Done This Week</span></Btn>
            <Btn sx={{width:'80px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0" , '&:hover': { background: '#D7D5D8', cursor: 'pointer'}}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Important</span></Btn>
          </div>
        </div>

      </div>
      <div>
        <BottomNavbarHome />
      </div>
    </div>
  );
}