import React from "react";
import {
  AssigneeWrapper,
  ProjectLinks,
  ProjectsWrapper,
} from "./ProjectList.styled";

import Avatar from "../Avatar/Avatar";

export default function ProjectList({ projects }) {
  return (
    <ProjectsWrapper>
      {/* Check if there's any project */}
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((project) => (
        <ProjectLinks to={`/projects/${project.id}`} key={project.id}>
          <div>
            <h4>{project.projectName}</h4>
            <span
              style={{
                backgroundColor:
                  project.status === "Ongoing"
                    ? "hsl(43,100%,56%)"
                    : project.status === "Delay"
                    ? "hsl(0,71%,50%)"
                    : project.status === "Completed"
                    ? "hsl(112,35%,55%)"
                    : project.status === "Cancelled"
                    ? "hsl(0,0%,70%)"
                    : "",
              }}
            >
              {project.status}
            </span>
          </div>

          <p>Due Date: {project.dueDate.toDate().toDateString()}</p>

          <AssigneeWrapper>
            {/* <span>Project owner:</span> */}
            <ul>
              {project.assigneeList.map((assignee) => (
                <li key={assignee.id}>
                  <Avatar src={assignee.photoURL} />
                </li>
              ))}
            </ul>
          </AssigneeWrapper>
        </ProjectLinks>
      ))}
    </ProjectsWrapper>
  );
}
