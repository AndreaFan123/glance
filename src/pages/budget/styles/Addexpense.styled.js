import styled from "styled-components";
import { COLORS } from "../../../components/constants";

export const FormWrapper = styled.form`
  /* color: ${COLORS.fontColorLight}; */

  label {
    display: block;

    margin-bottom: 20px;

    span {
      font-size: 1.2rem;
      padding-bottom: 5px;
      color: ${COLORS.fontColorLight};
    }

    input {
      width: 100%;
      padding: 5px;
      border: 1px solid ${COLORS.borderLight};
      border-radius: 5px;
    }
  }

  button {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${COLORS.mainColor};
    background-color: ${COLORS.fontColorLight};
    border: none;
    padding: 10px 18px;
    margin: 10px 0;
    border-radius: 5px;
  }
`;
