import React from "react";
import TodoList from "../../components/todoList/TodoList";
import { Inputcontainer, TextContainer, TodoWrapper } from "./Todo.styled";

export default function Todo({ users }) {
  return (
    <TodoWrapper>
      <TextContainer>
        <h3>Add Todo</h3>
        <p>Monitor your daily tasks</p>
        <Inputcontainer>
          <input type="text" />
          <button type="submit">Add</button>
        </Inputcontainer>
      </TextContainer>
    </TodoWrapper>
  );
}
