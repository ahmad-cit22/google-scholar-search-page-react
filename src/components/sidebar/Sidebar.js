import React from "react";
import { MdEmail } from "react-icons/md";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="d-flex flex-column mb-4 ">
        <a
          href="#"
          className="mb-0 pb-1 text-danger timeRange text-decoration-none"
        >
          Any time
        </a>
        <a
          href="#"
          className=" timeRange pb-1 mb-0 text-black text-decoration-none"
        >
          Since 2022
        </a>
        <a
          href="#"
          className=" timeRange pb-1 mb-0 text-black text-decoration-none"
        >
          Since 2021
        </a>
        <a
          href="#"
          className=" timeRange pb-1 mb-0 text-black text-decoration-none"
        >
          Since 2018
        </a>
        <a
          href="#"
          className=" timeRange pb-1 mb-0 text-black text-decoration-none"
        >
          Custom range...
        </a>
      </div>

      <div className="d-flex flex-column mb-4">
        <a
          href="#"
          className="text-danger mb-0 pb-1 timeRange text-decoration-none"
        >
          Sort by relevance
        </a>
        <a
          href="#"
          className=" timeRange pb-1 mb-0 text-black text-decoration-none"
        >
          Sort by date
        </a>
      </div>

      <div className="d-flex flex-column mb-4">
        <a
          href="#"
          className="text-danger mb-0 pb-1 timeRange text-decoration-none"
        >
          Any type
        </a>
        <a
          href="#"
          className=" timeRange pb-1 mb-0 text-black text-decoration-none"
        >
          Review articles
        </a>
      </div>

      <div className="d-flex flex-column mb-4">
        <div className="d-flex">
          <input className="me-1" name="patents" type={"checkbox"} />
          <label for="patents">Include Patents</label>
        </div>

        <div className="d-flex">
          <input className="me-1" name="citations" type={"checkbox"} />
          <label for="citations">Include Citations</label>
        </div>
      </div>

      <a
        href="#"
        className="mb-0 pb-1 text-black timeRange text-decoration-none"
      >
        <MdEmail className="mb-1 me-2 fs-5 alertIcon" /> Create Alert
      </a>
    </div>
  );
};

export default Sidebar;
