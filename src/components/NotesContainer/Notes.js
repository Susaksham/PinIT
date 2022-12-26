import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'
import classes from './Notes.module.css'
const Notes = (props) => {
  const notesArray = useSelector((state) => state.notesData.notesArray)
  const inputString = useSelector((state) => state.notesData.inputString)
  console.log(notesArray)

  if (inputString.length === 0) {
    return (
      <React.Fragment>
        <div className={classes.container}>
          {notesArray.map((note) => {
            return (
              <Note
                idHandler={props.idHandler}
                editNotes={props.editNotes}
                key={note.id}
                id={note.id}
                title={note.title}
                description={note.description}
                date={note.date}
              ></Note>
            )
          })}
        </div>
      </React.Fragment>
    )
  }
  const filteredArray = notesArray.filter((element) => {
    console.log('inputstring : ' + inputString)
    return element.title.includes(inputString)
  })
  if (filteredArray.length === 0) {
    return (
      <div className={classes.container}>
        <p style={{ fontSize: '3rem', color: 'white' }}>No Result Found!</p>
      </div>
    )
  }
  return (
    <React.Fragment>
      <div className={classes.container}>
        {filteredArray.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              date={note.date}
            ></Note>
          )
        })}
      </div>
    </React.Fragment>
  )
}

export default Notes
