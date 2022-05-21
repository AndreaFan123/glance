// Dashboard is meant to be contain project list and other stuff
// create component to handle project details and add to here

// Remove const [currentFilter, setCurrentFilter] here is bcz we also need to match the project list, hence, if we only put the state inside component, we won't be able to access filter status

import React from "react";
import { useState } from "react";
import { useCollection } from "../../hook/useCollection";
import { useAuthContext } from "../../hook/useContext";

// component
import ProjectFilter from "./ProjectFilter";
import ProjectList from "../../components/projectList/ProjectList";
// style
import { DashboardWrapper } from "./Dashoboard.styled";

export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  const { user } = useAuthContext();
  const [currentFilter, setCurrentFilter] = useState("All");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const filterItem = {
    ALL: "All",
    MARKETING: "Marketing",
    BUSINESS: "Business",
    DESIGN: "Design",
    LEGAL: "Legal",
    FINANCE: "Finance",
    CONTENT: "Content",
    RD: "R&D",
    MINE: "Mine",
  };

  // use filter to filter out the match project
  const projects = documents
    ? documents.filter((doc) => {
        switch (currentFilter) {
          case filterItem.ALL:
            return true;
          case filterItem.MINE:
            // need to match the user
            let assignToMe = false;
            doc.assigneeList.forEach((assignee) => {
              if (user.uid === assignee.id) {
                assignToMe = true;
              }
            });
            return assignToMe;
          case filterItem.RD:
          case filterItem.BUSINESS:
          case filterItem.CONTENT:
          case filterItem.DESIGN:
          case filterItem.FINANCE:
          case filterItem.MARKETING:
          case filterItem.LEGAL:
            return doc.stakeholder === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <DashboardWrapper>
      <h2>Projects</h2>
      {documents && (
        <ProjectFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* pass documents as a prop so that child component can use */}
      {documents && <ProjectList projects={projects} />}
    </DashboardWrapper>
  );
}
