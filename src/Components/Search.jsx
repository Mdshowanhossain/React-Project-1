import React from "react";
import { useGlobalContext } from "./Context/context";
const Search = () => {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <>
        <section className="search_section">
          <label for="exampleDataList" className="form-label">
            Type to search...
          </label>
          <input
            className="form-control input"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="search..."
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </section>
      </>
    </>
  );
};

export default Search;
