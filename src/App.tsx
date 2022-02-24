import React, { FC, useState, ChangeEvent } from "react";
import { ITask } from "./Interfaces";
import "./App.css";
import TodoTask from "./Components/TodoTask";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDealine(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <Container sx={{ mt: "10%", mr: "1%" }} className="App">
      <Box>
        <Typography
          sx={{ color: "coral", mb: 10 }}
          variant="h3"
          gutterBottom
          component="div"
        >
          Todo App
        </Typography>
        <Box>
          <TextField
            label="Task..."
            color="secondary"
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
            focused
          />
          <br />
          <TextField
            sx={{ mt: 5 }}
            label="Days Count ..."
            color="secondary"
            type="number"
            name="deadline"
            value={deadline}
            onChange={handleChange}
            focused
          />{" "}
        </Box>
        <Button sx={{ mt: 5 }} onClick={addTask} variant="contained">
          Add Task
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",

          width: "100%",
          alignItems: "flex-center",
          flexDirection: "column",
          pt: "50px",
        }}
      >
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </Box>
    </Container>
  );
};

export default App;
