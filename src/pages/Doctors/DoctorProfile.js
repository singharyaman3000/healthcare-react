import React from "react";
import banner from "../../image/dr-banner.jpg";
import Imagecom from "../../components/Imagecom";
import { Link, useParams } from "react-router-dom";
import {
  FaAngleDoubleRight,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaQuoteLeft,
} from "react-icons/fa";
// import Doctor from "./Doctors";
import Doctors from "./Doctors";
const DoctorProfile = () => {
  const scroll = () => {
    window.scroll(0, 0);
  };
  const { d_id } = useParams();
  const doctor = Doctors.find((doctor) => doctor.username === d_id);
  return doctor ? (
    <div>
      <Imagecom
        image={banner}
        path={[
          { text: "home", link: "" },
          { text: "Our Doctors", link: "our-doctor" },
        ]}
        content={`${doctor.name}`}
        title={`${doctor.name}`}
      />
      <div className="profilegrid block">
        <div className="profilelist block">
          <h3 style={{ color: "#184f68", fontSize: "30px" }}>OUR EXPERTS</h3>
          {Doctors.map((doctor) => (
            <Link to={`/our-doctor/${doctor.username}`}>
              <div style={{ display: "flex", paddingBlock: "20px" }}>
                <FaAngleDoubleRight style={{ color: "#00bcbd" }} />
                <div>
                  <h4 style={{ color: "#00bcbd" }}>{doctor.name}</h4>
                  <p style={{ color: "#9faccf" }}>{doctor.speciality}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <div className="profileimagegrid block">
            <div>
              <img src={doctor.image} alt="" style={{ height: "100%" }} />
            </div>
            <div
              style={{
                background: "#00bcbd",
                padding: "10px",
                color: "#184f68",
              }}
            >
              <h2 style={{ color: "#fff" }}>{doctor.name}</h2>
              <p style={{ color: "#fff", fontSize: "25px" }}>
                {doctor.speciality}
              </p>
              <div
                style={{
                  width: "95%",
                  marginInline: "auto",
                  background: "#184f68af",
                  height: "1px",
                }}
              ></div>
              <div style={{ paddingBlock: "10px" }}>
                <FaPhoneAlt />
                <a href="tel:5612231325">(561) 223-1325</a>
              </div>
              <div>
                <FaEnvelope />
                <a href="mailto: info@healthcare.com">info@healthcare.com</a>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  color: "#184f68",
                  fontSize: "25px",
                  paddingBottom: "10px",
                }}
              >
                <Link to="/">
                  <FaFacebook />
                </Link>
                <Link to="/">
                  <FaTwitter />
                </Link>
                <Link to="/">
                  <FaYoutube />
                </Link>
              </div>
              <div
                style={{
                  width: "95%",
                  marginInline: "auto",
                  background: "#184f68af",
                  height: "1px",
                }}
              ></div>
              <p style={{ paddingBlock: "20px" }}>
                <FaQuoteLeft />
                You're day midst of brought. Winged together which forth itself
                in you air dominion good darkness seed upon be made upon i
                moved.
              </p>
            </div>
          </div>
          <div className="profilecontent block">
            <h3>BIOGRAPHY</h3>
            <p>
              Bearing called a fruit greater created hath fourth two. Also.
              Light day greater wherein made. Days, stars fruit she'd after male
              fowl lesser divided. Firmament one whales called of, firmament god
              you're waters years upon abundantly brought image, void above he,
              saw. Doesn't rule, god, unto greater and fish, spirit forth There.
              Deep face upon greater you, seasons one. Day spirit so dry he
              called.
            </p>
          </div>
          <div className="profilecontent block">
            <h3>EDUCATION</h3>
            <p style={{ color: "#00bcbd" }}>
              Abc University of Los Angeles{" "}
              <span style={{ color: "#9faccf" }}>(2006-2008)</span>
            </p>
            <p>
              Sigh view am high neat half to what. Sent late held than set why
              wife our. If an blessing building steepest. Agreement distrusts
              mrs six affection satisfied.
            </p>
            <p style={{ color: "#00bcbd" }}>
              Abc University of Los Angeles{" "}
              <span style={{ color: "#9faccf" }}>(2004-2005)</span>
            </p>
            <p>
              Sigh view am high neat half to what. Sent late held than set why
              wife our. If an blessing building steepest. Agreement distrusts
              mrs six affection satisfied.
            </p>
          </div>
          <div className="profileform block">
            <h3>CONTACT ME</h3>
            <div className="forminput">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Contact" />
            </div>
            <textarea
              cols="30"
              rows="5"
              placeholder="Case Description"
            ></textarea>
            <Link to={`/our-doctor/${doctor.username}`} onClick={scroll}>
              SUBMIT NOW
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default DoctorProfile;
