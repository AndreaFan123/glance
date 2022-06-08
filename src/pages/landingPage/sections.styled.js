import styled from "styled-components";
import { COLORS } from "../../components/constants";

////// General //////

export const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 100px;
  padding: 0 20px;
`;

export const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 30px; */
  justify-items: center;
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  h2 {
    font-size: 2rem;
    color: ${COLORS.mainColor};
  }

  h3 {
    font-size: 1.5rem;
    color: ${COLORS.mainColor};
  }

  p {
    color: ${COLORS.mainColorMedium};
    font-size: 1.2rem;
  }
`;

export const ImgWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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
`;

////// Contact //////
export const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: ${COLORS.mainColor};
  }

  p {
    font-size: 1.2rem;
    color: ${COLORS.iconColor};
  }
`;

export const FormWrapper = styled.form`
  label,
  input,
  textarea {
    display: block;
  }

  label {
    font-size: 1.3rem;
    color: ${COLORS.mainColor};
  }
`;
