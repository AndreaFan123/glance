import styled from "styled-components";
import { COLORS } from "../../../components/constants";

export const CategoryWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-gap: 10px;
  font-size: 1.2rem;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${COLORS.mainColor};
  color: ${COLORS.fontColorLight};
  border-bottom: 1px solid ${COLORS.borderLight};
  border-radius: 5px;
  p {
    font-weight: 700;
    padding-left: 10px;
  }

  span {
    line-height: 0;
    display: flex;
    align-items: center;
  }
`;
