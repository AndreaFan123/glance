// use id as an param, then connec to firebase to get project details
import React from "react";
import { useParams } from "react-router-dom";
import { useDocument } from "../../hook/useDocument";
import { ProjectDetailWrapper, Warning } from "./project.styled";

export default function Project() {
  // parameter that we specify on the router "/projects/:id"
  const { id } = useParams();
  const { document, error } = useDocument("projects", id);

  //check if there's error or document
  if (error) {
    return <div>{error}</div>;
  }

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <ProjectDetailWrapper>
      {error && <></>}
      <h1>{document.projectName}</h1>
    </ProjectDetailWrapper>
  );
}
