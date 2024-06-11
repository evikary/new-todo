import { Box, Divider, Typography } from "@mui/material";
import ToolBar from "../todo-tool-bar/todo-tool-bar";

interface ToDoProps {
  id: number;
  title: string;
}

const ToDoItem = ({ id, title }: ToDoProps) => {
  return (
    <Box>
      <Box display="flex">
        <Typography
          component="p"
          fontSize="16px"
          fontWeight="400"
          m="10px 0"
          pl="10px"
        >
          {title}
        </Typography>
        <ToolBar />
      </Box>
      <Divider />
    </Box>
  );
};

export default ToDoItem;
