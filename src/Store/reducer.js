import { configureStore } from '@reduxjs/toolkit'
import NotesReducer from './notes-store'
const store = configureStore({
  reducer: { notesData: NotesReducer },
})

export default store
