import styled from "styled-components";
import Background from "react-svg-loader!../../assets/Background.svg";
import { COLORS } from "../../components/constants";

export const LandingPageBG = styled(Background)`
  width: 100%;
  height: 100%;
  z-index: -1000;
  position: absolute;
`;

export const NavWrapper = styled.header`
  width: 100%;
  max-width: 1350px;
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
  color: ${(props) => props.btnColor.fontDark};

  background-color: ${(props) => props.btnColor.fontLight};

  padding: 12px 22px;
  border-radius: 8px;
`;

export const ButtonSignup = styled.a`
  color: ${(props) => props.btnColor.fontLight};
  background-color: ${(props) => props.btnColor.bgDark};
  border: 2px solid ${(props) => props.btnColor.fontLight};
  padding: 10px 12px;
  margin-left: 30px;
  border-radius: 8px;
  font-weight: 700;
`;

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  padding-top: 5rem;
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 1350px;
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
    rgba(250, 250, 250, 1) 0%,
    rgba(252, 231, 237, 1) 36%,
    rgba(249, 161, 188, 1) 80%,
    rgba(245, 71, 126, 1) 130%
  );
  -webkit-background-clip: text;
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
