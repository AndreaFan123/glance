import styled from "styled-components";
import { COLORS } from "../../../components/constants";

export const BudgetWrapper = styled.section`
  padding: 20px;
  /* width: 1060px; */
  max-width: 1200px;
  margin: 40px auto 0 auto;

  h2 {
    font-size: 2rem;
    color: ${COLORS.mainColor};
    border-bottom: 2px solid ${COLORS.mainColor};
  }
`;

export const ExpenseGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  grid-gap: 30px;
  padding: 30px 0;
  font-size: 1.2rem;

  h3 {
    color: ${COLORS.mainColor};
    padding-bottom: 20px;
    color: ${COLORS.fontColorLight};
  }
`;

export const AddExpenseCard = styled.div`
  padding: 25px;
  background-color: ${COLORS.mainColor};
  border-radius: 5px;
`;
