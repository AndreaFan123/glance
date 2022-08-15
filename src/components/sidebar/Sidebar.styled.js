import styled from "styled-components";
import { COLORS } from "../constants";
import { Link } from "react-router-dom";
import { btnReset } from "../constants";

export const SideBar = styled.div`
  width: 200px;
  background-color: ${COLORS.mainColor};
  min-height: 100vh;
  position: relative;
  padding: 24px 15px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    align-items: center;
    width: auto;
    span {
      display: none;
    }
  }
  @media screen and (max-width: 600px) {
    z-index: 10;
    bottom: 0;

    position: fixed;
    left: 50%;
    bottom: -30px;
    transform: translate(-50%, -50%);
    align-items: center;
    width: fit-content;
    flex-direction: revert;
    min-height: 20px;
    height: 60px;
    padding: 0;
    justify-content: space-evenly;
    border-radius: 50px;
    background: linear-gradient(
      90deg,
      rgba(30, 47, 107, 1) 0%,
      rgba(20, 20, 100, 1) 95%
    );

    span {
      display: none;
    }
  }
`;

export const SidebarBtn = styled.button`
  ${btnReset};
  position: absolute;
  width: 35px;
  height: 32px;
  font-size: 1.2rem;
  color: ${COLORS.fontColorLight};
  top: 153px;
  right: -19px;
  background-color: ${COLORS.mainColor};
  border-radius: 50%;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const UserProfile = styled.div`
  width: 100%;
  height: 120px;

  position: relative;
  color: ${COLORS.fontColorLight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 600px) {
    flex-direction: row;
    width: auto;
    margin: 0 15px;
  }
`;

export const UserPhoto = styled.div`
  width: 40px;
  height: 40px;
  text-align: center;

  p {
    font-size: 1.2rem;
  }
`;

export const UserEditIcon = styled(Link)`
  text-decoration: none;
  color: ${COLORS.fontColorLight};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  p {
    font-size: 1.2rem;
    padding: 0 8px;
  }

  :hover {
    color: ${COLORS.iconBgColor};
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const SidebarDivider = styled.div`
  background-color: rgb(230, 230, 230);
  height: 1px;
  width: 100%;
  margin: 24px 0;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  background: ${({ isActive }) =>
    !isActive ? `transparent` : COLORS.iconColor};
  border-radius: 6px;
  margin: 8px 0;
  transition: all 0.3s ease;

  :hover {
    box-shadow: inset 0 0 0 1px rgb(230, 230, 230);
  }

  @media screen and (max-width: 600px) {
    margin: 0 10px;
  }
`;

export const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.2rem;
  color: ${COLORS.fontColorLight};
  padding: 6px 0;

  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;

export const LinkIcon = styled.div`
  padding: 8px 10px;
  display: flex;

  svg {
    font-size: 25px;
  }
`;

export const TaskIcon = {
  color: "white",
  fontSize: "1.5rem",
};
