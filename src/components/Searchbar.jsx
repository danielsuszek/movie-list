import { useContext } from 'react'

import classes from "./Searchbar.module.scss"
import ShowsContext from '../context/showsContext'

const Searchbar = () => {
  const showsContext = useContext(ShowsContext)
  const {searchShows} = showsContext
  
  return (
    <div className={classes.searchbar}>
      <input
        type="text"
      ></input>
      <button onClick={searchShows}>Search</button>
    </div>
  )
}

export default Searchbar
