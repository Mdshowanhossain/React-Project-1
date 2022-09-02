import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
const Search = () => {
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
          />
        </section>
      </>
    </>
  );
};

export default Search;
