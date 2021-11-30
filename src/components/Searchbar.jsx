import { useContext, useState } from 'react'

import classes from "./Searchbar.module.scss"
import ShowsContext from '../context/showsContext'
import Alert from './Alert'

const Searchbar = () => {
  const showsContext = useContext(ShowsContext)
  const {searchShows} = showsContext
  
  const [searchTerm, setSearchTerm] = useState('')
  const [fieldIsEmpty, setFieldIsEmpty] = useState(false)
  
  const onSubmitHandler = (e) => {
    e.preventDefault()
    
    if(searchTerm === "") {

    } else {
      searchShows(searchTerm)
      setSearchTerm("")
    }

  }
  
  return (
    <div className={classes.searchbar}>
      <Alert type="danger" message="Wprowadź tekst"/>
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
