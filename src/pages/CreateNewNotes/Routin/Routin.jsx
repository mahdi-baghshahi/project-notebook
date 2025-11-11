import { useState } from 'react';
import styles from './Routin.module.css';
import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
import CustomButton from '../../../components/common/Btn';
import { Pluse2 } from '../../../components/Icons/Icons';
import ItemSubNote from '../../../components/common/SubNote/ItemSubNote';
import BottomNavbarHome from '../../../components/common/BottomNavbarHome/BottomNavbarHome';

export default function Routin() {
    const [ items, setItems] = useState ([]);

    
    const handAddSubNotes = () => {
        const newItem = {
            id: Date.now(), 
            text: 'Title Here',
            content: 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement...', 
            completed: false
        };
        setItems(prevItems => [...prevItems, newItem]);
    };
    
    const handleDeleteSubNotes = (idToDelete) => {
        setItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
    };

  
    const handleTitleUpdate = (id, newText) => {
        setItems(prevItems => 
            prevItems.map(item => 
                item.id === id ? { ...item, text: newText } : item
            )
        );
    };
    const handleContentUpdate = (id, newContent) => {
        setItems(prevItems => 
            prevItems.map(item => 
                item.id === id ? { ...item, content: newContent } : item
            )
        );
    };

    
    return (
        <>
            <nav className={styles.navbar}>
                <div>
                    <Backlink addres={'/creatnewnotes'}>Back</Backlink>
                </div>
                <div >
                    <CustomButton 
                        sx={{width:'175px' , height:'38px' , '&:hover': { cursor: 'pointer'}}} 
                        className={styles.btnIcon} 
                        onClick={handAddSubNotes} >
                        <Pluse2 />
                        <span>Add Sub Notes</span>
                    </CustomButton>
                </div>
            </nav>
            <section>
               
                <div className={styles.ActiveSubNotes}>
                    <p style={{fontSize:'10px' , lineHeight:'100%', fontWeight:'400' , color:'#827D89'}}>ACTIVE SUB NOTES</p>
                </div >

               
                {items.map((item) => (
                    <div key={item.id} className={styles.ItemSubNote}>
                        <ItemSubNote 
                            title={item.text}
                            content={item.content} 
                            onDelete={() => handleDeleteSubNotes(item.id)}
                            onTitleChange={(newText) => handleTitleUpdate(item.id, newText)}
                            onContentChange={(newContent) => handleContentUpdate(item.id, newContent)}
                        />
                    </div>
                ))}
                <div className={styles.line}></div>
                
                <div className={styles.CompletedSubNotes}>
                    <p style={{fontSize:'10px' , lineHeight:'100%', fontWeight:'400' , color:'#827D89'}}>COMPLETED SUB NOTES</p>
                </div>
            </section>
            <BottomNavbarHome />
        </>
    );
}


// import React, { useState } from 'react'
// import styles from './Routin.module.css';
// import Backlink from '../../../components/common/Bars/Navbar/Navbar-1/Backlink';
// import CustomButton from '../../../components/common/Btn';
// import { Pluse2 } from '../../../components/Icons/Icons';
// import ItemSubNote from '../../../components/common/SubNote/ItemSubNote';


// export default function Routin() {
//     const [ items, setItems] = useState ([]);

//     const handAddSubNotes = () =>{
//         const newItem = {
//             id:Date.now() , 
//             text:'', 
//             completed:false
//     };
//     setItems([...items , newItem]);
// };
// const handleDeleteSubNotes = (idToDelete) => {
//         setItems(prevItems => prevItems.filter(item => item.id !== idToDelete));
//     };


//   return (
//     <>
//         <nav className={styles.navbar}>
//             <div>
//                <Backlink addres={'/settings'}>Back</Backlink>
//             </div>
//             <div >
//                <CustomButton sx={{width:'175px' , height:'38px'}} className={styles.btnIcon} onClick={handAddSubNotes}>
//                <Pluse2 />
//                <span>Add Sub Notes</span></CustomButton>
//             </div>
//         </nav>
//         <section>
//             <div className={styles.ActiveSubNotes}>
//                 <p style={{fontSize:'10px' , lineHeight:'100%', fontWeight:'400' , color:'#827D89'}}>ACTIVE SUB NOTES</p>
//             </div >
//             {items.map((item)=> (
//                 <div key={item.id} className={styles.ItemSubNote}>
//                     <ItemSubNote 
//                     onDelete={() => handleDeleteSubNotes(item.id)
                       
//                     }
//                     />
//                 </div>
//             ))}
//             <div className={styles.line}></div>
//             <div className={styles.CompletedSubNotes}>
//                 <p style={{fontSize:'10px' , lineHeight:'100%', fontWeight:'400' , color:'#827D89'}}>COMPLETED SUB NOTES</p>
//             </div>
//         </section>
//     </>
//   )
// }

// Routin.jsx