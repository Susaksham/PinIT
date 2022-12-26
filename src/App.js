import './App.css'

import Header from './components/Header/Header'
import Container from './components/UI/Container'
import SearchBar from './components/SearchBar/SearchBar'
import Notes from './components/NotesContainer/Notes'
import AddNotes from './components/NotesContainer/AddNotes'
import { Switch, Route, Link } from 'react-router-dom'
import EditNote from './components/NotesContainer/EditNote'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import actionCreator from './Store/action-creator'

function App() {
  const [addNote, setAddNote] = useState(false)
  const [editNote, seteditNote] = useState(false)
  const [idOfNote, setIdOfNote] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreator())
  })
  const addNotes = () => {
    setAddNote(true)
  }
  const removeAddNote = () => {
    setAddNote(false)
  }

  const editNotesHandler = () => {
    seteditNote(true)
  }
  const removeEditNotesHandler = () => {
    seteditNote(false)
  }

  const getId = (id) => {
    setIdOfNote(id)
  }
  console.log(localStorage)
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Header></Header>
          <SearchBar></SearchBar>
          <Notes editNotes={editNotesHandler} idHandler={getId}></Notes>
          <button className="button" onClick={addNotes}>
            Add Notes
          </button>
          {addNote && <AddNotes removeAddNote={removeAddNote}></AddNotes>}
          {editNote && (
            <EditNote
              cancelEdit={removeEditNotesHandler}
              id={idOfNote}
            ></EditNote>
          )}
        </Route>

        <Route path="*">
          <p>404 Page</p>
        </Route>
      </Switch>
    </Container>
  )
}

export default App
