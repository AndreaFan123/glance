// Dashboard is meant to be contain project list and other stuff
// create component to handle project details and add to here

import React from "react";
import ProjectList from "../../components/projectList/ProjectList";
import { useCollection } from "../../hook/useCollection";
import { DashboardWrapper } from "./Dashoboard.styled";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");

  return (
    <DashboardWrapper>
      <h2>Projects</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {/* If document, then render project list component */}
      {/* pass documents as a prop so that child component can use */}
      {documents && <ProjectList projects={documents} />}
    </DashboardWrapper>
  );
}
