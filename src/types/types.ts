import store from "../storage/store";

export type ItemToDo = {
  id: string;
  title: string;
  done: boolean;
  typeTask: "work" | "person";
};

export const enum RequestStatus {
  Idle = "idle",
  Loading = "loading",
  Success = "success",
  Faled = "faled",
}

export type ToggleData = {
  id: string;
  data: Partial<ItemToDo>;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type GetTodosApi = () => Promise<ItemToDo[]>;
export type AddTodoApi = (
  todoData: Pick<ItemToDo, "title" | "typeTask">
) => Promise<ItemToDo>;
export type DeleteTodoApi = (idTodo: string) => Promise<string>;
export type ToggleTodoApi = (data: ToggleData) => Promise<ItemToDo>;

export type UnitApi = {
  getTodosApi: GetTodosApi;
  addTodoApi: AddTodoApi;
  deleteTodoApi: DeleteTodoApi;
  toggleTodoApi: ToggleTodoApi;
};
