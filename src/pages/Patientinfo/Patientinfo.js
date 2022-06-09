import React from "react";
import Imagecom from "../../components/Imagecom";
import { Link } from "react-router-dom";
import "./patientinfo.css";
import banner from "../../image/patient-info-banner.jpg";
import { FaUserMd, FaAmbulance, FaRegHospital } from "react-icons/fa";
const infotypes = [
  { id: 1, info: "Emergency Department" },
  {
    id: 2,
    info: "Inpatient Information",
  },
  {
    id: 3,
    info: "Outpatent Information",
  },
  {
    id: 4,
    info: "Hospital Stay Checklist",
  },
  {
    id: 5,
    info: "Billing Information",
  },
  {
    id: 6,
    info: "Get Healthcard",
  },
  {
    id: 7,
    info: "Interpreter Services",
  },
  {
    id: 8,
    info: "Patients & Family Rights",
  },
  {
    id: 9,
    info: "Visting Consultants",
  },
];
const Patientinfo = ({ setShow }) => {
  setShow(true);

  return (
    <div>
      <Imagecom
        image={banner}
        path={[{ text: "home", link: "" }]}
        content={"Patients Information"}
        title={"PATIENTS INFORMATION"}
      />
      <div style={{ background: "#f1f8fc" }}>
        <div
          className="block"
          style={{ marginBlock: "0px", paddingBottom: "50px" }}
        >
          <h3 style={{ color: "#214e66", padding: "20px", fontSize: "25px" }}>
            MAKE THE MOST OF YOUR HOSPITAL STAY
          </h3>
          <p style={{ color: "#214e66", padding: "20px", fontSize: "20px" }}>
            Gathered whales, appear moved he deep set signs Bearing greater
            third. After day fly said whales make may likeness moveth behold
            fruit she'd image blessed. So in you're, set bring female creeping
            under. Us two fourth subdue divided our green and female waters
            itself beast shall form upon Evening cattle void saw.
          </p>
          <p style={{ color: "#214e66", padding: "20px", fontSize: "20px" }}>
            Forth him Fly fifth saw. Green seas winged fruitful fish female
            brought wherein greater. Very. Life morning days of. Meat third the
            called life them. It you male good. Tree image. Be which it creature
            in i over seas, also won't them darkness be have subdue set. Isn't
            fish firmament days is.
          </p>

          <div className="infotypes infoshadow">
            {infotypes.map((info) => (
              <div>
                <Link to={`/patient-info/${info.id}`}>{info.info}</Link>
              </div>
            ))}

            {/* <div>
              <Link to="/">Inpatient Information</Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div>
            <div>
              <Link to="/"></Link>
            </div> */}
          </div>
          <p style={{ color: "#214e66", padding: "20px", fontSize: "20px" }}>
            Days so whose every fruit wherein also good fruitful appear signs
            face their seasons fowl image. Multiply. Bring won't Let Place earth
            land may stars can't first whose they're was divided, place shall,
            all tree.
          </p>
          <p style={{ color: "#214e66", padding: "20px", fontSize: "20px" }}>
            Let day multiply fifth moveth night place their. Fowl female behold
            may wherein over itself rule lights moving signs be so gathered so
            spirit night. Signs shall unto place, beast years fill isn't have
            two were open grass appear. Without may is fifth sea sixth thing so
            blessed likeness deep saw called have moveth. Seasons own likeness
            Midst second over that dominion man yielding abundantly.
          </p>
        </div>
      </div>
      <div
        style={{ color: "#fff", background: "#f84d4f", textAlign: "center" }}
      >
        <div className="block" style={{ marginBlock: "0px", padding: "60px" }}>
          <h1 style={{ padding: "20px", fontSize: "50px" }}>
            HIGH-CLASS SPECIALISTS ARE READY TO HELP YOU AT ANY TIME.
          </h1>
          <p style={{ padding: "20px", fontSize: "20px" }}>
            Contact us any suitable way and make an appointment with the doctor
            whose help you need! Visit us at the scheduled time and get your
            treatment.
          </p>
          <Link to="/contact" className="patient-info-btn">
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>
      <div className="patientinfogrid block">
        <div>
          <FaUserMd color="#00bcbd" fontSize={"80px"} />
          <h4 style={{ color: "#00bcbd", fontSize: "30px" }}>
            Qualified Doctors
          </h4>
          <p style={{ color: "#184f68", fontSize: "18px" }}>
            Dominion heaven lesser yielding given Cattle earth was forth
            fruitful image thing. Place very creepeth you Be.
          </p>
        </div>
        <div>
          <FaAmbulance color="#00bcbd" fontSize={"80px"} />
          <h4 style={{ color: "#00bcbd", fontSize: "30px" }}>
            Qualified Doctors
          </h4>
          <p style={{ color: "#184f68", fontSize: "18px" }}>
            Dominion heaven lesser yielding given Cattle earth was forth
            fruitful image thing. Place very creepeth you Be.
          </p>
        </div>
        <div>
          <FaRegHospital color="#00bcbd" fontSize={"80px"} />
          <h4 style={{ color: "#00bcbd", fontSize: "30px" }}>
            Qualified Doctors
          </h4>
          <p style={{ color: "#184f68", fontSize: "18px" }}>
            Dominion heaven lesser yielding given Cattle earth was forth
            fruitful image thing. Place very creepeth you Be.
          </p>
        </div>
      </div>
    </div>
  );
};
export { infotypes };
export default Patientinfo;
