import styled from "styled-components";

import { COLORS } from "../../components/constants";

export const Container = styled.div`
  width: 100%;
  /* max-width: 1920px; */
  /* margin: 0 auto; */
`;

export const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 5rem auto 7rem auto;

  @media screen and (max-width: 721px) {
    margin: 1rem auto 5rem auto;
  }
`;
// export const NavWrapper = styled.header`
//   /* width: 100%; */
//   max-width: 1200px;
//   margin: 0 auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px 20px;

//   a {
//     text-decoration: none;
//   }
// `;

// export const Logo = styled.div`
//   padding: 10px 20px;
//   a {
//     font-size: 2rem;
//     font-weight: 900;
//     color: ${COLORS.fontColorLight};
//   }
// `;

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
    transition: 0.5s ease-out;
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

  @media (max-width: 721px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 391px) {
    font-size: 2rem;
  }
`;

export const BrandName = styled.h2`
  font-size: 10rem;
  margin-bottom: 10px;
  background: rgb(30, 47, 107);
  background: linear-gradient(
    90deg,
    rgba(30, 47, 107, 1) 35%,
    rgba(58, 86, 232, 1) 85%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 542px) {
    font-size: 7rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 5rem;
  }
`;

export const SignUpBtn = styled.div`
  margin: 20px 0;
`;
