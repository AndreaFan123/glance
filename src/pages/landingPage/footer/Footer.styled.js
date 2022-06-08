import { collectionGroup } from "firebase/firestore";
import styled from "styled-components";
import { COLORS } from "../../../components/constants";

export const Footer = styled.footer`
  width: 100%;
  height: 150px;
  background-color: ${COLORS.mainColor};
`;

export const FooterWrapper = styled.div`
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-gap: 30px; */
  justify-items: center;
  align-items: center;
  padding: 20px;
`;

export const TextWrapper = styled.div`
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
  font-size: 1.2rem;
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
  }
`;
