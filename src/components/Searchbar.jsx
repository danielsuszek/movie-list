import { useContext } from 'react'

import classes from "./Searchbar.module.scss"
import ShowsContext from '../context/showsContext'

const Searchbar = () => {
  const showsContext = useContext(ShowsContext)
  const {searchShows} = showsContext
  
  searchShows()
  
  return (
    <div className={classes.searchbar}>
      searchbar    
    </div>
  )
}

export default Searchbar
