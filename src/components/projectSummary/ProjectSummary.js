import React, { useEffect, useState } from "react";
import { useFirestore } from "../../hook/useFirestore";
import { useAuthContext } from "../../hook/useContext";
import { useHistory } from "react-router-dom";
import { useCollection } from "../../hook/useCollection";
// styles
import {
  AssigneeWrapper,
  BudgetTable,
  ContentWrapper,
  DeleteIcon,
  DetailsWrapper,
  StakeholderWrapper,
  StatusWrapper,
  TitleWrapper,
} from "./ProjectSummary.styled";

// icon
import { BsXCircle } from "react-icons/bs";

export default function Projectsummary({ project }) {
  const history = useHistory();
  const [totalSpent, setTotalSpent] = useState("0");
  const { deletedocment } = useFirestore("projects");
  const { user } = useAuthContext();
  const { documents } = useCollection("expenses", ["uid", "==", user.uid]);

  const body = project.texts;

  const handleDelete = (e) => {
    e.preventDefault();

    deletedocment(project.id);
    history.push("/dashboard");
  };

  // NOTE: Map all amount and add it up
  useEffect(() => {
    if (documents) {
      let amounts = documents.map((expense) => expense.amount);
      let totalSpent = amounts.reduce(
        (preValue, currValue) => Number(preValue) + Number(currValue),
        0
      );
      setTotalSpent(totalSpent);
    }
  }, [documents]);

  return (
    <DetailsWrapper>
      <TitleWrapper>
        <div>
          <h1>{project.projectName}</h1>
          {user.uid === project.createdBy.id && (
            <div>
              <BsXCircle style={DeleteIcon} onClick={handleDelete} />
            </div>
          )}
        </div>
        <span>Due Date : {project.dueDate.toDate().toDateString()}</span>
        <span>Project owner : {project.createdBy.displayName}</span>
      </TitleWrapper>
      <ContentWrapper>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </ContentWrapper>
      <StakeholderWrapper>
        <h4>Stakeholder :</h4>
        <span>{project.stakeholder}</span>
      </StakeholderWrapper>
      <StatusWrapper>
        <h4>Status :</h4>
        <span
          style={{
            backgroundColor:
              project.status === "Ongoing"
                ? "hsl(43,100%,56%)"
                : project.status === "Delay"
                ? "hsl(0,71%,50%)"
                : project.status === "Completed"
                ? "hsl(112,35%,55%)"
                : project.status === "Cancelled"
                ? "hsl(0,0%,70%)"
                : "",
          }}
        >
          {project.status}
        </span>
      </StatusWrapper>
      <AssigneeWrapper>
        <h4>Assignee : </h4>
        <div>
          {project.assigneeList.map((user) => (
            <div key={user.id}>
              {/* <Avatar src={user.photoURL} /> */}
              <span>{user.displayName}</span>
            </div>
          ))}
        </div>
      </AssigneeWrapper>
      {documents && (
        <BudgetTable>
          <h4>Budget Plan : </h4>

          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            {documents &&
              documents.map((expense) =>
                project.projectName === expense.assignProject.projectName ? (
                  <tbody>
                    <tr key={expense.uid}>
                      <td>{expense.category}</td>
                      <td>$ {expense.amount}</td>
                    </tr>
                  </tbody>
                ) : (
                  ""
                )
              )}
            {project.created === user.displayName && (
              <tfoot>
                <td>Total</td>
                <td>$ {totalSpent}</td>
              </tfoot>
            )}
          </table>
        </BudgetTable>
      )}
    </DetailsWrapper>
  );
}
