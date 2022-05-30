import React from "react";
import { KanbanBoards, KanbanOuter, KanbanWrapper } from "./Kanban.styled";

import Board from "../../components/board/Board";
import AddItem from "../../components/addItem/AddItem";
import { KanbanAddBoard } from "../../components/board/Board.styled";

export default function Kanban() {
  return (
    <KanbanWrapper>
      <h2>Kanban</h2>
      <KanbanOuter>
        <KanbanBoards>
          <Board />
          <Board />
          <KanbanAddBoard>
            <AddItem text="+ Add Board" placeholder="Enter Board" />
          </KanbanAddBoard>
        </KanbanBoards>
      </KanbanOuter>
    </KanbanWrapper>
  );
}
