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
