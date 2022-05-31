import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import background_2 from "../../assets/background_2.svg";

import FooterCom from "../../components/footer/FooterCom";
import Navbar from "../../components/navbar/Navbar";
import { useAuthContext } from "../../hook/useContext";

import {
  Container,
  LandingPageBG,
  TextWrapper,
  MainWrapper,
  Slogan,
  Title,
  BrandName,
} from "./Landing.styled";

export default function LandingPage() {
  const { user } = useAuthContext();
  return (
    <Container>
      <LandingPageBG />
      {!user && <Navbar />}
      <MainWrapper>
        <TextWrapper>
          <Slogan>Simplified work space</Slogan>
          <Title>Manage your team in one space</Title>
          <BrandName>Glance</BrandName>
          <div>
            <Link to="/signup">Sign up</Link>
          </div>
        </TextWrapper>
      </MainWrapper>
      <FooterCom />
      {/* <Footer>
        <p>Glance &copy; 2022 All roght Reserved</p>
      </Footer> */}
    </Container>
  );
}
