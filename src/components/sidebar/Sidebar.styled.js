import styled from "styled-components";

import { COLORS } from "../constants";
import { NavLink } from "react-router-dom";

// export const NavbarWrapper = styled.div`
export const SidebarWrapper = styled.div`
  width: 200px;
  min-width: 200px;
  min-height: 100vh;
  background-color: ${COLORS.mainColor};
  color: ${COLORS.fontColorLight};

  /* @media (max-width: 1178px) {
    width: 100%;
    min-height: 80px;
    position: sticky;
  } */
`;

export const SidebarContent = styled.div`
  width: inherit;
  position: fixed;

  /* @media (max-width: 1178px) {
    display: flex;
  } */
`;

export const UserWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  padding: 40px 17px;
  border-bottom: 1px solid ${COLORS.fontColorLight};

  div {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  p {
    font-weight: 700;
    /* padding-left: 15px; */
  }

  li {
    list-style: none;

    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      color: ${COLORS.fontColorLight};
      gap: 10px;
    }
  }
  /* 
  @media (max-width: 1178px) {
    display: flex;
    padding: 0;
    border-bottom: none;
  } */
`;

export const UserFlex = styled.div`
  display: flex;
  flex-direction: column;

  /* @media (max-width: 1178px) {
    flex-direction: row;
  } */
`;

export const LinkWrapper = styled.nav`
  margin-top: 50px;
  /* margin-left: 10px; */
  font-size: 1.2rem;
  /* position: relative; */

  ul {
    padding-left: 30px;
  }

  li {
    list-style: none;
    /* padding: 20px 0 20px 0; */
    margin: 20px 0;

    span {
      padding-left: 10px;
    }
  }
  &:nth-child(3) {
    position: absolute;
    bottom: -420px;
  }

  /* @media (max-width: 1178px) {
    margin-top: 0;

    ul {
      display: flex;
    }

    span {
      display: none;
    }
  } */
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${COLORS.fontColorLight};
  width: 100%;
  padding: 5px 0 5px 10px;

  &:hover,
  &.active {
    background-color: #fff;
    color: ${COLORS.mainColor};
    border-radius: 20px 0px 0px 20px;
    transition: all 0.5s ease-in-out;
  }

  &.active {
    color: ${COLORS.mainColor};
  }

  /* @media (max-width: 1178px) {
    &:hover,
    &.active {
      background-color: #fff;
      color: ${COLORS.mainColor};
      border-radius: 50%;
      transition: all 0.5s ease-in-out;
    } */

  /* &.active {
      color: ${COLORS.mainColor};
    } */
  /* } */
`;
