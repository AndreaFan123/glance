import React from "react";
import { useState } from "react";
import Select from "react-select";
import { DEPARTMENTS } from "../../components/constants";

// style
import { FormWrapper } from "./NewProject.styled";

// select values

export default function NewProject() {
  // form info
  const [projectName, setProjectName] = useState("");
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [department, setDepartment] = useState("");
  // const [status, setStatus] = useState("")
  // const [budget, setBudget] = useState("")
  const [assign, setAssign] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(projectName, content, dueDate, department);
  };

  return (
    <FormWrapper>
      <h2>Create project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <h4>Project Name</h4>
          <input
            type="text"
            value={projectName}
            required
            onChange={(e) => setProjectName(e.target.value)}
          />
        </label>

        <label>
          <h4>Content</h4>
          <textarea
            type="text"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </label>

        <label>
          <h4>Due date</h4>
          <input
            type="date"
            value={dueDate}
            required
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>

        <label>
          <h4>Stakeholders</h4>
          <Select
            onChange={(options) => setDepartment(options)}
            options={DEPARTMENTS}
          />
        </label>

        <label>
          <h4>Assignees</h4>
          {/* select differ owners */}
        </label>

        <button>Submit</button>
      </form>
    </FormWrapper>
  );
}
