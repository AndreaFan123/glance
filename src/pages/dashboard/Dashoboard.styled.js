import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const DashboardWrapper = styled.div`
  margin: 40px 30px 25px 30px;

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
