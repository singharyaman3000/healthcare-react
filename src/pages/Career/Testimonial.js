import React from "react";
import { Link } from "react-router-dom";
import pv1 from "../../image/patient-video-1.jpg";
import pv2 from "../../image/patient-video-2.jpg";
import pv3 from "../../image/patient-video-3.jpg";
import playicon from "../../image/inner-video-icon.png";
import Testimonialcom from "./Testimonialcom";
import banner from "../../image/testimonial-banner.jpg";
import Imagecom from "../../components/Imagecom";
// import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const testimonial = [
    {
      name: "IRVIN TUTTLE",
      content:
        "Evening over without above be won't yielding days man, there. She'd man you female stars life darkness upon fly likeness That and fly creature image, all open divided won't blessed, can't after set fill dry creeping lorem ipsum.",
    },
    {
      name: "JOSHUA SPALDING",
      content:
        "Whose forth kind moving divide. Own so in bearing light fruitful. Beginning give fourth i, a image meat thing after night place very created. Evening forth make replenish without our. Him replenish made seasons mosum.",
    },
    {
      name: "RICHARD CONTRERAS ",
      content:
        "Grass whales likeness kind creeping fowl him greater spirit day fifth divided his bring so forth given to. Night may every appear for forth, without you, fly. Green from.",
    },
    {
      name: "BERTHA CORKER",
      content:
        "Hat fruitful from divided second day morning she'd it and third evening. Two which likeness. Appear his grass heaven land darkness won't don't seas. Us over and night had that she'd.",
    },
    {
      name: "AMANDA BURKE",
      content:
        "Evening over without above be won't yielding days man, there. She'd man you female stars life darkness upon fly likeness That and fly creature image, all open divided won't blessed, can't after set fill dry creeping lorem ipsum.",
    },
    {
      name: "JOHN DOE",
      content:
        "Give beast under midst Evening called called his own god let living. Darkness he make moving image cattle can't fish she'd brought set, have deep.",
    },
    {
      name: "MARTHA PINTO",
      content:
        "Evening over without above be won't yielding days man, there. She'd man you female stars life darkness upon fly likeness That and fly creature image, all open divided won't blessed, can't after set fill dry creeping lorem ipsum.",
    },
    {
      name: "ABBY ROSSO",
      content:
        "He over that make beginning it thing divide winged to replenish dominion one dry, lesser to moveth open gathering form bring it morning rule, winged fruitful their thing moved grass.",
    },
    {
      name: "JOHN DOE",
      content:
        "Great every above. Blessed fourth blessed land seed have own lesser appear it won't of night won't us behold moveth form thing bearing third multiply called evening give cattle created multiply.",
    },
    {
      name: "ANTHONY HARRISON",
      content:
        "Evening over without above be won't yielding days man, there. She'd man you female stars life darkness upon fly likeness That and fly creature image, all open divided won't blessed, can't after set fill dry creeping lorem ipsum.",
    },
  ];
  return (
    <div>
      <Imagecom
        image={banner}
        path={[
          { text: "home", link: "" },
          { text: "career", link: "career" },
        ]}
        content={"Technical Ambassador"}
        title={""}
      />
      <div
        className="test block"
        style={{ background: "#f84d4f", marginTop: "-80px" }}
      >
        <p
          style={{
            color: "#fff",
            padding: "25px",
            fontSize: "18px",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim.
        </p>
        <div style={{ color: "#fff", padding: "10px", fontSize: "20px" }}>
          GARIMA ANAND- Satisfied Patient
        </div>
      </div>
      <div className="careergrid block">
        <div>
          <Link to="/testimonial">
            <div
              style={{ position: "relative" }}
              onClick={() => window.scroll(0, 0)}
            >
              <img src={pv1} alt="" />
              <img src={playicon} alt="" className="careerplaybtn" />
              {/* <FaPlayCircle className="careerplaybtn" /> */}
            </div>
            <div
              style={{ fontSize: "20px", color: "#00bcbd", textAlign: "left" }}
            >
              MATHEW BROWNY - Satisfied Patient
            </div>
          </Link>
        </div>
        <div>
          <Link to="/testimonial">
            <div
              style={{ position: "relative" }}
              onClick={() => window.scroll(0, 0)}
            >
              <img src={pv2} alt="" style={{ position: "relative" }} />
              {/* <FaPlayCircle className="careerplaybtn" /> */}
              <img src={playicon} alt="" className="careerplaybtn" />
            </div>
            <div
              style={{ fontSize: "20px", color: "#00bcbd", textAlign: "left" }}
            >
              JOHNSON DOE - Satisfied Patient
            </div>
          </Link>
        </div>
        <div>
          <Link to="/testimonial">
            <div
              style={{ position: "relative" }}
              onClick={() => window.scroll(0, 0)}
            >
              <img src={pv3} alt="" style={{ position: "relative" }} />
              <img src={playicon} alt="" className="careerplaybtn" />
              {/* <FaPlayCircle className="careerplaybtn" /> */}
            </div>
            <div
              style={{ fontSize: "20px", color: "#00bcbd", textAlign: "left" }}
            >
              GARIMA ANAND - Satisfied Patient
            </div>
          </Link>
        </div>
      </div>
      <Testimonialcom testimonial={testimonial} />
    </div>
  );
};

export default Testimonial;
