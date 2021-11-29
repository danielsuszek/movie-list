import { useContext, useState } from 'react'

import classes from "./Searchbar.module.scss"
import ShowsContext from '../context/showsContext'

const Searchbar = () => {
  const showsContext = useContext(ShowsContext)
  const {searchShows} = showsContext
  
  const [searchTerm, setSearchTerm] = useState('')
  
  const onSubmitHandler = (e) => {
    e.preventDefault()

    searchShows(searchTerm)

    setSearchTerm("")
  }
  
  return (
    <div className={classes.searchbar}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Wyszukaj serial"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Searchbar
