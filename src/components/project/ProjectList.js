import React from "react";
import { ProjectWrapper } from "./ProjectList.styled";
import { Link } from "react-router-dom";

export default function ProjectList({ projects }) {
  return (
    <div>
      {/* Check if there's any project */}
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((project) => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.projectName}</h4>
        </Link>
      ))}
    </div>
  );
}
