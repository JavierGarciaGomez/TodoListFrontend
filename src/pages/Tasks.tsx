import React, { useState } from "react";
import { Box, Paper, Button, TextField } from "@mui/material";
import { Task } from "../models/Task";
import { NewTaskContainer } from "../components/NewTaskContainer";
import { TaskList } from "../components/TaskList";

export const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleSubmitNewTask = (newTask: string) => {
    const task = new Task(newTask);
    setTasks((prev) => prev.concat(task));
    console.log(task);
    return "hey";
  };

  console.log(tasks);

  return (
    <Box bgcolor="#dfe6f0" sx={{ minHeight: "100vh" }}>
      <Box
        sx={{
          width: "90%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "5rem",
          }}
        >
          <NewTaskContainer onSubmit={handleSubmitNewTask} />
        </Box>
        <Box>
          <TaskList tasks={tasks} />
        </Box>
      </Box>
    </Box>
  );
};
