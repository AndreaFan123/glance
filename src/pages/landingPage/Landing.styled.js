import styled from "styled-components";

import { COLORS } from "../../components/constants";

export const Container = styled.div`
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
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

export const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 3rem auto 0 auto;

  /* @media (max-width: 721px) {
    padding-top: 2rem;
  } */
`;

export const TextWrapper = styled.div`
  /* width: 100%;
  max-width: 1350px; */
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;

  a {
    font-size: 2rem;
    text-decoration: none;
    border-radius: 5px;
    color: ${COLORS.fontColorLight};
    background-color: ${COLORS.mainColor};
    padding: 8px 20px;
    transition: 0.3s ease-out;
    &:hover,
    &.active {
      background-color: transparent;
      border: 2px solid ${COLORS.mainColorMedium};
      color: ${COLORS.mainColor};
      border-radius: 15px;
    }
  }
`;

export const Slogan = styled.p`
  font-size: 1.3rem;
  color: ${COLORS.mainColorMedium};
  display: inline-block;
  letter-spacing: 1.5px;
`;

export const Title = styled.p`
  font-size: 3rem;
  font-weight: 700;

  color: ${COLORS.mainColor};
  /* background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(215, 211, 211, 1) 47%,
    rgba(125, 132, 162, 1) 98%,
    rgba(73, 86, 130, 1) 100%
  ); */
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  @media (max-width: 721px) {
    font-size: 2.5rem;
  }
`;

export const BrandName = styled.h2`
  font-size: 7rem;
  margin-bottom: 10px;
  background: rgb(30, 47, 107);
  background: linear-gradient(
    90deg,
    rgba(30, 47, 107, 1) 35%,
    rgba(58, 86, 232, 1) 85%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SignUpBtn = styled.div`
  margin: 20px 0;
`;

export const SVGWrapper = styled.div`
  height: 200px;

  svg {
    position: absolute;
    top: -337px;
    z-index: -10;
  }

  @media (max-width: 721px) {
    svg {
      top: 25px;
    }
  }
`;
