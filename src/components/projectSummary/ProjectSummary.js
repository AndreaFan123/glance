import React from "react";
import { useFirestore } from "../../hook/useFirestore";
import { useAuthContext } from "../../hook/useContext";
import { useHistory } from "react-router-dom";

// component
import Avatar from "../Avatar/Avatar";

// styles
import {
  AssigneeWrapper,
  CompleteIcon,
  ContentWrapper,
  DeleteIcon,
  DetailsWrapper,
  StakeholderWrapper,
  TitleWrapper,
} from "./ProjectSummary.styled";

// icon
import { BsCheck2Circle, BsXCircle } from "react-icons/bs";

export default function Projectsummary({ project }) {
  const history = useHistory();
  const { deletedocment } = useFirestore("projects");
  const { user } = useAuthContext();

  const handleDelete = (e) => {
    e.preventDefault();

    deletedocment(project.id);
    history.push("/dashboard");
  };

  return (
    <DetailsWrapper>
      <TitleWrapper>
        <div>
          <h1>{project.projectName}</h1>
          {user.uid === project.createdBy.id && (
            <div>
              <BsCheck2Circle style={CompleteIcon} />
              <BsXCircle style={DeleteIcon} onClick={handleDelete} />
            </div>
          )}
        </div>
        <span>Due Date: {project.dueDate.toDate().toDateString()}</span>
        <span>Project owner: {project.createdBy.displayName}</span>
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
    </DetailsWrapper>
  );
}
