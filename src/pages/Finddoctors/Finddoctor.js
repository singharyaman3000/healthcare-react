import React from "react";
import banner from "../../image/about-banner.jpg";
import { Link } from "react-router-dom";
import Imagecom from "../../components/Imagecom";
import { FaRegQuestionCircle } from "react-icons/fa";
import Search from "../../components/Search";

const Finddoctor = ({ setShow }) => {
  setShow(true);
  return (
    <div style={{ background: "#f1f8fc" }}>
      <Imagecom
        image={banner}
        path={"home"}
        content={"Our Doctors"}
        title={"PHYSICIAN DIRECTORY"}
      />
      <div className="block">
        <div
          style={{
            fontSize: "20px",
            fontFamily: "Open sans",
            background: "#00bcbd",
            padding: "10px",
            margin: "20px",
            borderRadius: "5px",
            color: "#fff",
          }}
        >
          <FaRegQuestionCircle />
          To find your doctor, please use the search options below:
        </div>
      </div>
      <Search
        title="SEARCH BY DOCTOR NAME"
        content="Enter the first letters of a doctor’s last name."
        placeholder="Name"
      />
      <Search
        title="SEARCH BY DOCTOR NAME"
        content="Enter the first letters of a doctor’s last name."
        placeholder="Keyboard"
      />
      <div
        style={{ textAlign: "center", marginInline: "auto", padding: "20px" }}
      >
        <Link to="/our-doctor" className="link">
          MEET OUR EXPERTS
        </Link>
      </div>
    </div>
  );
};

export default Finddoctor;
