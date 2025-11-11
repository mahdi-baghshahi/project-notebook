// src/redux/pinnedNotesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pinnedNotes: [], 
};

const pinnedNotesSlice = createSlice({
  name: 'pinnedNotes',
  initialState,
  reducers: {
    addPinnedNote: (state, action) => {
      const newNote = action.payload;
      console.debug('[pinnedNotesSlice] addPinnedNote payload:', newNote);
      const existingNote = state.pinnedNotes.find(note => note.id === newNote.id);
      if (!existingNote) {
        state.pinnedNotes.push(newNote);
      }
    },
  },
});

export const { addPinnedNote } = pinnedNotesSlice.actions;
export default pinnedNotesSlice.reducer;