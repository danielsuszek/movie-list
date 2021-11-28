import { SEARCH_SHOWS } from './actionTypes'

const showsReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_SHOWS: 
      return {
        ...state,
        shows: action.payload
      }
    default:
      return state
  }
}

export default showsReducer