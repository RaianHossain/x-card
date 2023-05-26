const initialState = {
    authToken: null,
    userEmail: null
  }
  
export default (state = initialState, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state, //copy all previous states
        authToken: action.payload.token,
        userEmail: action.payload.userEmail
      }
    case 'LOGOUT':
      return {
        authToken: null,
        userEmail: null
      }
    default:
      return state;
  }
}