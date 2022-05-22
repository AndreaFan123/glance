import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const FilterWrapper = styled.div`
  margin-bottom: 20px;
  font-size: 0.9rem;

  button {
    background-color: ${COLORS.borderLight};
    border: none;
    border-radius: 20px;
    color: ${COLORS.fontColorDark};
    padding: 5px 15px;
    margin: 5px;

    &.active {
      font-weight: 900;
      background-color: ${COLORS.iconColor};
      color: ${COLORS.fontColorLight};
    }
  }
`;
