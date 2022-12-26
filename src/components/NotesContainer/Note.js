import React from 'react'
import classes from './Note.module.css'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { noteSliceActon } from '../../Store/notes-store'

import Card from '../UI/Card'
function Note(props) {
  const dispatch = useDispatch()
  // to handler delete
  const onDeleteHandler = () => {
    dispatch(noteSliceActon.removingNote(`${props.id}`))
  }
  const editHandler = () => {
    props.idHandler(props.id)
    props.editNotes()
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <h2 className={classes.title}>{props.title}</h2>
        <div className={classes.description}>{props.description}</div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.date}>{props.date}</div>
        <div className={classes.buttons}>
          <div className={classes.cardLink} onClick={editHandler}>
            <svg
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              width="2.4rem"
              height="2.4rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H11V19.13L19.39 10.74C19.83 10.3 20.39 10.06 21 10M14 4.5L19.5 10H14V4.5M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83Z"
              />
            </svg>
          </div>

          <div className={classes.delete}>
            <svg
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={onDeleteHandler}
              width="2.4rem"
              height="2.4rem"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Note
