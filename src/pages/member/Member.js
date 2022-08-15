import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hook/useDocument";

import MemberSummary from "../../components/memberSummary/MemberSummary";
import { MemberContainer, MemberWrapper } from "./Member.styled";
import Todo from "../todo/Todo";

export default function Member() {
  const { id } = useParams();
  const { document, error } = useDocument("users", id);

  if (error) {
    return <div>{error}</div>;
  }

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <MemberWrapper>
      <h1>Daily Tasks</h1>
      <MemberContainer>
        <MemberSummary users={document} />
        <Todo users={document} />
      </MemberContainer>
    </MemberWrapper>
  );
}
