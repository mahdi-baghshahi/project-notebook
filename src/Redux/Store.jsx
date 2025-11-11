import { configureStore } from '@reduxjs/toolkit';
import activeNoteReducer from './activeNoteSlice'; 
import pinnedNotesReducer from './pinnedNotesSlice';
import finishedNotesReducer from './finishedNoteSlice';

export const store = configureStore({
  reducer: {
    activeNote: activeNoteReducer,
    pinnedNotes: pinnedNotesReducer,
    finishedNotes: finishedNotesReducer,
  },
});