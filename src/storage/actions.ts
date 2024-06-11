import { Dispatch } from "redux";
import { getTodosApi } from "../services/api";

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";

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
