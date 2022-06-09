import React from "react";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { useCollection } from "../../hook/useCollection";
import { useAuthContext } from "../../hook/useContext";
import { useFirestore } from "../../hook/useFirestore";
import Select from "react-select";
import {
  STAKEHOLDERS,
  STATUS,
  EXPENSECATEGORY,
} from "../../components/constants";
import { Editor } from "@tinymce/tinymce-react";

// style
import {
  FormWrapper,
  From,
  FormSections,
  ButtonWrapper,
} from "./NewProject.styled";
import { timestamp } from "../../firebase/config";

// select values

export default function NewProject() {
  //  NOTE: form info
  const [projectName, setProjectName] = useState("");
  const [texts, setTexts] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [status, setStatus] = useState("");

  const [assignee, setAssignee] = useState([]);
  //  NOTE: hooks below
  //NOTE: users is the collection in firestore, documents are an array contains all user info
  const { documents } = useCollection("users");
  const [users, setUsers] = useState([]);
  const [formError, setFormError] = useState(null);
  const { user } = useAuthContext();
  // Need to specify collection name
  const { addDocument, response } = useFirestore("projects");
  const History = useHistory();
  const editorRef = useRef(null);
  const [initValue, setInitValue] = useState(initValue ?? "Write something");
  const windowStorage = window.localStorage;
  const apiKey = "autvx4gcpszihsp19r37ws5e9yi25xdhbng5sunrywcqk41e";

  //  NOTE: Get users from document, using useEffect to render all the users
  useEffect(() => {
    // NOTE:  check if there's a doc
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  const handleEditorChange = () => {
    if (editorRef.current) {
      let texts = editorRef.current.getContent();
      setTexts(texts);
    }
  };

  const localSave = (e) => {
    e.preventDefault();
    if (editorRef.current) {
      let texts = editorRef.current.getContent();
      windowStorage.setItem("localContent", texts);
    }
  };

  const localLoad = (e) => {
    e.preventDefault();
    let localContent = windowStorage.getItem("localContent");
    setInitValue(localContent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    windowStorage.clear();

    // NOTE: since the select is customized, we can't add required, so we need to check if there's an error manually
    setFormError(null);
    //  NOTE: check select field
    if (!stakeholder) {
      setFormError("Please select a project stakeholder");
      return;
    }
    if (!status) {
      setFormError("Please select a project status");
    }
    //  NOTE: since assignee is an array, we can use length to check
    if (assignee.length < 1) {
      setFormError("Please assign at least 1 user");
      return;
    }

    // NOTE:  user who creates project
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    //
    //  NOTE:  Clean up objects that we've got from react-select liberary
    const assigneeList = assignee.map((person) => {
      return {
        displayName: person.value.displayName,
        photoURL: person.value.photoURL,
        id: person.value.id,
      };
    });

    //  NOTE: Need to install all project info
    const project = {
      created: user.displayName,
      projectName,
      texts,
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

  //RESULT: TinyMCE will need more time to try it, others are okay
  useEffect(() => {
    if (windowStorage.getItem("projectName"))
      setProjectName(windowStorage.getItem("projectName"));
    if (windowStorage.getItem("dueDate"))
      setDueDate(windowStorage.getItem("dueDate"));
    if (windowStorage.getItem("stakeholder"))
      setStakeholder(JSON.parse(windowStorage.getItem("stakeholder")));
    if (windowStorage.getItem("status"))
      setStatus(JSON.parse(windowStorage.getItem("status")));
    if (windowStorage.getItem("assignee"))
      setAssignee(JSON.parse(windowStorage.getItem("assignee")));
  }, []);

  ///////////  NOTE: Local storage //////////////////
  useEffect(() => {
    windowStorage.setItem("projectName", projectName);
    windowStorage.setItem("dueDate", dueDate);
    windowStorage.setItem("stakeholder", JSON.stringify(stakeholder));
    windowStorage.setItem("status", JSON.stringify(status));
    windowStorage.setItem("assignee", JSON.stringify(assignee));
  }, [projectName, dueDate, stakeholder, status, assignee]);

  return (
    <FormWrapper>
      <h1>Add project</h1>
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
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            textareaName="description"
            initialValue={initValue}
            apiKey={apiKey}
            init={{
              selector: "textarea",
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "autoresize",
              ],
              toolbar:
                "undo redo | restoredraft| casechange blocks | bold italic backcolor | save |" +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist checklist outdent indent",
            }}
            onChange={handleEditorChange}
          />
          <ButtonWrapper>
            <button onClick={localSave}>Save</button>
            <button onClick={localLoad}>Restore</button>
          </ButtonWrapper>
        </label>
        <FormSections>
          <div>
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
                value={stakeholder}
              />
            </label>
          </div>
          <div>
            <label>
              <h4>Project Status</h4>
              <Select
                menuPlacement="auto"
                onChange={(options) => setStatus(options)}
                options={STATUS}
                value={status}
              />
            </label>

            <label>
              <h4>Assignees</h4>
              <Select
                menuPlacement="auto"
                onChange={(options) => setAssignee(options)}
                options={users}
                value={assignee}
                isMulti
              />
            </label>
          </div>
        </FormSections>
        <div>
          <button>Submit</button>
        </div>
        {formError && (
          <p style={{ color: "red", fontSize: "1rem" }}>{formError}</p>
        )}
      </From>
    </FormWrapper>
  );
}
