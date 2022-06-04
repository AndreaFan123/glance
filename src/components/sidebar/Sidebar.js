import React from "react";
import { useLogout } from "../../hook/useLogout";
import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import { useLocation, Link } from "react-router-dom";

import {
  AiOutlineAppstore,
  AiOutlineFileAdd,
  AiOutlineLogout,
} from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

import { useAuthContext } from "../../hook/useContext";
import {
  LinkContainer,
  SideBar,
  SidebarDivider,
  LinkItem,
  LinkIcon,
  SidebarBtn,
  UserProfile,
  UserEditIcon,
} from "./Sidebar.styled";

export default function Sidebar() {
  const { logout, loading } = useLogout();
  const { user } = useAuthContext();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { pathname } = useLocation();
  return (
    //isOpen={sidebarOpen}
    <SideBar>
      {/* <>
        <SidebarBtn
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((sidebarOpen) => !sidebarOpen)}
        >
          <FaChevronRight />
        </SidebarBtn>
      </> */}
      <UserProfile>
        <Avatar src={user.photoURL} />

        <UserEditIcon to={`/member/${user.uid}`}>
          <p>{user.displayName}</p>
        </UserEditIcon>
      </UserProfile>
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
                : `${label}` === "Chatroom"
                ? `/chatroom`
                : null
              // TEST: figure it out how to implement logout here
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
    label: "Chatroom",
    icon: <BsChatDots />,
    to: "/chatroom",
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
    icon: <AiOutlineLogout />,
    to: "/login",
  },
];
