import { Stack, useMediaQuery } from "@mui/material";
import EmptyList from "../empty-list/empty-list";
import ToDoItem from "../todo-item/todo-item";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../storage/selector";
import { useEffect, useMemo } from "react";
import { getTodosAction } from "../../storage/actions";
import { filterTodos } from "../../utils/common-utils";

const ToDoList = () => {
  const { todos } = useSelector(todosSelector);
  const { filter } = useSelector(todosSelector);
  const dispatch: any = useDispatch();
  const matches = useMediaQuery("(min-width:500px)");

  useEffect(() => {
    dispatch(getTodosAction());
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
