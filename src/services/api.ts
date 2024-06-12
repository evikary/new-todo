import { ItemToDo } from "../types/types";
import { URL } from "./constants";

const checkResponse = async <T>(res: Response): Promise<T> => {
  const json: T = await res.json();
  if (!res.ok) {
    return Promise.reject(json);
  }
  return json;
};

export const getTodosApi = (): Promise<ItemToDo[]> => {
  return fetch(`${URL}/todos`)
    .then((data) => checkResponse<ItemToDo[]>(data))
    .then((json) => json)
    .catch((err) => Promise.reject(err));
};

export const addTodoApi = (
  todoData: Pick<ItemToDo, "title">
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

export const deleteTodoApi = (idTodo: string): Promise<string> => {
  return fetch(`${URL}/todos/${idTodo}`, {
    method: "DELETE",
  })
    .then((data) => checkResponse<ItemToDo>(data))
    .then((json) => json.id)
    .catch((err) => Promise.reject(err));
};
