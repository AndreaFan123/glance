import styled from "styled-components";
import { COLORS } from "../../../components/constants";

export const BudgetInfoCard = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  grid-gap: 30px;
  padding: 30px 0;
  font-size: 1.2rem;
`;

export const RemainBudgetCard = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${COLORS.remainBGColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const SpentCard = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${COLORS.spentBGcolor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

export const TotalBudgetCard = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${COLORS.iconBgColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 15px;
`;
