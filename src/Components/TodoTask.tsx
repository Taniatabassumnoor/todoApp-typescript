import { Box, Button } from "@mui/material";
import React from "react";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <Box
      sx={{
        width: "500px",
        height: "50px",
        display: "flex",
        color: "white",
        margin: "15px",
      }}
    >
      <Box
        sx={{
          flex: "80%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            display: "grid",
            placeItems: "center",
            border: "1px solid white",
            width: "100%",
            height: "100%",
            fontSize: "18px",
            borderRight: "none",
            backgroundColor: "tomato",
          }}
        >
          {task.taskName}
        </span>
        <span
          style={{
            display: "grid",
            placeItems: "center",
            border: "1px solid white",
            width: "100%",
            height: "100%",
            fontSize: "18px",
            borderRight: "none",
            backgroundColor: "tomato",
          }}
        >
          {task.deadline}
        </span>
      </Box>
      <Button
        sx={{
          flex: "20%",
          height: "100%",
          border: "none",
          backgroundColor: "lightseagreen",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => {
          completeTask(task.taskName);
        }}
      >
        X
      </Button>
    </Box>
  );
};

export default TodoTask;
