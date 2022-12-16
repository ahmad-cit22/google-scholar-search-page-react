import { motion } from "framer-motion";
import React, { useState } from "react";
import { MdClose, MdEmail, MdSchool } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsStarFill, BsFillAwardFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { SiGooglescholar } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import "./menubar.css";

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={{
        width: isOpen ? "17%" : "4%",
        transition: {
          duration: "0.2s",
          type: "spring",
          damping: "11",
        },
      }}
      className={`menuBarMain position-fixed top-0 start-0 text-nowrap d-flex flex-column ${
        isOpen ? "align-items-start" : "align-items-center"
      } `}
    >
      <div className="d-flex barHeader pb-2 align-items-center">
        {isOpen ? (
          <MdClose
            className="mt-1 mb-2 hamburger hamburgerClose"
            onClick={toggle}
          />
        ) : (
          <RxHamburgerMenu className="mt-1 fs-4 hamburger" onClick={toggle} />
        )}
        {/* logo */}
        <a className={`ms-3 logoBar ${!isOpen && "d-none"}`} href="#">
          <picture>
            <img src={"images/logo.png"} />
          </picture>
        </a>
        {/* logo */}
      </div>

      <div>
        <div
          className={`mt-4 d-flex flex-column mb-4 menus ${!isOpen && "ps-4"}`}
        >
          <a
            href="#"
            className=" mb-3 menu text-danger mb-0 text-decoration-none"
          >
            <SiGooglescholar className="icon me-2 mb-1" />{" "}
            {isOpen && "Articles"}
          </a>
          <a href="#" className="  mb-3 menu mb-0 text-decoration-none">
            <BsFillAwardFill className="icon me-2 mb-1" />{" "}
            {isOpen && "Case Law"}
          </a>

          <a
            href="#"
            className="position-relative mb-4 menu text-decoration-none"
          >
            <CgProfile className="icon me-2 mb-1" /> {isOpen && "Profiles"}
            <hr className="text-black position-absolute" />
          </a>
          <a className="mt-3 mb-3 menu " href="#">
            <MdSchool className="icon me-2 mb-1" /> {isOpen && "My Profile"}
          </a>
          <a className=" mb-3 menu " href="#">
            <BsStarFill className="icon me-2 mb-1" /> {isOpen && "My Library"}
          </a>
          <a className=" mb-3 menu " href="#">
            <ImStatsBars className="icon me-2 mb-1" /> {isOpen && "My Library"}
          </a>
          <a className=" mb-3 menu " href="#">
            <MdEmail className="icon me-2 mb-1" /> {isOpen && "Alerts"}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Menubar;
