import ShowsContext from './showsContext'

const ShowsState = (props) => {
  const searchShows = (searchTerm) => {
    console.log('searchShows');
  }
  
  return (
    <ShowsContext.Provider value={{ 
      searchShows
     }}>
      {props.children}
    </ShowsContext.Provider>
  )
}

export default ShowsState
