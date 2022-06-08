import React, { useState } from "react";
import { BsHandIndex } from "react-icons/bs";
import { ToTop, ToTopIcon } from "./ScrollToTop.styled";

export default function ScrollToTop() {
  const [scroll, setScroll] = useState(false);

  // Add an event listener for listening scroll event
  window.addEventListener("scroll", () => {
    let pageY = window.pageYOffset;
    // console.log(pageY);
    pageY > 600 ? setScroll(true) : setScroll(false);
  });

  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <ToTop scrollState={scroll} onClick={toTop}>
      <BsHandIndex style={ToTopIcon} />
    </ToTop>
  );
}
