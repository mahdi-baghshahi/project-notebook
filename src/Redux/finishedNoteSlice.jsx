import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    finishedNotes: [], // آرایه برای نگهداری یادداشت‌های تکمیل شده
};

const finishedNotesSlice = createSlice({
    name:'finishedNote',
    initialState ,
    reducers : {
        addFinishedNote : (state , action) => {
            const finishedNote = action.payload;

            if (finishedNote.id && !state.finishedNotes.find(note => note.id === finishedNote.id)){
                state.finishedNotes.push(finishedNote);
            }
        }
    },
});

export const { addFinishedNote } = finishedNotesSlice.actions;
export default finishedNotesSlice.reducer;