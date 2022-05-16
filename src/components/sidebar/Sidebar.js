import React from "react";
// import { useLogout } from "../../hook/useLogout";
// import { useAuthContext } from "../../hook/useContext";
// import { Links, Logo, NavbarWrapper, NavItemWrapper } from "./Sidebar.styled";
import { BiUserCircle, BiFile, BiGridAlt, BiLogOut } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import {
  LinkWrapper,
  SidebarContent,
  SidebarWrapper,
  UserWrapper,
} from "./Sidebar.styled";

// import { NavbarContents } from "./NavContent";
export default function Navbar() {
  // const { logout } = useLogout();
  // const { user } = useAuthContext();

  return (
    <SidebarWrapper>
      <SidebarContent>
        {/* Avatar and user name later */}
        <UserWrapper>
          <p>Hello, user</p>
        </UserWrapper>

        <LinkWrapper>
          <ul>
            <li>
              <NavLink exact to="/">
                <BiGridAlt />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/newproject">
                <BiFile />
                <span>Add project</span>
              </NavLink>
            </li>
          </ul>
        </LinkWrapper>
      </SidebarContent>
    </SidebarWrapper>
  );
}
