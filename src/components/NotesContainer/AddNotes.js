import React, { Fragment, useRef } from 'react'
import classes from './AddNotes.module.css'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { noteSliceActon } from '../../Store/notes-store'
import { useHistory } from 'react-router-dom'
function AddNotes(props) {
  const title = useRef('')
  const noteParagraph = useRef('')
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(title.current.value)
    console.log(noteParagraph.current.value)
    const newNotes = {
      title: title.current.value,
      description: noteParagraph.current.value,
    }
    dispatch(noteSliceActon.addingNote(newNotes))
    props.removeAddNote()
  }

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.firstChild} onClick={props.removeAddNote}></div>
        <div className={classes.wrapper}>
          <form onSubmit={submitHandler}>
            <textarea
              className={classes.firstTextArea}
              ref={title}
              type="text"
              maxLength="100"
              placeholder="Title"
            ></textarea>
            <textarea
              className={classes.secondTextArea}
              ref={noteParagraph}
              type="text"
              placeholder="Take a note..."
            ></textarea>

            <div className={classes.buttons}>
              <Button text="Cancel" onClick={props.removeAddNote}>
                Cancel
              </Button>
              <Button text="save"></Button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  )
}

export default AddNotes
