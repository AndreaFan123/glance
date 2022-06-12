import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const DashboardWrapper = styled.div`
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

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${COLORS.mainColor};
    margin-bottom: 15px;
  }

  @media screen and (max-width: 600px) {
    margin: 20px auto 50px auto;
  }
`;

export const ChartsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: stretch;
  grid-gap: 30px;
  padding: 30px 0;
  font-size: 1.2rem;

  h3 {
    text-align: center;
  }
`;

export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${COLORS.borderMedium};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
  padding: 15px;
`;

export const SecondPart = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  margin: 30px 0;
`;
