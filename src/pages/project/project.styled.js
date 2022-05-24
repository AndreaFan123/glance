import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const Space = styled.div`
  padding: 20px;
`;

export const ProjectDetailWrapper = styled.div`
  /* margin: 40px 30px 25px 30px; */
  display: grid;
  /* grid-template-columns: 3fr 2fr; */
  grid-gap: 20px;

  @media (max-width: 834px) {
    display: grid;
    /* grid-template-columns: none; */
    grid-template-rows: 3fr 2fr;
  }
`;

export const Wraning = styled.div`
  margin: 40px 30px 25px 30px;

  h3 {
    font-size: 1.3rem;
    color: ${COLORS.mainColor};
  }
`;
