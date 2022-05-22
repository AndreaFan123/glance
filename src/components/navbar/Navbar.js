import React from "react";
import { Link } from "react-router-dom";
import { LinksWrapper, Logo, NavbarWrapper } from "./Navbar.styled";
import { useAuthContext } from "../../hook/useContext";
// import { useLogout } from "../../hook/useLogout";

export default function Navbar() {
  // const { logout, loading, error } = useLogout();
  const { user } = useAuthContext();
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
        {/* <li>
          <Link to="signup">Sign up</Link>
        </li> */}

        {/* {!loading && (
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        )}
        {loading && (
          <li>
            <button disabled>Logging out...</button>
          </li>
        )} */}
      </LinksWrapper>
    </NavbarWrapper>
  );
}
