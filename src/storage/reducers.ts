import { AllActions, ItemToDo } from "../types/types";
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
} from "./actions";

export interface State {
  load: boolean;
  fail: boolean;
  todos: ItemToDo[];
  filter: "all" | "work" | "person" | "done";
}

const initialState: State = {
  load: false,
  fail: false,
  todos: [],
  filter: "all",
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
        filter: "all",
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
    case TOGGLE_DONE_REQUEST: {
      return {
        ...state,
        load: true,
        fail: false,
      };
    }
    case TOGGLE_DONE_SUCCESS: {
      return {
        ...state,
        load: false,
        todos: state.todos.map((item) =>
          item.id === action.payload.id ? { ...item, done: !item.done } : item
        ),
        fail: false,
      };
    }
    case TOGGLE_DONE_FAILED: {
      return {
        ...state,
        load: false,
        fail: true,
      };
    }
    case TOGGLE_TITLE_REQUEST: {
      return {
        ...state,
        load: true,
        fail: false,
      };
    }
    case TOGGLE_TITLE_SUCCESS: {
      return {
        ...state,
        load: false,
        todos: state.todos.map((item) =>
          item.id === action.payload.id
            ? { ...item, title: action.payload.title }
            : item
        ),
        fail: false,
      };
    }
    case TOGGLE_TITLE_FAILED: {
      return {
        ...state,
        load: false,
        fail: true,
      };
    }
    case FILTER_TODOS_ALL: {
      return {
        ...state,
        load: false,
        filter: "all",
        fail: false,
      };
    }
    case FILTER_TODOS_DONE: {
      return {
        ...state,
        load: false,
        filter: "done",
        fail: false,
      };
    }
    case FILTER_TODOS_WORK: {
      return {
        ...state,
        load: false,
        filter: "work",
        fail: false,
      };
    }
    case FILTER_TODOS_PERSON: {
      return {
        ...state,
        load: false,
        filter: "person",
        fail: false,
      };
    }
    default: {
      return state;
    }
  }
};
