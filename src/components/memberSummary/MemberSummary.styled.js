import styled from "styled-components";
import { COLORS } from "../constants";

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${COLORS.mainColor};
  }
`;

export const ProfileImg = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
