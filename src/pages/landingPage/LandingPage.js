import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import scrollreveal from "scrollreveal";
import FooterCom from "../../pages/landingPage/footer/FooterCom";
import Navbar from "../../components/navbar/Navbar";
import { useAuthContext } from "../../hook/useContext";

import {
  Container,
  TextWrapper,
  MainWrapper,
  Slogan,
  Title,
  BrandName,
  SignUpBtn,
} from "./Landing.styled";
import About from "./about/About";
import How from "./howitworks/How";
import { WordEffect } from "./sections.styled";

export default function LandingPage() {
  const { user } = useAuthContext();

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
      nav,
      #about,
      #howitworks,
      footer`,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <Container>
      {!user && <Navbar />}
      <MainWrapper>
        <TextWrapper>
          <Slogan>Simplified work space</Slogan>
          <Title>
            <WordEffect>Fast, intuitive, focus!</WordEffect>
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
      <FooterCom />
    </Container>
  );
}
