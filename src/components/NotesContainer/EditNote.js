import React, { useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { noteSliceActon } from '../../Store/notes-store'
import Button from '../UI/Button'
function EditNote() {
  const params = useParams()
  const title = useRef('')
  const noteParagraph = useRef('')
  const dispatch = useDispatch()
  const array = useSelector((state) => state.notesData.notesArray)
  const indexOfElement = useRef()

  indexOfElement.current = array.findIndex((element) => {
    return element.id === params.noteId
  })
  console.log(indexOfElement.current)

  const history = useHistory()
  const submitHandler = (e) => {
    e.preventDefault()

    console.log(title.current.value)
    console.log(noteParagraph.current.value)
    const newNotes = {
      id: params.noteId,
      title: title.current.value,
      description: noteParagraph.current.value,
    }
    dispatch(noteSliceActon.editNote(newNotes))
    history.push('/')
  }
  return (
    <div className="">
      <form onSubmit={submitHandler}>
        <input
          ref={title}
          defaultValue={array[indexOfElement.current].title}
          type="text"
        ></input>
        <input
          ref={noteParagraph}
          type="text"
          defaultValue={array[indexOfElement.current].description}
        ></input>
        <Button text="save"></Button>
      </form>
    </div>
  )
}

export default EditNote
