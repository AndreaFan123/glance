import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const DashboardWrapper = styled.div`
  /* padding: 50px; */
  width: 1060px;
  max-width: 1200px;
  margin: 35px auto;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: ${COLORS.mainColor};
    margin-bottom: 20px;
    border-bottom: 1px solid ${COLORS.mainColor};
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.mainColor};
    margin-bottom: 15px;
  }
`;

export const MrktingWrapper = styled.div`
  display: flex;
`;
