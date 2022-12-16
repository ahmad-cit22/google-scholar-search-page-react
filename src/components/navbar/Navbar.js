import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { BsStarFill } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { MdSchool } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      {/* navbar */}
      <nav className="navbar bg-light">
        <div className="container-fluid">
          {/* logo */}
          <a className="navbar-brand ms-5" href="#">
            <picture>
              <img className="ms-1" src={"images/logo.png"} />
            </picture>
          </a>
          {/* logo */}

          {/* search */}
          <form action="#" className="d-flex ms-4" role="search">
            <input
              className="form-control navInput border border-solid border-3 border-black"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={"computed tomography"}
            />
            <button
              className="searchBtn btn btn-outline-success text-white"
              type="submit"
            >
              <HiOutlineSearch />
            </button>
          </form>
          {/* search */}

          {/* account photo */}
          <a className="account" href="#">
            <picture>
              <img src={"images/default_avatar.png"} />
            </picture>
          </a>
          {/* account photo */}
        </div>
      </nav>
      {/* navbar */}

      {/* sub navbar */}
      <div className="container-fluid subNav">
        <SiGooglescholar className="fs-5 articleIcon ms-4 me-4" />

        <p className="mb-0 article">Articles</p>

        <p className="mb-0 resultTime">About 2,770,000 results (0.03 sec)</p>

        <a className="subNavIcons" href="#">
          <MdSchool className="icon ms-4 me-2 mb-1" /> My Profile
        </a>
        <a className="subNavIcons" href="#">
          <BsStarFill className="icon ms-4 me-2 mb-1" /> My Library
        </a>
      </div>
      {/* sub navbar */}
    </>
  );
};

export default Navbar;
