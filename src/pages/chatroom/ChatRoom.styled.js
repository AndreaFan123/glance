import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const ChatRoomWrapper = styled.main`
  padding: 20px;
  /* width: 1060px; */
  max-width: 700px;
  /* margin: 0 auto; */

  h2 {
    font-size: 2rem;
    color: ${COLORS.mainColor};
    border-bottom: 2px solid ${COLORS.mainColor};
  }
`;
