import styled from "styled-components";

import { COLORS } from "../../components/constants";

export const FormWrapper = styled.div`
  width: 1060px;
  max-width: 500px;
  height: 100%;
  /* border: 1px solid ${COLORS.fontColorMedium}; */
  padding: 40px 30px 30px 30px;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.mainColor};
    margin-bottom: 20px;
  }

  label {
    display: block;
    font-size: 1rem;
    padding-bottom: 20px;
  }

  input,
  textarea {
    width: 100%;
  }

  button {
    font-size: 1.1rem;
    color: ${COLORS.fontColorLight};
    background-color: ${COLORS.mainColor};
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
  }
`;
