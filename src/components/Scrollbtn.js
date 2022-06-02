import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
const Scrollbtn = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 1 ? setVisible(true) : setVisible(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  window.addEventListener("scroll", toggle);
  return (
    <button onClick={scrollToTop}>
      <FaAngleUp
        style={{ display: visible ? "inline" : "none" }}
        className="scrollangle"
      />
    </button>
  );
};

export default Scrollbtn;
