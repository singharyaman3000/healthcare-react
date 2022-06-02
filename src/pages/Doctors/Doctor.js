import React from "react";
import { useEffect } from "react";
import Expertcom from "../../components/Expertcom";
import Imagecom from "../../components/Imagecom";
import "./main.css";
// import member1 from "../../image/member-1.jpg";
// import member2 from "../../image/member-2.jpg";
// import member3 from "../../image/member-3.jpg";
// import member4 from "../../image/member-4.jpg";
// import member5 from "../../image/member-5.jpg";
// import member6 from "../../image/member-6.jpg";
// import member7 from "../../image/member-7.jpg";
// import member8 from "../../image/member-8.jpg";
// import member9 from "../../image/member-9.jpg";
import banner from "../../image/dr-banner.jpg";
import Doctors from "./Doctors";
const Doctor = ({ setShow }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  setShow(true);
  // const doctors = [
  //   {
  //     image: member1,
  //     name: "BERNICE RAY",
  //     speciality: "Chief surgeon",
  //   },
  //   {
  //     image: member2,
  //     name: "LARISSA THOMAS",
  //     speciality: "Otolaryngology",
  //   },
  //   {
  //     image: member3,
  //     name: "JASON BOLTON",
  //     speciality: "Neurosurgery",
  //   },
  //   {
  //     image: member4,
  //     name: "LEROY BUTLER",
  //     speciality: "Foot & Ankle",
  //   },
  //   {
  //     image: member5,
  //     name: "MITCHELL FAGELMAN",
  //     speciality: "Carrollton",
  //   },
  //   {
  //     image: member6,
  //     name: "VICTORIA D. KNOLL",
  //     speciality: "Neurosurgery",
  //   },
  //   {
  //     image: member7,
  //     name: "DOROTHY E. GROOMS",
  //     speciality: "Neurosurgery",
  //   },
  //   {
  //     image: member8,
  //     name: "RALPH O. HOWARD",
  //     speciality: "Otolaryngology",
  //   },
  //   {
  //     image: member9,
  //     name: "LYNN A. JEFFERSON",
  //     speciality: "Otolaryngology",
  //   },
  // ];
  return (
    <div>
      <Imagecom
        image={banner}
        path={[{ text: "home", link: "" }]}
        content={"Our Doctors"}
        title={"MEET OUR EXPERTS"}
      />
      <div className="heading block">
        <h2>BETTER DOCTORS. BETTER CARE.</h2>
        <p style={{ fontSize: "20px" }}>
          Together own seas said fowl third herb saw also that had saying
          darkness may After together
        </p>
      </div>
      <Expertcom doctors={Doctors} />
    </div>
  );
};

export default Doctor;
