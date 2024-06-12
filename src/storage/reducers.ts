import { AllActions, ItemToDo } from "../types/types";
import {
  CREATE_TODO_FAILED,
  CREATE_TODO_REQUEST,
  CREATE_TODO_SUCCESS,
  DELETE_TODO_FAILED,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "./actions";

export interface State {
  load: boolean;
  fail: boolean;
  todos: ItemToDo[];
}

const initialState: State = {
  load: false,
  fail: false,
  todos: [],
};

export const todosReducer = (
  state = initialState,
  action: AllActions
): State => {
  switch (action.type) {
    case GET_TODOS_REQUEST: {
      return {
        ...state,
        load: true,
        fail: false,
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        load: false,
        todos: action.payload,
        fail: false,
      };
    }
    case GET_TODOS_FAILED: {
      return {
        ...state,
        load: false,
        fail: true,
      };
    }
    case CREATE_TODO_REQUEST: {
      return {
        ...state,
        load: true,
        fail: false,
      };
    }
    case CREATE_TODO_SUCCESS: {
      return {
        ...state,
        load: false,
        todos: [...state.todos, action.payload],
        fail: false,
      };
    }
    case CREATE_TODO_FAILED: {
      return {
        ...state,
        load: false,
        fail: true,
      };
    }
    case DELETE_TODO_REQUEST: {
      return {
        ...state,
        load: true,
        fail: false,
      };
    }
    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        load: false,
        todos: state.todos.filter((item) => item.id !== action.payload),
        fail: false,
      };
    }
    case DELETE_TODO_FAILED: {
      return {
        ...state,
        load: false,
        fail: true,
      };
    }
    default: {
      return state;
    }
  }
};
