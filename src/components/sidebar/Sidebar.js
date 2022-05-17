import React from "react";
import { useLogout } from "../../hook/useLogout";
import { BiUserCircle, BiFile, BiGridAlt, BiLogOut } from "react-icons/bi";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import {
  LinkWrapper,
  SidebarContent,
  SidebarWrapper,
  UserWrapper,
} from "./Sidebar.styled";
import { useAuthContext } from "../../hook/useContext";

export default function Navbar() {
  const { logout, loading } = useLogout();
  const { user } = useAuthContext();

  return (
    <SidebarWrapper>
      <SidebarContent>
        {/* Avatar and user name later */}
        <UserWrapper>
          <Avatar src={user.photoURL} />
          <p>Hello, {user.displayName}</p>
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
              <NavLink to="/create">
                <BiFile />
                <span>Add project</span>
              </NavLink>
            </li>

            {!loading && (
              <li>
                <NavLink onClick={logout} to="/login">
                  <BiLogOut />
                  <span>Logout</span>
                </NavLink>
              </li>
            )}

            {loading && (
              <li>
                <NavLink to="/login">
                  <BiLogOut />
                  <span>Logging out...</span>
                </NavLink>
              </li>
            )}
          </ul>
        </LinkWrapper>
      </SidebarContent>
    </SidebarWrapper>
  );
}
