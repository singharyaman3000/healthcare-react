import React from "react";
import { Link } from "react-router-dom";
import Imagecom from "../../components/Imagecom";
import Experts from "../Home/Experts";
import Formservice from "./Formservice";
// import Form from "../Home/Form";
import "./main.css";
import Review from "./Review";
import banner from "../../image/service-banner.jpg";
import Typeofservice from "./Typeofservice";
const Service = ({ setShow }) => {
  setShow(true);
  return (
    <div>
      <Imagecom
        image={banner}
        path={"home"}
        content={"Our Service"}
        title={"OUR SERVICE"}
      />
      <Typeofservice />
      <Formservice />
      <Review />
      {/* <Form style={{ marginTop: "0px" }} /> */}
      <Experts />
    </div>
  );
};

export default Service;
