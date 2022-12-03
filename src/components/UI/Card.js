import React from 'react'
import classes from './Card.module.css'
const Card = (props) => {
  const additionClass = props.className
  return (
    <div className={`${classes.card} ${additionClass}`}> {props.children}</div>
  )
}

export default Card
