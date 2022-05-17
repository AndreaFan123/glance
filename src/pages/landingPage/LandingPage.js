import React from "react";
// import background_2 from "../../assets/background_2.svg";

import FooterCom from "../../components/footer/FooterCom";
import Navbar from "../../components/navbar/Navbar";
import { useAuthContext } from "../../hook/useContext";

import {
  Container,
  LandingPageBG,
  TextWrapper,
  MainWrapper,
  NavWrapper,
  Slogan,
  Title,
  BrandName,
} from "./Landing.styled";
// import { COLORS } from "../../components/constants";

// const btnColor = {
//   bgDark: `${COLORS.mainColor}`,
//   bgLight: `${COLORS.fontColorLight}`,
//   fontDark: `${COLORS.mainColor}`,
//   fontLight: `${COLORS.fontColorLight}`,
// };

export default function LandingPage() {
  const { user } = useAuthContext();
  return (
    <Container>
      {/* {!user && <Navbar />} */}
      <LandingPageBG />
      <MainWrapper>
        <TextWrapper>
          <Slogan>Simplified work space</Slogan>
          <Title>Manage your team in one space, Know your team at a</Title>
          <BrandName>Glance</BrandName>
        </TextWrapper>
      </MainWrapper>
      <FooterCom />
      {/* <Footer>
        <p>Glance &copy; 2022 All roght Reserved</p>
      </Footer> */}
    </Container>
  );
}
