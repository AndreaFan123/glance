import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hook/useDocument";

import MemberSummary from "../../components/memberSummary/MemberSummary";
import Todo from "../../components/todo/Todo";
import { MemberWrapper } from "./Member.styled";

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
      <h1>Profiles & Tasks</h1>
      <div>
        <MemberSummary users={document} />
        <Todo />
      </div>
    </MemberWrapper>
  );
}
