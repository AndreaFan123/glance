import styled from "styled-components";
import background_3 from "../../assets/background_3.svg";
import { COLORS } from "../../components/constants";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
`;

export const LandingPageBG = styled.div`
  background-image: url(${background_3});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  z-index: -1000;
  position: absolute;
`;

export const NavWrapper = styled.header`
  /* width: 100%; */
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;

  a {
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  padding: 10px 20px;
  a {
    font-size: 2rem;
    font-weight: 900;
    color: ${COLORS.fontColorLight};
  }
`;

export const ButtonWrapper = styled.div`
  font-size: 1.2rem;
`;

export const ButtonLogin = styled.a`
  color: ${(props) => props.btnColor.bgDark};
  background-color: ${(props) => props.btnColor.fontLight};
  padding: 12px 22px;
  border-radius: 8px;
`;

export const ButtonSignup = styled.a`
  color: ${(props) => props.btnColor.fontLight};
  background-color: ${(props) => props.btnColor.bgDark};
  border: 2px solid ${(props) => props.btnColor.fontLight};
  padding: 10px 12px;
  margin-left: 40px;
  border-radius: 8px;
  font-weight: 700;
`;

export const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 7rem;
`;

export const TextWrapper = styled.div`
  /* width: 100%;
  max-width: 1350px; */
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Slogan = styled.p`
  font-size: 1.3rem;
  color: ${COLORS.fontColorLight};
  display: inline-block;
  letter-spacing: 1.5px;
`;

export const Title = styled.p`
  font-size: 3rem;
  color: ${COLORS.fontColorLight};
  /* background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(215, 211, 211, 1) 47%,
    rgba(125, 132, 162, 1) 98%,
    rgba(73, 86, 130, 1) 100%
  ); */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

export const BrandName = styled.h2`
  font-size: 7rem;
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(117, 126, 255, 1) 95%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

// export const Footer = styled.footer`
//   width: 100%;
//   bottom: 15px;
//   text-align: center;
//   position: fixed;
//   vertical-align: middle;
//   color: ${COLORS.mainColor};
//   font-size: 1rem;
// `;
