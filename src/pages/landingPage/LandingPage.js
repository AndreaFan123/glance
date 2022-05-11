import React from "react";
// import background_2 from "../../assets/background_2.svg";

import FooterCom from "../../components/footer/FooterCom";

import {
  Container,
  ButtonLogin,
  ButtonSignup,
  ButtonWrapper,
  LandingPageBG,
  Logo,
  TextWrapper,
  MainWrapper,
  NavWrapper,
  Slogan,
  Title,
  BrandName,
} from "./Landing.styled";
import { COLORS } from "../../components/constants";

const btnColor = {
  bgDark: `${COLORS.mainColor}`,
  bgLight: `${COLORS.fontColorLight}`,
  fontDark: `${COLORS.mainColor}`,
  fontLight: `${COLORS.fontColorLight}`,
};

export default function LandingPage() {
  return (
    <Container>
      <LandingPageBG />
      <NavWrapper>
        <Logo>
          <a href="/" alt="Simplified work spance">
            Glance
          </a>
        </Logo>

        <ButtonWrapper>
          <ButtonLogin btnColor={btnColor} href="/login">
            Login
          </ButtonLogin>
          <ButtonSignup btnColor={btnColor} href="/signup">
            Sign up
          </ButtonSignup>
        </ButtonWrapper>
      </NavWrapper>
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
