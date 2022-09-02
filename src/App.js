import React from "react";
import "./App.css";
import Home from "./Components/Home";
import Pagination from "./Components/Pagination";
import Search from "./Components/Search";
const App = () => {
  return (
    <>
      <main className="container p-5">
        <Search />
        <Pagination />
        <Home />
      </main>
    </>
  );
};

export default App;
