import styled from "styled-components";
import { COLORS } from "../constants";

export const CardWrapper = styled.section`
  font-size: 1rem;
  background-color: #fff;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 15px;
`;

export const CardTop = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* svg {
    opacity: 0;
    transition: 200ms;

    :hover {
      opacity: 1;
    }
  } */
`;

export const CardTitle = styled.div`
  font-size: 1rem;
  padding: 15px 0;
`;

export const CardInfo = styled.div`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${COLORS.fontColorMedium};
  }
`;
