import React, { useState } from "react";
import { Box, Paper, TextField } from "@mui/material";

interface Props {
  onSubmit: (newTask: string) => void;
}
export const NewTaskContainer = ({ onSubmit }: Props) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(newTask);
    setNewTask("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };
  return (
    <Paper
      sx={{
        mt: "5rem",
        backgroundColor: "cyan",
        padding: "1rem",
        width: { xs: "100%", sm: "60rem" },
      }}
    >
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Agrega una nueva tarea"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          value={newTask}
        />
      </Box>
    </Paper>
  );
};
