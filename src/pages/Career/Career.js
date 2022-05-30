import React from "react";
import "./career.css";
import { Link } from "react-router-dom";
import { FaUmbrellaBeach, FaHeart, FaHeadSideVirus } from "react-icons/fa";
import { GiMoneyStack, GiStairsGoal, GiDramaMasks } from "react-icons/gi";
import Imagecom from "../../components/Imagecom";
import banner from "../../image/carrer-banner.jpg";
import career1 from "../../image/career-1.jpg";
import career2 from "../../image/career-2.jpg";
import career3 from "../../image/career-3.jpg";
import playicon from "../../image/inner-video-icon.png";
import Silder1 from "./Silder1";
import Slider2 from "./Slider2";
import Currentposition from "./Currentposition";
const Career = ({ setShow }) => {
  setShow(true);
  return (
    <div>
      <Imagecom
        image={banner}
        path={"home"}
        content={"Careers"}
        title={"WE'ARE HIRING!"}
      />
      <div style={{ background: "#f1f8fc", marginBlock: "0px" }}>
        <div className="career1 block">
          <h1 style={{ padding: "20px", fontSize: "50px" }}>
            IT’S WORK THAT MATTERS.
          </h1>
          <p style={{ padding: "20px", fontSize: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidata-bst non proident.
          </p>
          <Link to="/career" className="patient-info-btn">
            VIEW CURRENT OPENINGS
          </Link>
        </div>
        <div className="careergrid block">
          <div>
            <Link to="/career">
              <div
                style={{ position: "relative" }}
                onClick={() => window.scroll(0, 0)}
              >
                <img src={career1} alt="" />
                <img src={playicon} alt="" className="careerplaybtn" />
                {/* <FaPlayCircle className="careerplaybtn" /> */}
              </div>
              <h4
                style={{ padding: "20px", fontSize: "30px", color: "#00bcbd" }}
              >
                THE WORK
              </h4>
              <p
                style={{ padding: "20px", fontSize: "18px", color: "#214e66" }}
              >
                Sodales cubilia arcu curabitur metus. Senectus convallis
                tristique. Habitant maecenas mauris justo venenatis sociosqu
                tempor, the arctu malesuadar habitant tellus sapien.
              </p>
            </Link>
          </div>
          <div>
            <Link to="/career">
              <div
                style={{ position: "relative" }}
                onClick={() => window.scroll(0, 0)}
              >
                <img src={career2} alt="" style={{ position: "relative" }} />
                {/* <FaPlayCircle className="careerplaybtn" /> */}
                <img src={playicon} alt="" className="careerplaybtn" />
              </div>
              <h4
                style={{ padding: "20px", fontSize: "30px", color: "#00bcbd" }}
              >
                THE PEOPLE
              </h4>
              <p
                style={{ padding: "20px", fontSize: "18px", color: "#214e66" }}
              >
                Hac justo euismod amet condimentum etiam nulla ut donec lorem
                quam at dolor ipsum. Risus praesent elementum sodales lectus
                lacus pharetra hac montes integer, pretium justo class.
              </p>
            </Link>
          </div>
          <div>
            <Link to="/career">
              <div
                style={{ position: "relative" }}
                onClick={() => window.scroll(0, 0)}
              >
                <img src={career3} alt="" style={{ position: "relative" }} />
                <img src={playicon} alt="" className="careerplaybtn" />
                {/* <FaPlayCircle className="careerplaybtn" /> */}
              </div>
              <h4
                style={{ padding: "20px", fontSize: "30px", color: "#00bcbd" }}
              >
                THE ENVIRONMENT
              </h4>
              <p
                style={{ padding: "20px", fontSize: "18px", color: "#214e66" }}
              >
                Venenatis a ornare condimentum quam, augue habitasse platea enim
                feugiat nisi id habitasse faucibus senectus Magna. penatibus
                posuere the euismod ornare vivamus lectus torquent integer
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="block">
        <h3 style={{ textAlign: "center", color: "#184f68", fontSize: "40px" }}>
          LIFE AT HEALTHCARE
        </h3>
        <div className="career-life-grid">
          <div>
            <FaUmbrellaBeach />
            <h4>PAID PARENTAL LEAVE</h4>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div>
            <FaHeart />
            <h4>HEALTHCARE COVERAGE</h4>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div>
            <GiMoneyStack />
            <h4>COMPETITIVE COMPENSATION</h4>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div>
            <FaHeadSideVirus />
            <h4>WORK/LIFE BALANCE</h4>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div>
            <GiStairsGoal />
            <h4>LEARNING AND DEVELOPMENT</h4>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
          <div>
            <GiDramaMasks />
            <h4>CULINARY PROGRAMS</h4>
            <p>
              Under make after own them night ssea dominion fowl lights third
              bring creping darkness first you're was midst
            </p>
          </div>
        </div>
      </div>
      <Silder1 />
      <div style={{ background: "#00bcbd" }}>
        <Slider2 />
      </div>
      <Currentposition />
    </div>
  );
};

export default Career;
