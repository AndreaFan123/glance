import React from "react";
import { Link } from "react-router-dom";
import { LinksWrapper, Logo, NavbarWrapper } from "./Navbar.styled";
import { useLogout } from "../../hook/useLogout";
// import { useState } from "react/cjs/react.production.min";

// import { COLORS } from "../../components/constants";

// const btnColor = {
//   bgDark: `${COLORS.mainColor}`,
//   bgLight: `${COLORS.fontColorLight}`,
//   fontDark: `${COLORS.mainColor}`,
//   fontLight: `${COLORS.fontColorLight}`,
// };

export default function Navbar() {
  const { logout, loading, error } = useLogout();
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

        {!loading && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
        {loading && (
          <li>
            <button disabled>Logging out...</button>
          </li>
        )}
      </LinksWrapper>
    </NavbarWrapper>
  );
}
