import { ItemToDo, ToggleData, UnitApi } from "../../types/types";
import { createAppAsyncThunk } from "../../hooks/useAppCreateAsyncThunk";

export const fetchTodos = createAppAsyncThunk<ItemToDo[], void>(
  "todo/fetchTodos",
  async (_, { extra: unitApi }) => {
    return await unitApi.getTodosApi();
  }
);

export const fetchAddTodo = createAppAsyncThunk<
  ItemToDo,
  Pick<ItemToDo, "title" | "typeTask">
>("todo/fetchAddTodo", async (todo, { extra: unitApi }) => {
  return await unitApi.addTodoApi(todo);
});

export const fetchDeleteTodo = createAppAsyncThunk<string, string>(
  "todo/fetchDeleteTodo",
  async (id: string, { extra: unitApi }) => {
    return await unitApi.deleteTodoApi(id);
  }
);

export const fetchUpdateTodo = createAppAsyncThunk<ItemToDo, ToggleData>(
  "todo/fetchUpdateTodo",
  async (todo, { extra: unitApi }) => {
    return await unitApi.toggleTodoApi(todo);
  }
);
