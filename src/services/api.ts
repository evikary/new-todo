import {
  AddTodoApi,
  DeleteTodoApi,
  GetTodosApi,
  ItemToDo,
  ToggleData,
  ToggleTodoApi,
  UnitApi,
} from "../types/types";
import { URL } from "./constants";

const checkResponse = async <T>(res: Response): Promise<T> => {
  const json: T = await res.json();
  if (!res.ok) {
    return Promise.reject(json);
  }
  return json;
};

export const getTodosApi: GetTodosApi = (): Promise<ItemToDo[]> => {
  return fetch(`${URL}/todos`)
    .then((data) => checkResponse<ItemToDo[]>(data))
    .then((json) => json)
    .catch((err) => Promise.reject(err));
};

export const addTodoApi: AddTodoApi = (
  todoData: Pick<ItemToDo, "title" | "typeTask">
): Promise<ItemToDo> => {
  return fetch(`${URL}/todos`, {
    method: "POST",
    body: JSON.stringify(todoData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => checkResponse<ItemToDo>(data))
    .then((json) => json)
    .catch((err) => Promise.reject(err));
};

export const deleteTodoApi: DeleteTodoApi = (
  idTodo: string
): Promise<string> => {
  return fetch(`${URL}/todos/${idTodo}`, {
    method: "DELETE",
  })
    .then((data) => checkResponse<ItemToDo>(data))
    .then((json) => json.id)
    .catch((err) => Promise.reject(err));
};

export const toggleTodoApi: ToggleTodoApi = (
  dataTodo: ToggleData
): Promise<ItemToDo> => {
  return fetch(`${URL}/todos/${dataTodo.id}`, {
    method: "PATCH",
    body: JSON.stringify(dataTodo.data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => checkResponse<ItemToDo>(data))
    .then((json) => json)
    .catch((err) => Promise.reject(err));
};

export const unitApi: UnitApi = {
  getTodosApi,
  addTodoApi,
  deleteTodoApi,
  toggleTodoApi,
};
