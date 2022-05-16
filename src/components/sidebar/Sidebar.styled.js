import styled from "styled-components";
import { COLORS } from "../constants";

// export const NavbarWrapper = styled.div`
export const SidebarWrapper = styled.div`
  width: 200px;
  min-width: 200px;
  min-height: 100vh;
  background-color: ${COLORS.mainColor};
  color: ${COLORS.fontColorLight};
  position: relative;
`;

export const SidebarContent = styled.div`
  width: inherit;
  position: fixed;
`;

export const UserWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  padding: 40px 30px;
  border-bottom: 1px solid ${COLORS.fontColorLight};
`;

export const LinkWrapper = styled.nav`
  margin-top: 50px;
  /* margin-left: 10px; */
  font-size: 1.2rem;

  ul {
    padding-left: 30px;
  }

  li {
    list-style: none;
    margin-top: 15px;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${COLORS.fontColorLight};
      width: 100%;

      span {
        padding-left: 10px;
      }
    }
  }
`;
