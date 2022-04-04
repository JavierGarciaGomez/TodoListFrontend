import React from "react";
import { Task } from "../models/Task";
import { Grid } from "@mui/material";
import { TaskItem } from "./TaskItem";

interface Props {
  tasks: Task[];
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <Grid container spacing={2}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          {/* <Box sx={{ backgroundColor: "cyan", textAlign: "center" }}>
            {task.taskText}
          </Box> */}
          <TaskItem task={task} />
        </Grid>
      ))}
    </Grid>
  );
};
