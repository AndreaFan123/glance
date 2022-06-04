import styled from "styled-components";
import { COLORS } from "../../../components/constants";

export const ExpenseListWrapper = styled.ul`
  padding-left: 0px;
  font: 1rem;
`;

export const ExpenseListItem = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid ${COLORS.mainColor};
  border-radius: 5px;

  @media screen and (max-width: 710px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ExpenseFlexVer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${COLORS.fontColorDark};

  span {
    display: inline-block;
    width: fit-content;
    padding: 2px 7px;
    margin-top: 3px;
    border-radius: 20px;
    font-weight: 700;
    font-size: 0.8rem;
    color: ${COLORS.fontColorLight};
    background-color: ${COLORS.mainColorMedium};
    margin-right: 10px;
  }
`;

export const ExpenseFlexHor = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const DeleteIcon = {
  color: `${COLORS.statusDelay}`,
  fontSize: "1.7rem",
};
