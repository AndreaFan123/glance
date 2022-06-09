// use id as an param, then connec to firebase to get project details
import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hook/useDocument";
import ProjectSummary from "../../components/projectSummary/ProjectSummary";
import { ProjectDetailWrapper, Space, Wraning } from "./project.styled";
import ProjectComment from "../../components/projectComment/ProjectComment";

export default function Project() {
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);
  // const { doc, err } = useDocument("expenses");
  // const {docs, err} = useCollection("expenses")

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
