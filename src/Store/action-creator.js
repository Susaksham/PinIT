import { noteSliceActon } from './notes-store'
const actionCreator = () => {
  return (dispatch) => {
    const notes = localStorage.getItem('notes')
    if (!notes) {
      dispatch(noteSliceActon.addingExistingNotes([]))
    } else {
      dispatch(noteSliceActon.addingExistingNotes(JSON.parse(notes)))
    }
  }
}
export default actionCreator
