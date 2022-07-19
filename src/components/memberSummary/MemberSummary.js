import React from "react";
import { ProfileDetail, ProfileImg, ProfileInfo } from "./MemberSummary.styled";

export default function MemberSummary({ users }) {
  return (
    <ProfileDetail>
      <ProfileInfo>
        <ProfileImg>
          <img src={users.photoURL} alt="profile photo" />
        </ProfileImg>
        <p>{users.displayName}</p>
      </ProfileInfo>
    </ProfileDetail>
  );
}
