import React from "react";
import "./mainContents.css";
import { BsStar } from "react-icons/bs";
import { TbQuote } from "react-icons/tb";

const MainContents = () => {
  return (
    <div className="mainContentsBox">
      <div className="contentBox mb-4">
        <a href="#" className="heading">
          <span className="fw-bold">Computed tomography</span>
        </a>
        <p className="subHeading">
          <span className="text-decoration-underline">TM Buzug</span> - Springer
          handbook of medical technology, 2011 - Springer
        </p>
        <p className="content">
          In this chapter, historical milestones of computed tomography (CT)
          (Sect. 16.2), recent technology with a focus on generation and
          detection of x-rays (Sect. 16.3), as well as image …
        </p>
        <p className="contentFooter">
          <BsStar style={{ fontSize: "13px" }} className="mb-1" /> Save{" "}
          <TbQuote
            style={{ fontSize: "17px", marginLeft: "8px" }}
            className="mb-1"
          />{" "}
          Cite <span className="ms-2 me-2">Cited by 1429</span> Related articles
          <span className="ms-2 me-2">All 9 versions</span>
        </p>
      </div>

      <div className="contentBox mb-4">
        <a href="#" className="heading">
          <span className="fw-bold">Computed tomography</span>
        </a>
        <p className="subHeading">
          <span className="text-decoration-underline">SL Brooks</span> - Dental
          Clinics of North America, 1993 - Elsevier
        </p>
        <p className="content">
          Although CT scanning has been available for less than 20 years, it has
          made a major impact on the practice of dentistry, particularly in oral
          and maxillofacial surgery, in the diagnosis …
        </p>
        <p className="contentFooter">
          <BsStar style={{ fontSize: "13px" }} className="mb-1" /> Save{" "}
          <TbQuote
            style={{ fontSize: "17px", marginLeft: "8px" }}
            className="mb-1"
          />{" "}
          Cite <span className="ms-2 me-2">Cited by 85</span> Related articles
          <span className="ms-2 me-2">All 4 versions</span>
        </p>
      </div>

      <div className="contentBox mb-4">
        <a href="#" className="heading">
          <span style={{ fontSize: "14px" }}>[HTML]</span>{" "}
          <span className="fw-bold">Computed tomography</span> —old ideas and
          new technology
        </a>
        <p className="subHeading">
          <span className="text-decoration-underline">
            D Fleischmann, FE Boas
          </span>{" "}
          - European radiology, 2011 - Springer
        </p>
        <p className="content">
          … new’ techniques in computed tomography—iterative reconstruction, …
          Computed tomography (CT) was publicly announced in … appraisal of
          computed tomography in the imaging literature. …
        </p>
        <p className="contentFooter">
          <BsStar style={{ fontSize: "13px" }} className="mb-1" /> Save{" "}
          <TbQuote
            style={{ fontSize: "17px", marginLeft: "8px" }}
            className="mb-1"
          />{" "}
          Cite <span className="ms-2 me-2">Cited by 334</span> Related articles
          <span className="ms-2 me-2">All 11 versions</span>
        </p>
      </div>

      <div className="contentBox mb-4">
        <a href="#" className="heading">
          <span style={{ fontSize: "14px" }}>[PDF] </span>{" "}
          <span className="fw-bold">Is computed tomography</span> safe
        </a>
        <p className="subHeading">
          <span className="text-decoration-underline">R Smith-Bindman</span> - N
          Engl j Med, 2010 - img2.timg.co.il
        </p>
        <p className="content">
          … methods such as computed tomography (CT), magnetic resonance imaging
          (MRI), and positron-emission tomography (PET) has made diagnosis more
          accurate and less invasive for …
        </p>
        <p className="contentFooter">
          <BsStar style={{ fontSize: "13px" }} className="mb-1" /> Save{" "}
          <TbQuote
            style={{ fontSize: "17px", marginLeft: "8px" }}
            className="mb-1"
          />{" "}
          Cite <span className="ms-2 me-2">Cited by 346</span> Related articles
          <span className="ms-2 me-2">All 9 versions</span>
        </p>
        <a href="#" className="sideLink fs-6">
          [HTML] springer.com
        </a>
      </div>

      <div className="contentBox mb-4">
        <a href="#" className="heading">
          <span className="fw-bold">Computed tomography</span>
        </a>
        <p className="subHeading">
          <span className="text-decoration-underline">TM Buzug</span> - Springer
          handbook of medical technology, 2011 - Springer
        </p>
        <p className="content">
          In this chapter, historical milestones of computed tomography (CT)
          (Sect. 16.2), recent technology with a focus on generation and
          detection of x-rays (Sect. 16.3), as well as image …
        </p>
        <p className="contentFooter">
          <BsStar style={{ fontSize: "13px" }} className="mb-1" /> Save{" "}
          <TbQuote
            style={{ fontSize: "17px", marginLeft: "8px" }}
            className="mb-1"
          />{" "}
          Cite <span className="ms-2 me-2">Cited by 1429</span> Related articles
          <span className="ms-2 me-2">All 9 versions</span>
        </p>
      </div>
    </div>
  );
};

export default MainContents;
