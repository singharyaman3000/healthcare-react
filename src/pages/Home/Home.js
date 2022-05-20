import { useState } from "react";
import Form from "./Form";
import Intro from "./Intro";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Home.css";
import Typeofservice from "./Typeofservice";
import Experts from "./Experts";
import Video from "./Video";
import Location from "./Location";
import Healthblog from "./Healthblog";
import Footer from "./Footer";
const Home = () => {
  const [img, setImg] = useState("hero1");
  // setTimeout(() => setImg(img === "hero1" ? "hero2" : "hero1"), 2000);
  return (
    <div>
      <div className={`image ${img}`}>
        <div className="imgtext">
          <div onClick={() => setImg(img === "hero1" ? "hero2" : "hero1")}>
            <FaAngleLeft color="white" size={"30px"} cursor="pointer" />
          </div>
          <div className="hometxt">
            <div style={{ margin: "auto" }}>
              <h1 style={{ color: "#fff", textTransform: "uppercase" }}>
                getting you back to better
              </h1>
              <p className="subtext">
                Have saw replenish saw made bring creature whales darkness
                evening
              </p>
            </div>
          </div>
          <div onClick={() => setImg(img === "hero1" ? "hero2" : "hero1")}>
            <FaAngleRight color="white" size={"30px"} cursor="pointer" />
          </div>
        </div>
      </div>
      <Form />
      <Intro />
      <Typeofservice />
      <Experts />
      <Video />
      <Location />
      <Healthblog />
      <Footer />
    </div>
  );
};
export default Home;
