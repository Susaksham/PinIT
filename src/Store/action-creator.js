import { noteSliceActon } from './notes-store'
const actionCreator = () => {
  return (dispatch) => {
    var keys = Object.keys(localStorage),
      i = keys.length
    console.log(keys)
    while (i--) {
      const obj = { id: keys[i], ...JSON.parse(localStorage.getItem(keys[i])) }
      console.log(obj)
      dispatch(
        noteSliceActon.addingExistingNotes({
          ...obj,
        }),
      )
    }

    // for (let i = 0; i < localStorage.length; i++) {
    //   dispatch(noteSliceActon.addingExistingNotes({}))
    // }
  }
}
export default actionCreator
