// use id as an param, then connec to firebase to get project details
import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hook/useDocument";

// components
import ProjectSummary from "../../components/projectSummary/ProjectSummary";
import ProjectComment from "../../components/projectComment/ProjectComment";

// styles
import { ProjectDetailWrapper, Space, Wraning } from "./project.styled";

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  if (error) {
    return (
      <Wraning>
        <h3>{error}</h3>
      </Wraning>
    );
  }

  if (!document) {
    return (
      <Wraning>
        <h3>Loading...</h3>
      </Wraning>
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
