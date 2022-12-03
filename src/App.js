import './App.css'

import Header from './components/Header/Header'
import Container from './components/UI/Container'
import SearchBar from './components/SearchBar/SearchBar'
import Notes from './components/NotesContainer/Notes'
import AddNotes from './components/NotesContainer/AddNotes'
import { Switch, Route, Link } from 'react-router-dom'
import EditNote from './components/NotesContainer/EditNote'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import actionCreator from './Store/action-creator'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreator())
  })
  console.log(localStorage)
  return (
    <Container>
      <Switch>
        <Route path="/" exact>
          <Header></Header>
          <SearchBar></SearchBar>
          <Notes></Notes>
          <Link to="/addNotes">Add notes</Link>
        </Route>
        <Route path="/addNotes" exact>
          <AddNotes></AddNotes>
        </Route>
        <Route path="/note/:noteId">
          <EditNote></EditNote>
        </Route>

        <Route path="*">
          <p>this is done</p>
        </Route>
      </Switch>
    </Container>
  )
}

export default App
