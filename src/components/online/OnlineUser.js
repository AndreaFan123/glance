import React from "react";
import { useCollection } from "../../hook/useCollection";

import Avatar from "../Avatar/Avatar";
import { UserListWrapper, UserWrapper } from "./OnlineUser.styled";

export default function OnlineUser() {
  const { documents, error } = useCollection("users");

  return (
    <UserListWrapper>
      <h2>Colleagues</h2>
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <UserWrapper key={user.id}>
            {user.online && <span></span>}
            {!user.online && (
              <span style={{ background: "transparent" }}></span>
            )}
            <Avatar src={user.photoURL} />
            <p>{user.displayName}</p>
          </UserWrapper>
        ))}
    </UserListWrapper>
  );
}
