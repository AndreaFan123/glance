import styled from "styled-components";
import { COLORS } from "../constants";

export const AddItemCard = styled.div`
  width: 100%;
  font-size: 1rem;
  /* background-color: #fff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05); */
  background-color: #fff;
  box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.7);
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;

  :active {
    transform: scale(1) translateY(1px);
  }
`;

export const FormWrapper = styled.form`
  display: grid;
  input {
    border-radius: 5px;
    padding: 5px;
    outline: none;
    border: 1px solid ${COLORS.mainColor};
    color: ${COLORS.fontColorMedium};
  }
`;

export const FormActionBtn = styled.div`
  padding-top: 15px;
  display: flex;
  gap: 10px;
  align-items: center;
  color: ${COLORS.fontColorMedium};
  font-weight: 700;

  button {
    border: none;
    border-radius: 5px;
    background-color: ${COLORS.mainColor};
    color: ${COLORS.fontColorLight};
    padding: 3px 15px;

    :hover {
      background-color: ${COLORS.mainColorMedium};
    }
  }

  svg {
    font-size: 1.5rem;

    :hover {
      color: ${COLORS.fontColorDark};
    }
  }
`;
