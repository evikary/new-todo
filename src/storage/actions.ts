import { Dispatch } from "redux";
import { addTodoApi, deleteTodoApi, getTodosApi } from "../services/api";
import { ItemToDo } from "../types/types";

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

export const CREATE_TODO_REQUEST = "CREATE_TODO_REQUEST";
export const CREATE_TODO_SUCCESS = "CREATE_TODO_SUCCESS";
export const CREATE_TODO_FAILED = "CREATE_TODO_FAILED";

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

export function getTodosAction() {
  return function (dispatch: Dispatch) {
    dispatch({
      type: GET_TODOS_REQUEST,
    });
    getTodosApi()
      .then((json) => {
        dispatch({ type: GET_TODOS_SUCCESS, payload: json });
      })
      .catch((error) => {
        dispatch({ type: GET_TODOS_FAILED });
      });
  };
}

export function createTodoAction(data: Pick<ItemToDo, "title">) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: CREATE_TODO_REQUEST,
    });
    addTodoApi(data)
      .then((json) => {
        dispatch({ type: CREATE_TODO_SUCCESS, payload: json });
      })
      .catch((error) => {
        dispatch({ type: CREATE_TODO_FAILED });
      });
  };
}

export function deleteTodoAction(id: string) {
  return function (dispatch: Dispatch) {
    dispatch({
      type: DELETE_TODO_REQUEST,
    });
    deleteTodoApi(id)
      .then((json) => {
        dispatch({ type: DELETE_TODO_SUCCESS, payload: json });
      })
      .catch((error) => {
        dispatch({ type: DELETE_TODO_FAILED });
      });
  };
}
