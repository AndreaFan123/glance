import styled from "styled-components";

import { COLORS } from "../../components/constants";

export const FormWrapper = styled.div`
  padding: 30px;
  /* width: 1060px; */
  max-width: 1200px;
  margin: 40px;
  /* height: 100vh; */
  /* border: 1px solid ${COLORS.fontColorMedium}; */

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.mainColor};
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 30px;
  }

  h4 {
    font-size: 1.1rem;
    color: ${COLORS.mainColor};
    margin-bottom: 3px;
  }

  input,
  textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid ${COLORS.borderLight};
    border-radius: 5px;
    white-space: pre-line;
  }

  button {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${COLORS.fontColorLight};
    background-color: ${COLORS.mainColor};
    border: none;
    padding: 10px 20px;
    margin-right: 15px;
    border-radius: 8px;
  }
`;

export const From = styled.form`
  width: 100%;
  height: 100%;
`;

export const FormSections = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: stretch;
  grid-gap: 20px;
  padding: 15px 0;
  font-size: 1.2rem;
`;

export const ButtonWrapper = styled.div`
  margin-top: 15px;
  position: relative;

  :last-child {
    :hover::after {
      content: "Reload your save content";
      position: absolute;
      top: 33px;
      left: 136px;
      background-color: ${COLORS.fontColorLight};
      color: ${COLORS.fontColorDark};
      padding: 10px;
      transition: all 0.3s ease;
    }
  }

  button {
    padding: 7px 15px;
  }
`;
