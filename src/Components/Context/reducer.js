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
        ),
      };
    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };

    case "NEXT_PAGE":
      let nPageNum = state.page + 1;
      if (nPageNum >= state.nbPages) {
        nPageNum = 0;
      }

      return {
        ...state,
        page: state.page + 1,
      };
    case "PREV_PAGE":
      let pageNum = state.page - 1;

      if (pageNum <= 0) {
        pageNum = 0;
      }

      return {
        ...state,
        page: pageNum,
      };
  }
  return state;
};
export default reducer;
