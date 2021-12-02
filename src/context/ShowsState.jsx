import { useReducer } from 'react'
import axios from "axios";
import { CLEAR_SINGLE_SHOW, SEARCH_SHOWS, SET_SINGLE_SHOW } from './actionTypes'

import ShowsContext from './showsContext'
import ShowsReducer from './showsReducer'

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {}
  }
  
  const [state, dispatch] = useReducer(ShowsReducer, initialState)
  
  const searchShows = async (searchTerm) => {

    const {data} = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    
    // console.log(data);
    
    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

const getSingleShow = async (id) => {
  const {data} = await axios.get(
    `https://api.tvmaze.com/shows/${id}`
  )

  dispatch({
    type: SET_SINGLE_SHOW,
    payload: data
  })
}

const clearSingleShow = () => {
  dispatch({
    type: CLEAR_SINGLE_SHOW
  })
}

return (
    <ShowsContext.Provider value={{ 
      shows: state.shows,
      singleShow: state.singleShow,
      searchShows,
      getSingleShow,
      clearSingleShow,
     }}>
      {props.children}
    </ShowsContext.Provider>
  )
}

export default ShowsState
