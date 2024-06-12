import {
  CREATE_TODO_FAILED,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../storage/actions";

export type ItemToDo = {
  id: number;
  title: string;
};

export interface GetTodoRequestAction {
  readonly type: typeof GET_TODOS_REQUEST;
}

export interface GetTodoSuccessAction {
  readonly type: typeof GET_TODOS_SUCCESS;
  readonly payload: ItemToDo[];
}

export interface GetTodoRequestFailed {
  readonly type: typeof GET_TODOS_FAILED;
}

export interface CreateTodoRequestAction {
  readonly type: typeof CREATE_TODO_REQUEST;
}

export interface CreateTodoSuccessAction {
  readonly type: typeof CREATE_TODO_SUCCESS;
  readonly payload: ItemToDo;
}

export interface CreateTodoRequestFailed {
  readonly type: typeof CREATE_TODO_FAILED;
}

export type AllActions =
  | GetTodoRequestAction
  | GetTodoRequestFailed
  | GetTodoSuccessAction
  | CreateTodoRequestAction
  | CreateTodoSuccessAction
  | CreateTodoRequestFailed;
