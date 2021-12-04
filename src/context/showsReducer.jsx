import { 
  SEARCH_SHOWS, 
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
  SET_IS_SEARCHED
} from './actionTypes'

const showsReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_SHOWS: 
      return {
        ...state,
        shows: action.payload,
        isSearched: true
      }
    case SET_SINGLE_SHOW: 
      return {
        ...state,
        singleShow: action.payload
      }        
    case CLEAR_SINGLE_SHOW:
      return {
        ...state,
        singleShow: {}
      }
    case SET_IS_SEARCHED:
      return {
        ...state,
        isSearched: false
      }
    default:
      return state
  }
}



export default showsReducer