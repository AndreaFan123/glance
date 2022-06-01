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
