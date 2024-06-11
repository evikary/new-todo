import { Stack } from "@mui/material";
import EmptyList from "../empty-list/empty-list";
import ToDoItem from "../todo-item/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../storage/selector";
import { useEffect } from "react";
import { getTodosAction } from "../../storage/actions";

const ToDoList = () => {
  const { todos } = useSelector(todosSelector);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  if (!todos.length) {
    return <EmptyList />;
  }

  return (
    <Stack sx={{ minWidth: "500px" }}>
      {todos.map((item) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </Stack>
  );
};

export default ToDoList;
