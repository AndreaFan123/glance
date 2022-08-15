import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const TodoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 3;
  /* border: 1px solid ${COLORS.mainColor};
  border-radius: 3px; */
`;

export const TextContainer = styled.section`
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: 2rem;
    color: ${COLORS.mainColor};
  }

  p {
    font-size: 1rem;
    color: ${COLORS.mainColorLight};
  }
`;

export const Inputcontainer = styled.div`
  margin-top: 10px;
`;
