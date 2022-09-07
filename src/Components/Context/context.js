import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const API = "https://hn.algolia.com/api/v1/search_by_date?";

const initialState = {
  isLoading: true,
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch({
        type: "GET_DATA",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
          isLoading: true,
        },
      });

      // console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  // REMOVE POST
  const removePost = (post_ID) => {
    dispatch({
      type: "DELETE_POST",
      message: alert("Post delete successfully"),
      payload: post_ID,
    });
  };

  // SEARCH POST

  const searchPost = (search) => {
    dispatch({
      type: "SEARCH_QUERY",
      payload: search,
    });
  };

  // PAGINATION

  const nextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  const previousPage = () => {
    dispatch({
      type: "PREV_PAGE",
    });
  };

  useEffect(() => {
    fetchData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, nextPage, previousPage }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
