const reducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };
    case "DELETE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElement) => curElement.objectID !== action.payload
          // console.log(action.payload)
        ),
      };
  }
  // curElement.objectID !== action.payload
  return state;
};
export default reducer;
