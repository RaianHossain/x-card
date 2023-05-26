const initialState = {
    searchBarStatus: false,
  }
  
export default (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_BAR_TOGGLE':
      return {
        ...state, //copy all previous states
        searchBarStatus: action.payload,
      }
    // case 'LOGOUT':
    //   return {
    //     authToken: null,
    //   }
    default:
      return state;
  }
}