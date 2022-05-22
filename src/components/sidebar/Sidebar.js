import React from "react";
import { useLogout } from "../../hook/useLogout";
import { BiFile, BiGridAlt, BiLogOut } from "react-icons/bi";
import Avatar from "../Avatar/Avatar";
import { NavLink } from "react-router-dom";
import {
  LinkWrapper,
  SidebarContent,
  SidebarWrapper,
  UserFlex,
  UserWrapper,
  NavLinkStyled,
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
          <UserFlex>
            <div>
              <Avatar src={user.photoURL} />
              <p>{user.displayName}</p>
            </div>
            {!loading && (
              <li>
                <NavLink onClick={logout} to="/login">
                  <BiLogOut />
                  <span>Logout</span>
                </NavLink>
              </li>
            )}
          </UserFlex>
        </UserWrapper>

        <LinkWrapper>
          <ul>
            <li>
              <NavLinkStyled exact to="/dashboard">
                <BiGridAlt />
                <span>Dashboard</span>
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to="/create">
                <BiFile />
                <span>Add project</span>
              </NavLinkStyled>
            </li>

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
