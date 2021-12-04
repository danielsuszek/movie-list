import { useContext, useState } from 'react'

import classes from "./Searchbar.module.scss"
import ShowsContext from '../context/showsContext'
import Alert from './Alert'

const Searchbar = () => {
  const showsContext = useContext(ShowsContext)
  const {searchShows, shows, isSearched, setIsSearchedFalse } = showsContext
  
  const [searchTerm, setSearchTerm] = useState('')
  const [fieldIsEmpty, setFieldIsEmpty] = useState(false)
  
  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
    setFieldIsEmpty(false)
    setIsSearchedFalse()
  }
  
  const onSubmitHandler = (e) => {
    e.preventDefault()
    
    if(searchTerm === "") {
      setFieldIsEmpty(true)
    } else {
      searchShows(searchTerm)
      setFieldIsEmpty(false)
    }
  }
  
  return (
    <div className={classes.searchbar}>
      <div className={classes.searchbar__errorSpace}>
        {fieldIsEmpty && <Alert message="Wprowadź tekst"/>}
        {shows.length === 0 && isSearched && <Alert message="Nie znaleziono serialu"/>}
      </div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Wpisz angielski tytuł serialu"
          value={searchTerm}
          onChange={onChangeHandler}
          autoFocus
        />
        <button type="submit">Szukaj</button>
      </form>
    </div>
  )
}

export default Searchbar
