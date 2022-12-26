import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  notesArray: [
    // { id: 'id1', title: 'firstNote', description: 'this is my first note' },
    // { id: 'id2', title: 'secondNote', description: 'this is my second note' },
    // { id: 'id3', title: 'thirdNote', description: 'this is my third note' },
    // { id: 'id4', title: 'fourthNote', description: 'this is my fourth note' },
  ],

  inputString: '',
}

const noteSlice = createSlice({
  name: 'slicename',
  initialState: initialState,
  reducers: {
    addingNote(state, action) {
      state.iterator = state.iterator + 1
      const id1 = Math.floor(Math.random() * 100)
      const id2 = Math.floor(Math.random() * 100)
      const id3 = Math.floor(Math.random() * 100)
      const id = `id${id1}${id2}${id3}`
      console.log(id)
      console.log(action.payload)
      var today = new Date()
      var dd = String(today.getDate()).padStart(2, '0')
      var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
      var yyyy = today.getFullYear()

      today = mm + '/' + dd + '/' + yyyy
      const newElement = { ...action.payload, id, date: today }
      state.notesArray.push(newElement)
      localStorage.setItem(`notes`, `${JSON.stringify(state.notesArray)}`)
      console.log(localStorage.getItem(`${id}`))
    },
    addingExistingNotes(state, action) {
      console.log(action.payload)
      const newElement = [...action.payload]
      state.notesArray = newElement
    },
    removingNote(state, action) {
      console.log(action.payload)
      const filterdArray = state.notesArray.filter((element) => {
        return element.id !== action.payload
      })

      localStorage.setItem(`notes`, `${JSON.stringify([...filterdArray])}`)

      state.notesArray = [...filterdArray]
    },
    changeInputString(state, action) {
      console.log('inputPayload ' + action.payload)
      state.inputString = action.payload
    },
    editNote(state, action) {
      console.log(action.payload)
      const obj = { ...action.payload }
      console.log(obj.id)
      const findIndex = state.notesArray.findIndex((element) => {
        return element.id === obj.id
      })
      console.log(findIndex)
      state.notesArray[findIndex] = obj
      localStorage.setItem(`notes`, `${JSON.stringify(state.notesArray)}`)
    },
  },
})

export const noteSliceActon = noteSlice.actions
export default noteSlice.reducer
