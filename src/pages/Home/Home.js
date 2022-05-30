import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Form from "./Form";
import Intro from "./Intro";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Home.css";
import hero1 from "../../image/heroimg1.jpg";
import hero2 from "../../image/heroimg2.jpg";
import Typeofservice from "./Typeofservice";
import Experts from "./Experts";
import Video from "./Video";
import Location from "./Location";
import Healthblog from "./Healthblog";
// import Footer from "./Footer";
const Home = ({ setShow }) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  setShow(true);
  const [img, setImg] = useState(hero1);
  // setTimeout(() => setImg(img === hero1 ? hero2 : hero1), 2000);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="home">
      {/* <div className="image">
        <img src={img} alt="" />
        <div className="imgtext">
          <div onClick={() => setImg(img === hero1 ? hero2 : hero1)}>
            <FaAngleLeft color="white" size={"30px"} cursor="pointer" />
          </div>
          
          <div onClick={() => setImg(img === hero1 ? hero2 : hero1)}>
            <FaAngleRight color="white" size={"30px"} cursor="pointer" />
          </div>
        </div>
      </div> */}
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
      >
        <div style={{ position: "relative", minHeight: "50vh" }}>
          <img src={hero1} alt="" className="homeimage" />
          <div
            style={{
              inset: "0",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
              justifyContent: "center",
              // minHeight: "10vh",
            }}
          >
            <h1
              style={{
                color: "#fff",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              getting you back to better
            </h1>
            <p className="subtext">
              Have saw replenish saw made bring creature whales darkness evening
            </p>
          </div>
        </div>
        <div style={{ position: "relative", minHeight: "50vh" }}>
          <img src={hero2} alt="" className="homeimage" />
          <div
            style={{
              inset: "0",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                color: "#fff",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              getting you back to better
            </h1>
            <p className="subtext">
              Have saw replenish saw made bring creature whales darkness evening
            </p>
          </div>
          {/* <div className="hometxt">
            <div style={{ margin: "auto" }}>
              <h1 style={{ color: "#fff", textTransform: "uppercase" }}>
                getting you back to better
              </h1>
              <p className="subtext">
                Have saw replenish saw made bring creature whales darkness
                evening
              </p>
            </div>
          </div> */}
        </div>
      </Carousel>
      <Form />
      <Intro />
      <Typeofservice />
      <Experts />
      <Video />
      <Location />
      <Healthblog />
      {/* <Footer /> */}
    </div>
  );
};
export default Home;
