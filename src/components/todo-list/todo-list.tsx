import { Stack } from "@mui/material";
import EmptyList from "../empty-list/empty-list";
import { ItemToDo } from "../../types/types";
import ToDoItem from "../todo-item/todo-item";

const ToDoList = () => {
  const todos: ItemToDo[] = [
    { id: 1, title: "Купить молоко" },
    { id: 2, title: "Почитать полезную книгу" },
  ];

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
