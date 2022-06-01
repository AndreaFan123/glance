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

  const SELECT_STAKEHOLDER_KEY = "SelectStakeholder";
  const SELECT_ASSIGNEE_KEY = "SelectAssignee";
  const SELECT_STATUS_KEY = "SelectStatus";
  const windowStorage = window.localStorage;

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
      console.log(texts);
      setTexts(texts);
    }
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

  //TEST: Test store data in localstorage
  //RESULT: TinyMCE will need more time to try it, others are okay
  useEffect(() => {
    if (windowStorage.getItem("projectName"))
      setProjectName(windowStorage.getItem("projectName"));
    if (windowStorage.getItem("dueDate"))
      setDueDate(windowStorage.getItem("dueDate"));
    // if (windowStorage.getItem("Contents"))
    //   setTexts(windowStorage.getItem("Contents"));
  }, []);

  ///////////  NOTE: Local storage //////////////////
  useEffect(() => {
    windowStorage.setItem("projectName", projectName);
    windowStorage.setItem("dueDate", dueDate);
    // windowStorage.setItem("EditContent", texts);
  }, [projectName, dueDate]);

  const handleStakeholder = (s) => {
    windowStorage.setItem(SELECT_STAKEHOLDER_KEY, JSON.stringify(s));
    setStakeholder(s);
  };

  const handleStatus = (i) => {
    windowStorage.setItem(SELECT_STATUS_KEY, JSON.stringify(i));
    setStatus(i);
  };

  const handleAssignee = (a) => {
    windowStorage.setItem(SELECT_ASSIGNEE_KEY, JSON.stringify(a));
    setAssignee(a);
  };

  useEffect(() => {
    const lastStakeholder = JSON.parse(
      windowStorage.getItem(SELECT_STAKEHOLDER_KEY) ?? "[]"
    );

    const lastStatus = JSON.parse(
      windowStorage.getItem(SELECT_STATUS_KEY) ?? "[]"
    );

    const lastAssignee = JSON.parse(
      windowStorage.getItem(SELECT_ASSIGNEE_KEY) ?? "[]"
    );
    setStakeholder(lastStakeholder);
    setStatus(lastStatus);
    setAssignee(lastAssignee);
  }, []);

  /////////////////////////////////////////////

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
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            textareaName="description"
            initialValue={"Write something here"}
            init={{
              selector: "textarea",
              height: 500,
              menubar: true,
              // mobile: {
              //   menubar: true,
              // },
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

                // "image",
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
                "autoresize",
              ],
              toolbar:
                "undo redo | casechange blocks | bold italic backcolor | save |" +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist checklist outdent indent | removeformat |a11ycheck code table help",
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
            // onChange={(options) => setStakeholder(options)}
            onChange={handleStakeholder}
            options={STAKEHOLDERS}
            value={stakeholder}
          />
        </label>

        <label>
          <h4>Project Status</h4>
          <Select
            menuPlacement="auto"
            // onChange={(options) => setStatus(options)}
            onChange={handleStatus}
            options={STATUS}
            value={status}
          />
        </label>

        <label>
          <h4>Assignees</h4>
          <Select
            menuPlacement="auto"
            // onChange={(options) => setAssignee(options)}
            onChange={handleAssignee}
            options={users}
            value={assignee}
            isMulti
          />
        </label>
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
