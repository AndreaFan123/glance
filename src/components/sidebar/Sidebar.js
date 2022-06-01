import React from "react";
import { useLogout } from "../../hook/useLogout";
import { useState } from "react";
import Avatar from "../Avatar/Avatar";
import { useLocation, Link } from "react-router-dom";

import {
  AiOutlineCalendar,
  AiOutlineAppstore,
  AiOutlineFileAdd,
  AiOutlineProject,
  AiOutlineLogout,
  AiOutlineLineChart,
} from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa";
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
          {/* <FiEdit /> */}
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
                : `${label}` === "Revenue"
                ? `/revenue`
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
      {secondaryLinks.map(({ icon, label }) => (
        <LinkContainer key={label}>
          <LinkItem to="/" style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <LinkIcon>{icon}</LinkIcon>
            {sidebarOpen && <span>{label}</span>}
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
    label: "Revenue",
    icon: <AiOutlineLineChart />,
    to: `/revenue`,
  },
  {
    label: "Budget",
    icon: <MdAttachMoney />,
    to: `/budget`,
  },
];

export const secondaryLinks = [
  // {
  //   label: "Setting",
  //   icon: <AiOutlineSetting />,
  //   to: "/setting",
  // },
  {
    label: "Logout",
    icon: <AiOutlineLogout />,
    to: "/login",
  },
];
