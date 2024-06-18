import { Stack } from "@mui/material";
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

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  const tasks = useMemo(() => filterTodos(todos, filter), [todos, filter]);

  if (!tasks.length) {
    return <EmptyList />;
  }

  return (
    <Stack sx={{ minWidth: "500px" }}>
      {tasks.map((item) => (
        <ToDoItem key={item.id} {...item} />
      ))}
    </Stack>
  );
};

export default ToDoList;
