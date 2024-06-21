import { Stack, useMediaQuery } from "@mui/material";
import EmptyList from "../empty-list/empty-list";
import ToDoItem from "../todo-item/todo-item";
import { useEffect, useMemo } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { todoAction, todoSelector } from "../../storage/slice/todo-slice";
import { filterTodos } from "../../utils/common-utils";

const ToDoList = () => {
  const todos = useAppSelector(todoSelector.todos);
  const filter = useAppSelector(todoSelector.filter);
  const dispatch = useAppDispatch();
  const matches = useMediaQuery("(min-width:500px)");

  useEffect(() => {
    dispatch(todoAction.fetchTodos());
  }, []);

  const tasks = useMemo(() => filterTodos(todos, filter), [todos, filter]);

  if (!tasks.length) {
    return <EmptyList />;
  }

  return (
    <Stack sx={{ minWidth: matches ? "500px" : "400px" }}>
      {tasks.map((item) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </Stack>
  );
};

export default ToDoList;
