import { ItemToDo, TodosActions } from "../types/types";
import {
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
  action: TodosActions
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
    default: {
      return state;
    }
  }
};
