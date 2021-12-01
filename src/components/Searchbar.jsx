import { useContext, useState } from 'react'

import classes from "./Searchbar.module.scss"
import ShowsContext from '../context/showsContext'
import Alert from './Alert'

const Searchbar = () => {
  const showsContext = useContext(ShowsContext)
  const {searchShows} = showsContext
  
  const [searchTerm, setSearchTerm] = useState('')
  const [fieldIsEmpty, setFieldIsEmpty] = useState(false)
  
  const onChangeHandler = (e) => {
    setSearchTerm(e.target.value)
    setFieldIsEmpty(false)
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
        {fieldIsEmpty && <Alert message="Wprowadź tekst" fieldIsEmpty={fieldIsEmpty}/>}
      </div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Wyszukaj serial"
          value={searchTerm}
          onChange={onChangeHandler}
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default Searchbar
