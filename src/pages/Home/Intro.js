import React from "react";
import "./Intro.css";
import { Link } from "react-router-dom";
import { FaBed, FaHandPaper, FaIdCard, FaUserMd } from "react-icons/fa";
const Intro = () => {
  const scroll = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="div2 block">
      <div>
        <h1>the right care.right now.</h1>
        <p>
          Multiply very years also midst fill fruitful you're moving day. Were
          without man replenish. Air the, is was moveth gathering you're rule
          called let spirit ughf brought green forth so cattle waters stars
          there she'd moveth. Thing years have firmament upon first subdue
          blessed sea stars spirit said. Evening you're them.
        </p>
        <p>
          Have saw replenish saw made bring creature whales darkness evening own
          without fowl waters land beginning great firmament. I Hath there
          without fowl third. Moveth bring years. Night seed whales you. Midst
          gathering given.
        </p>
        <div className="introgrid">
          <div style={{ alignItem: "center" }}>
            <span style={{ padding: "10px", fontSize: "50px", color: "aqua" }}>
              <FaBed />
            </span>
            <p style={{ color: "red", fontSize: "2rem" }}>800+</p>
            <p style={{ fontSize: "1.3rem", fontFamily: "Open sans" }}>Beds</p>
          </div>
          <div style={{ alignItems: "center" }}>
            <span style={{ padding: "10px", fontSize: "50px", color: "aqua" }}>
              <FaIdCard />
            </span>
            <p style={{ color: "red", fontSize: "2rem" }}>1200+</p>
            <p style={{ fontSize: "1.3rem", fontFamily: "Open sans" }}>
              Team Members
            </p>
          </div>
          <div style={{ alignItems: "center" }}>
            <span style={{ padding: "10px", fontSize: "50px", color: "aqua" }}>
              <FaUserMd />
            </span>
            <p style={{ color: "red", fontSize: "2rem" }}>550+</p>
            <p style={{ fontSize: "1.3rem", fontFamily: "Open sans" }}>
              Doctors
            </p>
          </div>
          <div style={{ alignItems: "center" }}>
            <span style={{ padding: "10px", fontSize: "50px", color: "aqua" }}>
              <FaHandPaper />
            </span>
            <p style={{ color: "red", fontSize: "2rem" }}>600+</p>
            <p style={{ fontSize: "1.3rem", fontFamily: "Open sans" }}>
              Volunteers
            </p>
          </div>
        </div>
      </div>
      <div style={{ background: "#f1f8fc", padding: "50px" }}>
        <h2>NEED AN EMERGENCY HELP? CALL US!</h2>
        <a href="tel:+61383766284" style={{ fontSize: "28px" }}>
          +61 (0) 383 766 284
        </a>
        <hr style={{ margin: "30px 20px" }} />
        <p>
          Day can't. Very living lesser multiply the herb, fly. Brought over us
          seasons greater, land sea, the created gathered bring spirit whose
          upon years fruitful third dominion cattle midst night morning bring.
        </p>
        <Link
          to="/contact"
          onClick={scroll}
          className="introbtn"
          style={{ color: "#fff" }}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Intro;
