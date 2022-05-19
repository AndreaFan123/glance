import React from "react";
import {
  ProjectLinks,
  ProjectsWrapper,
  ProjectWrapper,
} from "./ProjectList.styled";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

export default function ProjectList({ projects }) {
  return (
    <ProjectsWrapper>
      {/* Check if there's any project */}
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((project) => (
        <ProjectLinks to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.projectName}</h4>
          <p>Due Date: {project.dueDate.toDate().toDateString()}</p>
          <div>
            {/* <span>Project owner:</span> */}
            <ul>
              {project.assigneeList.map((assignee) => (
                <li key={assignee.id}>
                  <Avatar src={assignee.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </ProjectLinks>
      ))}
    </ProjectsWrapper>
  );
}
