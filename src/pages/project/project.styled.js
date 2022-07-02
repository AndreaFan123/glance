import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const Space = styled.div`
  padding: 20px;
`;

export const ProjectDetailWrapper = styled.div`
  max-width: 1200px;
  margin: 40px;
  display: grid;

  grid-gap: 20px;

  @media (max-width: 600px) {
    display: grid;
    grid-template-rows: 3fr;
    margin: 20px 0px 40px 0px;
  }
`;

export const Warning = styled.div`
  margin: 40px 30px 25px 30px;

  h3 {
    font-size: 1.3rem;
    color: ${COLORS.mainColor};
  }
`;
