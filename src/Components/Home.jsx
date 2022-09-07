/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { useGlobalContext } from "./Context/context";
const Home = () => {
  const { hits, isLoading, removePost } = useGlobalContext();

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
                            <span className="nav-link active ">
                              <UilTrashAlt
                                className="delete-icon"
                                onClick={() => removePost(objectID)}
                              />
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body">
                        <h5 className="card-title text-center">
                          {story_title ? story_title : title}
                        </h5>
                        <p className="text-center text-muted fs-6">
                          By
                          <span className="text-primary"> {author}</span> ||
                          Comments{" "}
                          <span className="text-success">
                            {num_comments
                              ? num_comments
                              : Math.floor(
                                  Math.random() * (500 + 600).toFixed(3)
                                )}
                          </span>
                        </p>
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
