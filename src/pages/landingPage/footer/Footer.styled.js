import { collectionGroup } from "firebase/firestore";
import styled from "styled-components";
import { COLORS } from "../../../components/constants";

export const Footer = styled.footer`
  width: 100%;
  /* max-width: 1920px;
  margin: 0 auto; */
  height: 200px;
  background-color: ${COLORS.mainColor};

  @media (max-width: 490px) {
    height: fit-content;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-gap: 30px; */
  justify-items: center;
  align-items: center;
  padding: 20px;

  ul {
    padding-left: 0px;
  }

  @media (max-width: 490px) {
    display: grid;
    grid-template-columns: none;
    justify-items: start;
    grid-gap: 30px;
  }
`;

export const TextWrapper = styled.div`
  a {
    text-decoration: none;
  }
  h1 {
    font-size: 3rem;
    /* color: ${COLORS.fontColorLight}; */
    background: rgb(250, 250, 250);
    background: linear-gradient(
      45deg,
      rgba(250, 250, 250, 1) 0%,
      rgba(188, 198, 244, 1) 44%,
      rgba(102, 124, 236, 1) 83%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1rem;
    color: ${COLORS.mainColorLight};
  }
`;

export const LinkWrapper = styled.ul`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${COLORS.fontColorLight};
  }
`;

export const IconWrapper = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    color: ${COLORS.fontColorLight};

    :hover {
      transition: 0.4s ease;
      color: ${COLORS.mainColorLight};
    }
  }
`;
