import styled from "styled-components";
import { COLORS } from "../../components/constants";

export const MsgWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  scroll-behavior: smooth;

  p {
    font-size: 1.2rem;
    color: ${COLORS.fontColorLight};
    padding: 5px 15px;
    border-radius: 20px;
  }

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 2px 5px;
  }
`;
