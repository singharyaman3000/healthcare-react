import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import heroimg1 from "../image/heroimg1.jpg";
import "./Home.css";
const Home = () => {
  const [img, setImg] = useState("hero1");
  //   setTimeout(() => setImg(img === "hero1" ? "hero2" : "hero1"), 2000);
  return (
    <div className={`image ${img}`}>
      <div className="imgtext">
        <div onClick={() => setImg(img === "hero1" ? "hero2" : "hero1")}>
          <FaAngleLeft />
        </div>
        <div>
          <h1 style={{ color: "#fff" }}>getting you back to better</h1>
          <p style={{ color: "#fff" }}>
            Have saw replenish saw made bring creature whales darkness evening
          </p>
        </div>
        <div onClick={() => setImg(img === "hero1" ? "hero2" : "hero1")}>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};
export default Home;
