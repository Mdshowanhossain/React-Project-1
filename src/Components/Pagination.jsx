/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useGlobalContext } from "./Context/context";

const Pagination = () => {
  const { nextPage, previousPage, page, nbPages } = useGlobalContext();

  return (
    <>
      <section className="pagination-section my-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item" onClick={() => previousPage()}>
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item" onClick={() => nextPage()}>
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
        <div className="small_data">
          <small>
            {" "}
            {page + 1} of {nbPages} page
          </small>
        </div>
      </section>
    </>
  );
};

export default Pagination;
