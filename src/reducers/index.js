const initialState = {
  searchTerm: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHTERM_CHANGED':
      console.log(action);
      return {
        ...state,
        searchTerm: action.searchTerm
      };
    default:
      return state;
  }
};

export default reducer;
