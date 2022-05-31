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

export const BudgetCard = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${COLORS.mainColor};
  color: ${COLORS.fontColorLight};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 20px;

  p {
    font-weight: 700;
  }

  button {
    margin-left: 25px;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    background-color: ${COLORS.fontColorLight};
    color: ${COLORS.mainColor};
  }

  @media screen and (max-width: 430px) {
    flex-direction: column;
  }
`;
