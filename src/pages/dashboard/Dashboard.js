import React from "react";
import { useState } from "react";
import { useCollection } from "../../hook/useCollection";
import { useAuthContext } from "../../hook/useContext";

// component
import ProjectFilter from "./ProjectFilter";
import ProjectList from "../../components/projectList/ProjectList";
import DoughnutChart from "./DoughnutChart";

// style
import {
  DashboardWrapper,
  ChartsWrapper,
  ChartWrapper,
  div,
} from "./Dashoboard.styled";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("projects", null, [
    "dueDate",
    "asc",
  ]);

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
      <h1>Dashboard</h1>
      <ChartsWrapper>
        <ChartWrapper>
          <h3>Expenses</h3>
          <DoughnutChart />
        </ChartWrapper>
      </ChartsWrapper>
      <section>
        <div>
          <h3>All Projects</h3>
          {documents && (
            <ProjectFilter
              currentFilter={currentFilter}
              changeFilter={changeFilter}
            />
          )}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {/* pass documents as a prop so that child component can use */}
          {projects && <ProjectList projects={projects} />}
        </div>
      </section>
    </DashboardWrapper>
  );
}
