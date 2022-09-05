/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { useGlobalContext } from "./Context/context";

const Home = () => {
  // const API = "https://hn.algolia.com/api/v1/search_by_date?query=html";

  // const dummyData = [
  //   {
  //     title: "Title 1",
  //     description: "Description 1",
  //   },
  //   {
  //     title: "Title 2",
  //     description: "Description 1",
  //   },
  //   {
  //     title: "Title 3",
  //     description: "Description 1",
  //   },
  //   {
  //     title: "Title 4",
  //     description: "Description 1",
  //   },
  //   {
  //     title: "Title 5",
  //     description: "Description 1",
  //   },
  //   {
  //     title: "Title 6",
  //     description: "Description 1",
  //   },
  // ];
  // const [loading, setLoading] = useState(true);

  // const fetchData = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setLoading(false);
  //     console.log(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(API);
  // }, []);

  // const { loading, data } = useGlobalContext();

  const { hits, nbPages, isLoading, removePost } = useGlobalContext();
  // console.log(hits);

  return (
    <>
      <section className="home_section">
        <div className="row ">
          <>
            {isLoading ? (
              <button class="btn btn-primary" type="button" disabled>
                <span
                  class="spinner-grow spinner-grow-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Loading...
              </button>
            ) : (
              hits.map((post) => {
                const {
                  title,
                  author,
                  comment_text,
                  objectID,
                  url,
                  num_comments,
                  story_title,
                } = post;
                return (
                  <div
                    className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-6 col-xxl-6"
                    key={objectID}
                  >
                    <div className="card my-3">
                      <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                          <li className="nav-item">
                            {/* <a
                              className="nav-link active "
                              aria-current="true"
                              href="#"
                            > */}
                            <span className="nav-link active ">
                              <UilTrashAlt
                                className="delete-icon"
                                onClick={() => removePost(objectID)}
                              />
                            </span>
                            {/* </a> */}
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        {/* <small className="text-center">{title}</small> */}
                        <h5 className="card-title text-center">
                          {story_title ? story_title : title}
                        </h5>
                        <p className="text-center text-muted fs-6">
                          By
                          <span className="text-primary"> {author}</span> ||
                          Comments{" "}
                          <span className="text-success">
                            {/* {num_comments
                              ? num_comments
                              : Math.floor(
                                  Math.random() * (500 + 600).toFixed(3)
                                )} */}
                          </span>
                        </p>
                        {/* <p className="card-text">
                          
                        </p> */}
                        {/* // eslint-disable-next-line react/jsx-no-target-blank */}
                        <a
                          href={url}
                          target="_blank"
                          className={
                            url
                              ? "btn btn-outline-secondary"
                              : "notallow btn btn-outline-secondary"
                          }
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </>
        </div>
      </section>
    </>
  );
};

export default Home;
