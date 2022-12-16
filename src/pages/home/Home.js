import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MainContents from "../../components/mainContents/MainContents";
import Navbar from "../../components/navbar/Navbar";
import Menubar from "../../components/menubar/Menubar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Menubar />
      <section className="d-flex">
        <Sidebar />
        <MainContents />
      </section>
    </div>
  );
};

export default Home;
