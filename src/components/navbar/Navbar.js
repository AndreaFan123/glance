import React from "react";
import { Link } from "react-router-dom";
import { LinksWrapper, Logo, NavbarWrapper } from "./Navbar.styled";

// import { COLORS } from "../../components/constants";

// const btnColor = {
//   bgDark: `${COLORS.mainColor}`,
//   bgLight: `${COLORS.fontColorLight}`,
//   fontDark: `${COLORS.mainColor}`,
//   fontLight: `${COLORS.fontColorLight}`,
// };

export default function Navbar() {
  return (
    <NavbarWrapper>
      <Logo>
        <li>
          <Link to="/">Glance</Link>
        </li>
      </Logo>
      <LinksWrapper>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="signup">Sign up</Link>
        </li>
        <li>
          <button>Logout</button>
        </li>
      </LinksWrapper>
    </NavbarWrapper>
  );
}
