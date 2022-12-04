import React from 'react'
import classes from './Note.module.css'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { noteSliceActon } from '../../Store/notes-store'
import { Link } from 'react-router-dom'
import Card from '../UI/Card'
function Note(props) {
  const dispatch = useDispatch()
  // to handler delete
  const onDeleteHandler = () => {
    dispatch(noteSliceActon.removingNote(`${props.id}`))
  }
  return (
    <Card className={classes.card}>
      <Link to={`/note/${props.id}`}>
        <div className={classes.card}>
          <p>{props.title}</p>
          <p>{props.description}</p>
        </div>
      </Link>
      <div className={classes.button}>
        <Button text="Delete" onClick={onDeleteHandler}></Button>
      </div>
    </Card>
  )
}

export default Note
