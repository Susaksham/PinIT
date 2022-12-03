import React from 'react'
import classes from './Container.module.css'
function Container(props) {
  return <div className={classes.wrapper}>{props.children}</div>
}

export default Container
