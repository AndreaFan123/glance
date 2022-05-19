import React from "react";
import Avatar from "../Avatar/Avatar";
import {
  AssigneeWrapper,
  ContentWrapper,
  DetailsWrapper,
  StakeholderWrapper,
  TitleWrapper,
} from "./ProjectSummary.styled";

export default function Projectsummary({ project }) {
  return (
    <DetailsWrapper>
      {/* <div> */}
      <TitleWrapper>
        <h1>{project.projectName}</h1>
        <span>Due Date: {project.dueDate.toDate().toDateString()}</span>
      </TitleWrapper>
      <ContentWrapper>
        <h3>Summary: </h3>
        <p>{project.content}</p>
      </ContentWrapper>
      <StakeholderWrapper>
        <h4>Stakeholder:</h4>
        <span>{project.stakeholder}</span>
      </StakeholderWrapper>
      <AssigneeWrapper>
        <h4>Assignee: </h4>
        <div>
          {project.assigneeList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </AssigneeWrapper>
      {/* </div> */}
    </DetailsWrapper>
  );
}
