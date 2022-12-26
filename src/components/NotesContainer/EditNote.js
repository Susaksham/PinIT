import React, { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { noteSliceActon } from '../../Store/notes-store'
import classes from './EditNote.module.css'
import Button from '../UI/Button'
function EditNote(props) {
  // const params = useParams()
  const title = useRef('')
  const noteParagraph = useRef('')
  const dispatch = useDispatch()
  const array = useSelector((state) => state.notesData.notesArray)
  const indexOfElement = useRef()
  console.log('incomming array + ' + array)
  console.log('incomming id' + props.id)
  indexOfElement.current = array.findIndex((element) => {
    return element.id === props.id
  })

  console.log(indexOfElement.current)

  const submitHandler = (e) => {
    e.preventDefault()

    console.log(title.current.value)
    console.log(noteParagraph.current.value)
    const newNotes = {
      id: props.id,
      title: title.current.value,
      description: noteParagraph.current.value,
    }
    dispatch(noteSliceActon.editNote(newNotes))
    props.cancelEdit()
  }
  return (
    <>
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
              defaultValue={array[indexOfElement.current].title}
            ></textarea>
            <textarea
              className={classes.secondTextArea}
              ref={noteParagraph}
              type="text"
              placeholder="Take a note..."
              defaultValue={array[indexOfElement.current].description}
            ></textarea>

            <div className={classes.buttons}>
              <Button text="Cancel" onClick={props.cancelEdit}>
                Cancel
              </Button>
              <Button text="save"></Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditNote
