import React, { Fragment, useRef } from 'react'
import classes from './AddNotes.module.css'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { noteSliceActon } from '../../Store/notes-store'
import { useHistory } from 'react-router-dom'
function AddNotes() {
  const title = useRef('')
  const noteParagraph = useRef('')
  const dispatch = useDispatch()

  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault()

    console.log(title.current.value)
    console.log(noteParagraph.current.value)
    const newNotes = {
      title: title.current.value,
      description: noteParagraph.current.value,
    }
    dispatch(noteSliceActon.addingNote(newNotes))
    history.push('/')
  }
  return (
    <React.Fragment>
      <div className={classes.container}>
        <form onSubmit={submitHandler}>
          <input ref={title} type="text"></input>
          <input ref={noteParagraph} type="text"></input>
          <Button text="save"></Button>
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddNotes
