import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const KanbanWrapper = styled.div`
  padding: 30px 40px;
  /* width: 100%; */
  max-width: 1440px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    color: ${COLORS.mainColor};
    border-bottom: 2px solid ${COLORS.mainColor};
  }
`;

export const KanbanOuter = styled.section`
  flex: 1;
  width: 100%;
  overflow-x: auto;
  padding: 15px;
`;

export const KanbanBoards = styled.div`
  min-width: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px;
`;
