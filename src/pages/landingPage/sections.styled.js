import styled from "styled-components";
import { COLORS } from "../../components/constants";
import signup from "../../assets/signup.png";

////// General //////

export const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 14rem;
  padding: 0 30px;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  justify-items: center;

  @media screen and (max-width: 721px) {
    display: grid;
    grid-template-columns: none;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  position: relative;

  h3 {
    font-size: 1.8rem;
    color: ${COLORS.iconColor};
    padding-bottom: 10px;
  }

  @media screen and (max-width: 720px) {
    grid-row: 1;
  }
`;

export const Slogan = styled.p`
  font-size: 3rem;
  color: ${COLORS.mainColor};
  font-weight: 900;
  line-height: 1;

  @media screen and (max-width: 500px) {
    font-size: 2.5rem;
  }
`;

export const Number = styled.span`
  font-weight: 500;
  font-size: 5rem;
  color: ${COLORS.mainColorLight};
  line-height: 1;

  @media screen and (max-width: 500px) {
    font-size: 4rem;
  }
`;

export const ImgWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const WordEffect = styled.span`
  padding: 0 10px;
  background: rgb(250, 250, 250);
  background: linear-gradient(
    180deg,
    rgba(250, 250, 250, 0.1) 0%,
    rgba(255, 204, 219, 1) 100%
  );
`;

////// About //////

////// How it works //////
export const HowitWorksSection = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HowitWorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  padding: 3rem 0;

  @media (max-width: 721px) {
    display: grid;
    grid-template-columns: none;

    margin-top: 50px;
  }
`;

////// Contact //////
export const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background-image: url(${signup});
  background-size: cover;
  max-width: 1200px;
  min-height: 700px;
  /* position: relative; */
  padding: 30px;
  border-radius: 10px;
`;

export const FormWrapper = styled.form`
  position: absolute;
  bottom: 477px;
  left: 818px;
  width: 30%;
  height: 10%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 0 rgb(118, 127, 162);

  label,
  input,
  textarea {
    display: block;
    width: 100%;
    border-radius: 5px;
  }

  label {
    font-size: 1.3rem;
    color: ${COLORS.mainColor};
    padding-bottom: 20px;
  }

  button {
    background-color: ${COLORS.mainColor};
    color: ${COLORS.fontColorLight};
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 1.2rem;
  }
`;

export const FormSlogan = styled.div`
  h3 {
    font-size: 3rem;
    color: ${COLORS.iconColor};
    font-weight: 900;
    line-height: 1;
  }

  h2 {
    font-size: 4rem;
    color: ${COLORS.fontColorLight};
  }
`;
