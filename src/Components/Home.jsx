import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";

const Home = () => {
  const dummyData = [
    {
      title: "Title 1",
      description: "Description 1",
    },
    {
      title: "Title 2",
      description: "Description 1",
    },
    {
      title: "Title 3",
      description: "Description 1",
    },
    {
      title: "Title 4",
      description: "Description 1",
    },
    {
      title: "Title 5",
      description: "Description 1",
    },
    {
      title: "Title 6",
      description: "Description 1",
    },
  ];

  return (
    <>
      <section className="home_section">
        <div className="row ">
          {dummyData.map((data) => {
            return (
              <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-6 col-xxl-6">
                <div className="card my-3">
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active "
                          aria-current="true"
                          href="#"
                        >
                          <UilTrashAlt className="delete-icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">{data.title}</h5>
                    <p className="card-text">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis, impedit obcaecati! Velit et distinctio officiis
                      debitis cumque animi provident qui, consequatur quod
                      dolorum nesciunt vero accusamus doloribus, in dolorem
                      voluptate.
                    </p>
                    <a href="#" className="btn btn-outline-secondary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
