import React from "react";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useCollection } from "../../hook/useCollection";
import { useAuthContext } from "../../hook/useContext";
import { useFirestore } from "../../hook/useFirestore";
import Select from "react-select";
import { STAKEHOLDERS, STATUS } from "../../components/constants";
import { Editor } from "@tinymce/tinymce-react";

// style
import { FormWrapper, From } from "./NewProject.styled";
import { timestamp } from "../../firebase/config";

// select values

export default function NewProject() {
  // form info
  const [projectName, setProjectName] = useState("");
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [status, setStatus] = useState("");
  // const [budget, setBudget] = useState("")
  const [assignee, setAssignee] = useState([]);
  // users is the collection in firestore, documents are an array contains all user info
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const [formError, setFormError] = useState(null);
  const { user } = useAuthContext();
  // Need to specify collection name
  const { addDocument, response } = useFirestore("projects");
  const History = useHistory();
  const editorRef = useRef(null);

  // Get users from document, using useEffect to render all the users
  useEffect(() => {
    // check if there's a doc
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleEditorChange = () => {
    if (editorRef.current) {
      let content = editorRef.current.getContent();
      setContent(content);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(projectName, content, dueDate);

    // since the select is cusotmized, we can't add required, so we need to check if there's an error manually
    setFormError(null);
    // check select field
    if (!stakeholder) {
      setFormError("Please select a project stakeholder");
      return;
    }
    if (!status) {
      setFormError("Please select a project status");
    }
    // since asignee is an array, we can use length to check
    if (assignee.length < 1) {
      setFormError("Please assign at least 1 user");
      return;
    }

    // user who creates project
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
    // Clean up objects that we've got from react-select liberary
    const assigneeList = assignee.map((person) => {
      return {
        displayName: person.value.displayName,
        photoURL: person.value.photoURL,
        id: person.value.id,
      };
    });

    // Need to install all project info
    const project = {
      projectName,
      content,
      stakeholder: stakeholder.value,
      status: status.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assigneeList,
    };

    await addDocument(project);
    if (!response.error) {
      History.push("/dashboard");
    }
  };

  return (
    <FormWrapper>
      <h2>Add project</h2>
      <From onSubmit={handleSubmit}>
        <label>
          <h4>Project Subject</h4>
          <input
            type="text"
            value={projectName}
            required
            onChange={(e) => setProjectName(e.target.value)}
          />
        </label>

        <label>
          <h4>Content</h4>
          {/* <textarea
            type="text"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            cols={20}
            wrap="hard"
          ></textarea> */}
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            textareaName="description"
            initialValue="Write something here"
            // value={content}
            init={{
              menubar: false,
              plugins: [
                "a11ychecker",
                "advlist",
                "advcode",
                "advtable",
                "autolink",
                "checklist",
                "export",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "powerpaste",
                "fullscreen",
                "formatpainter",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | casechange blocks | bold italic backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
            }}
            onChange={handleEditorChange}
          />
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
          <h4>Main Stakeholders</h4>
          <Select
            menuPlacement="auto"
            onChange={(options) => setStakeholder(options)}
            options={STAKEHOLDERS}
          />
        </label>

        <label>
          <h4>Project Status</h4>
          <Select
            menuPlacement="auto"
            onChange={(options) => setStatus(options)}
            options={STATUS}
          />
        </label>

        <label>
          <h4>Assignees</h4>
          <Select
            menuPlacement="auto"
            onChange={(options) => setAssignee(options)}
            options={users}
            isMulti
          />
        </label>

        <button>Submit</button>
        {formError && (
          <p style={{ color: "red", fontSize: "1rem" }}>{formError}</p>
        )}
      </From>
    </FormWrapper>
  );
}
