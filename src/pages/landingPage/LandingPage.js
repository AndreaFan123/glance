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
  SectionContainer,
  SignUpBtn,
} from "./Landing.styled";
import About from "./about/About";
import How from "./howitworks/How";
import Contact from "./contact/Contact";

export default function LandingPage() {
  const { user } = useAuthContext();
  return (
    <Container>
      {/* <LandingPageBG /> */}
      {!user && <Navbar />}
      <MainWrapper>
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
        </TextWrapper>
      </MainWrapper>
      <About />
      <How />
      <Contact />
      <FooterCom />
    </Container>
  );
}
