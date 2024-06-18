import { ItemToDo } from "../types/types";

export const setFirstLetter = (task: string) => {
  return task.slice(0, 1).toLocaleUpperCase() + task.slice(1, task.length);
};

export const filterTodos = (
  items: ItemToDo[],
  filterWord: "all" | "work" | "person" | "done"
) => {
  if (filterWord === "work") {
    return items.filter((item) => item.typeTask === "work");
  } else if (filterWord === "person") {
    return items.filter((item) => item.typeTask === "person");
  } else if (filterWord === "done") {
    return items.filter((item) => item.done === true);
  } else {
    return items;
  }
};
