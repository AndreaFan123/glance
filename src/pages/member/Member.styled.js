import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const MemberWrapper = styled.section`
  padding: 20px;
  max-width: 1200px;
  margin: 40px auto 0 auto;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    color: ${COLORS.mainColor};
    margin-bottom: 20px;
    border-bottom: 2px solid ${COLORS.mainColor};
  }
`;

export const MemberContainer = styled.div`
  display: flex;
  gap: 3rem;
`;
