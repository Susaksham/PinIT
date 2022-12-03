import React, { Fragment } from 'react'
import classes from './Header.module.css'
const Header = () => {
  return (
    <section className={classes.header}>
      <div>
        <h1>logo</h1>
      </div>
      <div>toggle mode</div>
    </section>
  )
}

export default Header
