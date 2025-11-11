import styles from './ItemSubNote.module.css';
import { DragHandler } from '../../Icons/Icons';
import { CloseBotton } from '../../Icons/Icons';
import ContentEditable from 'react-contenteditable';


export default function ItemSubNote({ title,content ,  onDelete , onTitleChange ,  onContentChange}) {

const handleTitleEditableChange = (evt) => {
        onTitleChange(evt.target.value); 
    };
const handleContentEditableChange = (evt) => { 
        onContentChange(evt.target.value); 
    };
    

    return (
        <div className={styles.noteContainer}>
            <div>
                <DragHandler />
            </div>
            <div className={styles.ContainerNote}>
                
                <div className={styles.radioPlaceholder}>
                    <div className={styles.circle}>
                        <input type='checkbox'></input>
                    </div>

                    <ContentEditable 
                         html={title} 
                         disabled={false}
                        onChange={handleTitleEditableChange} 
                        tagName='h2'
                        className={styles.editableTitle}
                    />
                </div>
                
                <div className={styles.line}></div>
                
                <div className={styles.Containercontent}> 
                       <ContentEditable                        
                         html={content} 
                         disabled={false}
                         onChange={handleContentEditableChange} // اتصال به تابع جدید
                         tagName='p'
                         className={styles.editableSection} 
                        />
                </div>
            </div>
            <div className={styles.closeButton} onClick={onDelete}>
                <CloseBotton />
            </div>
            
        </div>
    );
}

// import React from 'react'
// import styles from './ItemSubNote.module.css';
// import { DragHandler } from '../../Icons/Icons';
// import { CloseBotton } from '../../Icons/Icons';

// export default function ItemSubNote({ title, content , onDelete }) {
//   return (
//         <div className={styles.noteContainer}>
//             <div>
//                 <DragHandler />
//             </div>
//             <div className={styles.ContainerNote}>
                
//                 <div className={styles.radioPlaceholder}>
//                   <div className={styles.circle}>
//                      <input type='checkbox'></input>
//                   </div>
//                   <div className={styles.title}>{title || 'Title Here'}</div>
//                 </div>
//                 <div className={styles.line}></div>
//                 <div className={styles.Containercontent}>      
//                    <p className={styles.content}>
//                       {content || 'Create a mobile app UI Kit that provide a basic notes functionality but with some improvement...'}
//                    </p>
//                 </div>
//             </div>
//              <div className={styles.closeButton} onClick={onDelete}>
//                 <CloseBotton />
//              </div>
//     </div>
//   )
// }






// ItemSubNote.jsx
