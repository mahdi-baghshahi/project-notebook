// import React, { useRef, useState } from 'react';
// import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
// import BottomNavbarHome from '../../BottomNavbarHome';
// import styles from './Guidance.module.css';
// import Btn from '../../../components/common/Btn';
// import ContentEditable from 'react-contenteditable';

// const initialIdeaHTML = `
//   <p>Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.</p>
//   <p>There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.</p>
// `;

// export default function Guidance() {
//     const [titlee , setTitle] = useState('💡 New Product Ideas');
    
//     const [ideaHtml , setIdeaHtml] = useState(initialIdeaHTML); 
    
 
//     const contentRef = useRef(null);

//     const handleIdeaChange = (e) => {
//         setIdeaHtml(e.target.value);
//     };
    
//     const handleTitleChange = (e) => {
//         setTitle(e.target.value.replace(/<[^>]*>/g, '')); 
//     };

//     return (
//         <>
//         <nav className={styles.navbar_guid}>
//             <Backlink  addres={'/creatnewnotes'}>Back</Backlink>
//         </nav>
//         <section className={styles.section_guid}>
//             <div>
               
//                 <ContentEditable
//                 disabled={false}
//                 onChange={handleTitleChange}
//                 html={titlee}
//                 tagName='h2'
//                 className={styles.editableTitle}
//                 />
//             </div>
//             <div>
//                 <img src='./images/mmm.png' alt='laptop'/>
//             </div>

            
//             <div className={styles.text_guid}>
                
//                 <ContentEditable
//                 innerRef={contentRef} 
//                 html={ideaHtml}  
//                 disabled={false} 
//                 onChange={handleIdeaChange} 
//                 tagName='div' 
//                 className={styles.editableContent} 
//                 />
                
//             </div>
            
//             <div className={styles.pReminder}>
//                 <p style={{fontSize:'12px', color:'#827D89' , fontWeight:'400'}}>Reminder set on 15/07/2021, 18:30</p>
//             </div>
            
//             <div >
//                 <div className={styles.tag_text}>
//                     <Btn sx={{width:'80px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0"}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Important</span></Btn>
//                     <Btn sx={{width:'100px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0"}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Top Priority</span></Btn>
//                     <Btn sx={{width:'190px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0"}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Should be Done This Week</span></Btn>
//                     <Btn sx={{width:'80px', height:'27px', background:'#EFEEF0' , border:"#EFEEF0"}} ><span style={{fontSize:"12px", fontWeight:"400", lineHeight:"100%" , color:"#827D89"}}>Important</span></Btn>
//                 </div>
//             </div>
//         </section>
//         <BottomNavbarHome />
//         </>
//     )
// }
//////////////////////
import React, { useRef, useState , useEffect} from 'react';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import BottomNavbarHome from '../../../components/common/BottomNavbarHome/BottomNavbarHome';
import styles from './Guidance.module.css';
import Btn from '../../../components/common/Btn';
import ContentEditable from 'react-contenteditable';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { updateActiveNote } from '../../../Redux/activeNoteSlice';


import  Laptop  from '../../../assets/images/pages/craetenewnote/mmm.png';

const initialIdeaHTML = `
  <p>Create a mobile app UI Kit that provide a basic notes functionality but with some improvement.</p>
  <p>There will be a choice to select what kind of notes that user needed, so the experience while taking notes can be unique based on the needs.</p>
`;

const NOTE_CATEGORY = 'Guidance Note';

export default function Guidance() {
    const [title , setTitle] = useState('💡 New Product Ideas'); 
    const [ideaHtml , setIdeaHtml] = useState(initialIdeaHTML); 
    const contentRef = useRef(null);
    const [noteId, setNoteId] = useState(null);
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

    const handleIdeaChange = (e) => {
        setIdeaHtml(e.target.value);
    };
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value.replace(/<[^>]*>/g, '')); 
    };

    return (
        <>
        <nav className={styles.navbar_guid}>
            <Backlink  addres={'/creatnewnotes'}>Back</Backlink>
        </nav>
        <section className={styles.section_guid}>
            <div>
               
                <ContentEditable
                disabled={false}
                onChange={handleTitleChange}
                // html={titlee}
                html={title}
                tagName='h2'
                className={styles.editableTitle}
                />
            </div>
            <div>
                <img src={Laptop} alt='laptop'/>
            </div>
            <div className={styles.text_guid}>
                
                <ContentEditable
                innerRef={contentRef} 
                html={ideaHtml}  
                disabled={false} 
                onChange={handleIdeaChange} 
                tagName='div' 
                className={styles.editableContent} 
                />
                
            </div>
            
            <div className={styles.pReminder}>
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
        </section>
        <BottomNavbarHome />
        </>
    )
}