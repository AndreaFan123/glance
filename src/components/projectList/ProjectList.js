import React, { useState, useEffect } from "react";
import {
  AssigneeWrapper,
  LodeMoreBtn,
  ProjectLinks,
  ProjectsWrapper,
} from "./ProjectList.styled";

import Avatar from "../Avatar/Avatar";

export default function ProjectList({ projects }) {
  const [showItem, setShowItem] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    setShowItem(projects);
  }, []);

  const handelShowMore = () => {
    setVisible((preValue) => preValue + 3);
  };

  return (
    <>
      <ProjectsWrapper>
        {projects.length === 0 && <p>No projects yet!</p>}
        {projects.slice(0, visible).map((project) => (
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
      {projects.length > 3 && (
        <LodeMoreBtn onClick={handelShowMore}>Load More</LodeMoreBtn>
      )}
    </>
  );
}
