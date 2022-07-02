// use id as an param, then connec to firebase to get project details
import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hook/useDocument";

// components
import ProjectSummary from "../../components/projectSummary/ProjectSummary";
import ProjectComment from "../../components/projectComment/ProjectComment";

import { ProjectDetailWrapper, Warning, Space } from "./project.styled";

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  if (error) {
    return (
      <Warning>
        <h3>{error}</h3>
      </Warning>
    );
  }

  if (!document) {
    return (
      <Warning>
        <h3>Loading...</h3>
      </Warning>
    );
  }

  return (
    <Space>
      <ProjectDetailWrapper>
        <ProjectSummary project={document} />
        <ProjectComment project={document} />
      </ProjectDetailWrapper>
    </Space>
  );
}
