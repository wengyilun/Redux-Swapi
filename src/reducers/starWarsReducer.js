import {
  FETCHING_CHARACTERS,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
  
} from "../actions";


const initialState = {
  characters: [],
  fetching:false,
  nextUrl:'',
   error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
  
    case FETCHING_CHARACTERS:
      return {...state, fetching:true}
      
    case FETCH_CHARACTERS_SUCCESS:
      return {
                ...state,
                fetching:false,
                nextUrl:action.payload.next,
                characters:action.payload.results
             }
             
    case FETCH_CHARACTERS_FAILURE:
      return {
                ...state,
                fetching:false,
                error:action.payload
             }
    default:
      return state;
  }
};
