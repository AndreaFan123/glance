import React from "react";
import { Link } from "react-router-dom";

// import background_2 from "../../assets/background_2.svg";
import FooterCom from "../../pages/landingPage/footer/FooterCom";
import Navbar from "../../components/navbar/Navbar";
import { useAuthContext } from "../../hook/useContext";

import {
  Container,
  // LandingPageBG,
  TextWrapper,
  MainWrapper,
  Slogan,
  Title,
  BrandName,
  SignUpBtn,
  SVGWrapper,
} from "./Landing.styled";
import About from "./about/About";
import How from "./howitworks/How";
import Contact from "./contact/Contact";
// import ScrollToTop from "../../components/scrollToTop/ScrollToTop";

export default function LandingPage() {
  const { user } = useAuthContext();
  return (
    <Container>
      {/* <LandingPageBG /> */}
      {!user && <Navbar />}
      <MainWrapper>
        {/* <ScrollToTop /> */}
        <TextWrapper>
          <Slogan>Simplified work space</Slogan>
          <Title>
            Fast, intuitive, focus!
            <br /> Maintain your knowledge in one space.
          </Title>
          <BrandName>Glance</BrandName>
          <SignUpBtn>
            <Link to="/signup">Sign up</Link>
          </SignUpBtn>
          <SVGWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              // xmlns:svgjs="http://svgjs.dev/svgjs"
              viewBox="0 0 800 800"
            >
              <defs>
                <linearGradient
                  gradientTransform="rotate(45 0.5 0.5)"
                  x1="50%"
                  y1="0%"
                  x2="50%"
                  y2="100%"
                  id="ppperspective-grad2"
                >
                  <stop
                    stop-color="hsl(342,100%,90%)"
                    stop-opacity="1"
                    offset="0%"
                  ></stop>
                  <stop
                    stop-color="hsl(342,100%,90%)"
                    stop-opacity="0"
                    offset="100%"
                  ></stop>
                </linearGradient>
              </defs>
              <g fill="hsl(342,100%,90%)" shape-rendering="crispEdges">
                <polygon
                  points="0,511 255.5,255.5 255.5,544.5 0,800"
                  fill="url(#ppperspective-grad2)"
                  opacity="0.45"
                ></polygon>
                <polygon
                  points="0,800 255.5,544.5 544.5,544.5 289,800"
                  fill="url(#ppperspective-grad2)"
                  opacity="0.22"
                ></polygon>
                <rect
                  className="svg"
                  width="289"
                  height="289"
                  x="255.5"
                  y="255.5"
                ></rect>
              </g>
            </svg>
          </SVGWrapper>
        </TextWrapper>
      </MainWrapper>
      <About />
      <How />
      <Contact />
      <FooterCom />
    </Container>
  );
}
