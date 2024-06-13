import { Box, Divider, Typography } from "@mui/material";
import ToolBar from "../todo-tool-bar/todo-tool-bar";
import { useSelector } from "react-redux";
import { todosSelector } from "../../storage/selector";
import { useEffect, useState } from "react";

interface ToDoProps {
  id: string;
  title: string;
  done: boolean;
}

const ToDoItem = ({ id, title, done }: ToDoProps) => {
  const { todos } = useSelector(todosSelector);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setIsDone(todos.filter((item) => item.id === id)[0].done);
  }, [todos]);

  return (
    <Box>
      <Box display="flex">
        <Typography
          component="p"
          fontSize="16px"
          fontWeight="400"
          m="10px 0"
          pl="10px"
          sx={
            isDone ? { textDecoration: "line-through solid 2px #ec5353" } : {}
          }
        >
          {title}
        </Typography>
        <ToolBar idTodo={id} titleTodo={title} done={done} />
      </Box>
      <Divider />
    </Box>
  );
};

export default ToDoItem;
