import { useReducer } from 'react'
import axios from "axios";
import { SEARCH_SHOWS } from './actionTypes'

import ShowsContext from './showsContext'
import ShowsReducer from './showsReducer'

const ShowsState = (props) => {
  const initialState = {
    shows: []
  }
  
  const [state, dispatch] = useReducer(ShowsReducer, initialState)
  
  const searchShows = async () => {

    const {data} = await axios.get(
      `https://api.tvmaze.com/search/shows?q=girls`
    );
    
    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  return (
    <ShowsContext.Provider value={{ 
      state,
      searchShows
     }}>
      {props.children}
    </ShowsContext.Provider>
  )
}

export default ShowsState
