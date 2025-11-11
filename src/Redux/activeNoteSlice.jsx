
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentNote : { 
        id : null , 
        title : '',
        description : '',
        category: 'Interesting Idea',
        bg_color: '#FFFFFF',
        
    },
};

const activeNoteSlice = createSlice({
    name:"activeNote",
    initialState,
    reducers:{
        updateActiveNote : (state , action) => {
           state.currentNote = { ...state.currentNote , ...action.payload}; 
           console.debug('[activeNoteSlice] updateActiveNote payload:', action.payload);
           console.debug('[activeNoteSlice] new currentNote:', state.currentNote);
        },
       resetActiveNote : (state) => {
        state.currentNote = initialState.currentNote;
       },
    setActiveNote : (state , action ) => {
        state.currentNote = action.payload;
    }

    }
});


export const { updateActiveNote  , resetActiveNote , setActiveNote} = activeNoteSlice.actions;
export default activeNoteSlice.reducer;