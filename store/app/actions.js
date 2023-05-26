export const SearchBarToggle = (open) => {
  return async dispatch => {
    dispatch({
      type: 'SEARCH_BAR_TOGGLE',
      payload: open,
    })
  }
}