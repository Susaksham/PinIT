import React from 'react'
import classes from './SearchBar.module.css'
import { useDispatch } from 'react-redux'
import { noteSliceActon } from '../../Store/notes-store'
function SearchBar() {
  const dispatch = useDispatch()

  const inputChangeHandler = (e) => {
    dispatch(noteSliceActon.changeInputString(`${e.target.value}`))
  }
  return (
    <div className={classes.search}>
      {/* <span className={classes.searchIcon}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </span> */}
      <input
        type="text"
        placeholder="Type to search"
        onChange={inputChangeHandler}
      ></input>
    </div>
  )
}

export default SearchBar
