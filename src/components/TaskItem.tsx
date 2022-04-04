import React from "react";
import { Task } from "../models/Task";
import {
  Card,
  CardActionArea,
  CardHeader,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

interface Props {
  task: Task;
}
export const TaskItem = ({ task }: Props) => {
  return (
    <Card
      sx={{ backgroundColor: "cyan", textAlign: "center", padding: "1rem" }}
    >
      <CardActionArea>
        <CardHeader title="Title" sx={{ textAlign: "left", p: "1rem" }} />
        <CardContent
          sx={{ fontSize: "1.6rem", p: "1rem", overflowWrap: "break-word" }}
        >
          {task.taskText}{" "}
          caccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccacacaccaca
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button>Btn</Button>
      </CardActions>
    </Card>
  );
};
