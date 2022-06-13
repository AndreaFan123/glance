import React from "react";
import { useLogout } from "../../hook/useLogout";
import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import { useLocation } from "react-router-dom";

import { AiOutlineAppstore, AiOutlineFileAdd } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

import { useAuthContext } from "../../hook/useContext";
import {
  LinkContainer,
  SideBar,
  SidebarDivider,
  LinkItem,
  LinkIcon,
  UserProfile,
  UserEditIcon,
} from "./Sidebar.styled";

export default function Sidebar() {
  const { logout, loading } = useLogout();
  const { user } = useAuthContext();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  return (
    <SideBar>
      {user.photoURL && (
        <UserProfile>
          <Avatar src={user.photoURL} />
          <UserEditIcon to={`/member/${user.uid}`}>
            <p>{user.displayName}</p>
          </UserEditIcon>
        </UserProfile>
      )}
      <SidebarDivider />
      {LinkArray.map(({ icon, label, to }) => (
        <LinkContainer key={label} isActive={pathname === to}>
          <LinkItem
            to={
              `${label}` === "Dashboard"
                ? `/dashboard`
                : `${label}` === "Add Project"
                ? `/create`
                : `${label}` === "Budget"
                ? `/budget`
                : ""
            }
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && <span>{label}</span>}
          </LinkItem>
        </LinkContainer>
      ))}
      <SidebarDivider />
      {secondaryLinks.map(({ icon, label, to }) => (
        <LinkContainer key={label} isActive={pathname === to}>
          <LinkItem
            to={to}
            style={!sidebarOpen ? { width: `fit-content` } : {}}
          >
            {!loading && <LinkIcon onClick={logout}>{icon}</LinkIcon>}

            {sidebarOpen && !loading && <span onClick={logout}>{label}</span>}
            {sidebarOpen && loading && (
              <span onClick={logout}>Logging...out</span>
            )}
          </LinkItem>
        </LinkContainer>
      ))}
    </SideBar>
  );
}

export const LinkArray = [
  {
    label: "Dashboard",
    icon: <AiOutlineAppstore />,
    to: "/dashboard",
  },
  {
    label: "Add Project",
    icon: <AiOutlineFileAdd />,
    to: "/create",
  },
  {
    label: "Budget",
    icon: <MdAttachMoney />,
    to: "/budget",
  },
];

export const secondaryLinks = [
  {
    label: "Logout",
    icon: <BiLogOut />,
    to: "/login",
  },
];
