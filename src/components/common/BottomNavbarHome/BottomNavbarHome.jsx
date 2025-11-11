// import React, { useState } from 'react';
// import styles from './BottomNavbarHome.module.css';
// import Pinmodal from '../components/pop/Pinmodal';
// import { Outlet } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux'; // ⬅️
// import { addPinnedNote } from '../Redux/pinnedNotesSlice'; // ⬅️
// import testf from './Homes/Finished-p/Finished-p'
// export default function BottomNavbarHome() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//    const dispatch = useDispatch();
// // const activeNote = useSelector((state) => state.activeNote.curentNote); 
// const activeNote = useSelector((state) => state.activeNote.currentNote);// ✅ استفاده از املای curentNote
// const pinnedNotes = useSelector((state) => state.pinnedNotes.pinnedNotes);

//   const handlePinClick = () => {
//     // 1. بررسی کنیم که آیا یادداشت از قبل پین شده است (بر اساس ID یکتا)
//     const isAlreadyPinned = pinnedNotes.some(note => note.id === activeNote.id);

//     if (isAlreadyPinned) {
//       // اگر از قبل پین شده بود، مودال را با پیام مناسب باز می‌کنیم
//       setIsModalOpen(true);
//       return; 
//     }

//     // 2. ذخیره نهایی یادداشت در لیست پین شده‌ها
//     // تمام داده‌های ضروری (از جمله id, title, description, color) از activeNote می‌آید.
//     dispatch(addPinnedNote(activeNote));
    
//     // 3. باز کردن مودال موفقیت
//     setIsModalOpen(true);
//   };

//   // const handlePinClick = () => {
//   //   setIsModalOpen(true);
//   // };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//     {/* <Outlet /> */}
//       <div className={styles.BottomNavbarHome}>
        
//         <div className={styles.lastEditedContainer}>
//           <p className={styles.textnav}>Last edited on 19.30</p>
//         </div>
//         <div className={styles.iconNavbar}>
//           <div className={styles.iconButton}><img src='images/navbarbottom/Search.svg'  /></div>

//           <div className={styles.iconButton} onClick={handlePinClick}>
//             <img src='images/navbarbottom/Pin.svg'  />
//           </div>
//           <div className={`${styles.iconButton} ${styles.pointer}`}>
//             <img src='images/navbarbottom/dots-horizontal.svg'  />
//           </div>
//           <link add></link>
//           <a href='/testf'>ddd</a>
//         </div>
//       </div>
      
      
//       <Pinmodal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// }
// BottomNavbarHome.jsx
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'; // ⬅️
// // import { addPinnedNote } from '../redux/pinnedNotesSlice'; // ⬅️
// import { addPinnedNote } from '../Redux/pinnedNotesSlice';
// import styles from './BottomNavbarHome.module.css';
// import Pinmodal from '../components/pop/Pinmodal';
// // ... وارد کردن سایر موارد

// export default function BottomNavbarHome() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const dispatch = useDispatch(); // ⬅️
  
//   // ⬅️ خواندن داده‌های یادداشت فعال از Redux
//   const activeNote = useSelector((state) => state.activeNote.currentNote);
//   const pinnedNotes = useSelector((state) => state.pinnedNotes.pinnedNotes);

//   const handlePinClick = () => {
//     // 1. بررسی کنیم که آیا یادداشت از قبل پین شده است (بر اساس ID یکتا)
//     const isAlreadyPinned = pinnedNotes.some(note => note.id === activeNote.id);

//     if (isAlreadyPinned) {
//       // اگر از قبل پین شده بود، مودال را با پیام مناسب باز می‌کنیم
//       setIsModalOpen(true);
//       return; 
//     }

//     // 2. ذخیره نهایی یادداشت در لیست پین شده‌ها
//     // تمام داده‌های ضروری (از جمله id, title, description, color) از activeNote می‌آید.
//     dispatch(addPinnedNote(activeNote));
    
//     // 3. باز کردن مودال موفقیت
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div className={styles.BottomNavbarHome}>
//         {/* ... سایر دکمه‌ها ... */}
//         <div className={styles.iconNavbar}>
//           {/* ... دکمه جستجو ... */}
//           <div className={styles.iconButton} onClick={handlePinClick}>
//             <img src='images/navbarbottom/Pin.svg' />
//           </div>
//           {/* ... سایر دکمه‌ها ... */}
//         </div>
//       </div>
      
//       {/* ⬅️ می‌توانید یک prop برای نمایش پیام موفقیت/تکراری به Pinmodal بدهید */}
//       <Pinmodal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// }

////////////////////////
// import React, { useState } from 'react';
// import styles from './BottomNavbarHome.module.css';
// import Pinmodal from '../components/pop/Pinmodal';
// import { Outlet } from 'react-router-dom';

// export default function BottomNavbarHome() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handlePinClick = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//     {/* <Outlet /> */}
//       <div className={styles.BottomNavbarHome}>
        
//         <div className={styles.lastEditedContainer}>
//           <p className={styles.textnav}>Last edited on 19.30</p>
//         </div>
//         <div className={styles.iconNavbar}>
//           <div className={styles.iconButton}><img src='images/navbarbottom/Search.svg'  /></div>

//           <div className={styles.iconButton} onClick={handlePinClick}>
//             <img src='images/navbarbottom/Pin.svg'  />
//           </div>
//           <div className={`${styles.iconButton} ${styles.pointer}`}>
//             <img src='images/navbarbottom/dots-horizontal.svg'  />
//           </div>
//         </div>
//       </div>
      
      
//       <Pinmodal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// }

// import React, { useState } from 'react';
// import styles from './BottomNavbarHome.module.css';
// import Pinmodal from '../components/pop/Pinmodal';
// import { Outlet } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { addPinnedNote } from '../Redux/pinnedNotesSlice'; 
// import { updateActiveNote } from '../Redux/activeNoteSlice';
// import { v4 as uuidv4 } from 'uuid';

// export default function BottomNavbarHome() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const dispatch = useDispatch();
//   
//   // ✅ استفاده از املای صحیح currentNote
//   const activeNote = useSelector((state) => state.activeNote.currentNote);
//   const pinnedNotes = useSelector((state) => state.pinnedNotes.pinnedNotes);

//     const handlePinClick = () => {
//         // لاگ برای دیباگ
//         console.log('[BottomNavbarHome] activeNote before pin:', activeNote);
//         console.log('[BottomNavbarHome] pinnedNotes before pin:', pinnedNotes);

//         // اگر activeNote موجود نیست، یک آبجکت خالی می‌سازیم
//         let noteToPin = activeNote || {};

//         // اگر id وجود ندارد، یکی ایجاد و در state ثبت می‌کنیم
//         if (!noteToPin.id) {
//             const newId = uuidv4();
//             dispatch(updateActiveNote({ id: newId }));
//             noteToPin = { ...noteToPin, id: newId };
//             console.debug('[BottomNavbarHome] generated id for activeNote:', newId);
//         }

//         // بررسی اینکه از قبل پین نشده باشد
//         const isAlreadyPinned = pinnedNotes.some(note => note.id === noteToPin.id);
//         if (isAlreadyPinned) {
//             setIsModalOpen(true);
//             return;
//         }

//         // dispatch با آبجکت کامل
//         dispatch(addPinnedNote(noteToPin));
//         console.debug('[BottomNavbarHome] dispatched addPinnedNote for id:', noteToPin.id);
//         setIsModalOpen(true);
//     };
    
//   // ✅ تابع گم‌شده که باید تعریف می‌شد.
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//     <Outlet />
//       <div className={styles.BottomNavbarHome}>
//         
//         <div className={styles.lastEditedContainer}>
//           <p className={styles.textnav}>Last edited on 19.30</p>
//         </div>
//         <div className={styles.iconNavbar}>
//           <div className={styles.iconButton}><img src='images/navbarbottom/Search.svg'  /></div>

//           <div className={styles.iconButton} onClick={handlePinClick}>
//             <img src='images/navbarbottom/Pin.svg'  />
//           </div>
//           <div className={`${styles.iconButton} ${styles.pointer}`}>
//             <img src='images/navbarbottom/dots-horizontal.svg'  />
//           </div>
//           <link add></link>
//           <a href='/testf'>ddd</a>
//         </div>
//       </div>
//       
//       
//       <Pinmodal isOpen={isModalOpen} onClose={closeModal} />
//     </>
//   );
// }
/////////////////////////////////////////////////
import React, { useState } from 'react';
import styles from './BottomNavbarHome.module.css';
import Pinmodal from '../../pop/Pinmodule/Pinmodal';
import { Outlet, Link } from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { addPinnedNote } from '../../../Redux/pinnedNotesSlice'; 
import { updateActiveNote } from '../../../Redux/activeNoteSlice';
import { v4 as uuidv4 } from 'uuid';
import Pointmodal from '../../pop/Pointmodal/Pointmodal';
import { addFinishedNote  } from '../../../Redux/finishedNoteSlice';
import { resetActiveNote } from './../../../Redux/activeNoteSlice';


import Search from '../../../assets/images/navbarbottom/Search.svg';
import MoreOptions from '../../../assets/images/navbarbottom/dots-horizontal.svg';
import PinNote from '../../../assets/images/navbarbottom/Pin.svg';


export default function BottomNavbarHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalpointOpen, setIsModalpointOpen] = useState(false);
  const dispatch = useDispatch();
  
  
  const activeNote = useSelector((state) => state.activeNote.currentNote);
  const pinnedNotes = useSelector((state) => state.pinnedNotes.pinnedNotes);
  const handlepointClick = () => {
    // open the Point modal
    setIsModalpointOpen(true);
  };
  const handlePinClick = () => {
    // اگر activeNote تهی بود، از یک آبجکت خالی برای جلوگیری از خطا استفاده کن
    const noteToPin = activeNote || {};

    // ⚠️ هشدار: اگر activeNote.id خالی باشد، اینجا یک ID جدید ایجاد می‌شود. 
    // بهتر است این کار در کامپوننت ایجاد/ویرایش یادداشت انجام شود.
    if (!noteToPin.id) {
        const newId = uuidv4();
        
       
        dispatch(updateActiveNote({ id: newId })); 
        
        
        const finalNoteToPin = { ...noteToPin, id: newId };
        
      
        const isAlreadyPinned = pinnedNotes.some(note => note.id === finalNoteToPin.id);
        
        if (isAlreadyPinned) {
            setIsModalOpen(true);
            return;
        }

        dispatch(addPinnedNote(finalNoteToPin));
        console.debug('[BottomNavbarHome] generated and pinned note with id:', newId);
        setIsModalOpen(true);
        return; 
    }

   
    const isAlreadyPinned = pinnedNotes.some(note => note.id === noteToPin.id);
    
    if (isAlreadyPinned) {
        setIsModalOpen(true);
        return;
    }

   
    dispatch(addPinnedNote(noteToPin));
    console.debug('[BottomNavbarHome] pinned existing note with id:', noteToPin.id);
    setIsModalOpen(true);
  };
    
  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalpointOpen(false);
  };

  const markfinished = () => {
    dispatch(addFinishedNote(activeNote));
    dispatch(resetActiveNote());
  }

  return (
    <>
   
    <Outlet /> 

    <div className={styles.BottomNavbarHome}>
      <div className={styles.lastEditedContainer}>
        <p className={styles.textnav}>Last edited on 19.30</p>
      </div>
      <div className={styles.iconNavbar}>
        <div className={styles.iconButton}><img src={Search} alt="Search" /></div>

        <div className={styles.iconButton} onClick={handlePinClick}>
          <img src={PinNote} alt="Pin Note" />
        </div>
        <div className={`${styles.iconButton} ${styles.pointer}`} onClick={handlepointClick} >
          <img src={MoreOptions} alt="More Options" />
        </div>
      </div>
    </div>
      
    <Pinmodal isOpen={isModalOpen} onClose={closeModal} />
    <Pointmodal isopen={isModalpointOpen} onClose={closeModal} markfinished={markfinished} />
    </>
  );
}