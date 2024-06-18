import {
  CREATE_TODO_FAILED,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_FAILED,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  FILTER_TODOS_ALL,
  FILTER_TODOS_DONE,
  FILTER_TODOS_PERSON,
  FILTER_TODOS_WORK,
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  TOGGLE_DONE_FAILED,
  TOGGLE_DONE_REQUEST,
  TOGGLE_DONE_SUCCESS,
  TOGGLE_TITLE_FAILED,
  TOGGLE_TITLE_REQUEST,
  TOGGLE_TITLE_SUCCESS,
} from "../storage/actions";

export type ItemToDo = {
  id: string;
  title: string;
  done: boolean;
  typeTask: "work" | "person";
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

export interface DeleteTodoRequestAction {
  readonly type: typeof DELETE_TODO_REQUEST;
}

export interface DeleteTodoSuccessAction {
  readonly type: typeof DELETE_TODO_SUCCESS;
  readonly payload: string;
}

export interface DeleteTodoFailedAction {
  readonly type: typeof DELETE_TODO_FAILED;
}

export interface ToggleDoneRequestAction {
  readonly type: typeof TOGGLE_DONE_REQUEST;
}

export interface ToggleDoneSuccessAction {
  readonly type: typeof TOGGLE_DONE_SUCCESS;
  readonly payload: ItemToDo;
}

export interface ToggleDoneFailedAction {
  readonly type: typeof TOGGLE_DONE_FAILED;
}

export interface ToggleTitleRequestAction {
  readonly type: typeof TOGGLE_TITLE_REQUEST;
}

export interface ToggleTitleSuccessAction {
  readonly type: typeof TOGGLE_TITLE_SUCCESS;
  readonly payload: ItemToDo;
}

export interface ToggleTitleFailedAction {
  readonly type: typeof TOGGLE_TITLE_FAILED;
}

export interface FilterTodosDoneAction {
  readonly type: typeof FILTER_TODOS_DONE;
}

export interface FilterTodosWorkAction {
  readonly type: typeof FILTER_TODOS_WORK;
}

export interface FilterTodosPersonAction {
  readonly type: typeof FILTER_TODOS_PERSON;
}

export interface FilterTodosAllAction {
  readonly type: typeof FILTER_TODOS_ALL;
}

export type AllActions =
  | GetTodoRequestAction
  | GetTodoRequestFailed
  | GetTodoSuccessAction
  | CreateTodoRequestAction
  | CreateTodoSuccessAction
  | CreateTodoRequestFailed
  | DeleteTodoRequestAction
  | DeleteTodoSuccessAction
  | DeleteTodoFailedAction
  | ToggleDoneRequestAction
  | ToggleDoneSuccessAction
  | ToggleDoneFailedAction
  | ToggleTitleRequestAction
  | ToggleTitleSuccessAction
  | ToggleTitleFailedAction
  | FilterTodosDoneAction
  | FilterTodosWorkAction
  | FilterTodosPersonAction
  | FilterTodosAllAction;
