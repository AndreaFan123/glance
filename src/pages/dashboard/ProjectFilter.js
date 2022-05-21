import React from "react";
import { FilterWrapper } from "./ProjectFilter.styled";

// List of stakeholders
const projectFilterList = [
  "All",
  "R&D",
  "Marketing",
  "Business",
  "Legal",
  "Finance",
  "Content",
  "Design",
  "Mine",
];

export default function ProjectFilter({ currentFilter, changeFilter }) {
  const handleFilter = (newFilter) => {
    changeFilter(newFilter);
  };

  return (
    <FilterWrapper>
      <nav>
        {/* Map thr list */}
        {projectFilterList.map((projectFilter) => (
          <button
            onClick={() => handleFilter(projectFilter)}
            key={projectFilter}
            className={currentFilter === projectFilter ? "active" : ""}
          >
            {projectFilter}
          </button>
        ))}
      </nav>
    </FilterWrapper>
  );
}
