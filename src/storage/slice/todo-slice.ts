import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ItemToDo, RequestStatus } from "../../types/types";
import {
  fetchTodos,
  fetchAddTodo,
  fetchDeleteTodo,
  fetchUpdateTodo,
} from "../thunk/todo";
import { isActionPending, isActionRejected } from "../../utils/store-utils";

export interface StateTodos {
  todos: ItemToDo[];
  filter: "all" | "work" | "person" | "done";
  status: RequestStatus;
}

const initialState: StateTodos = {
  todos: [],
  filter: "all",
  status: RequestStatus.Idle,
};

export const todosSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    sortTodos(
      state: StateTodos,
      action: PayloadAction<"all" | "work" | "person" | "done">
    ) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.todos = action.payload;
      })
      .addCase(fetchAddTodo.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.todos.push(action.payload);
      })
      .addCase(fetchDeleteTodo.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.todos = state.todos.filter((item) => item.id !== action.payload);
      })
      .addCase(fetchUpdateTodo.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.todos = state.todos.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          }
          return item;
        });
      })
      .addMatcher(isActionPending(todosSlice.name), (state) => {
        state.status = RequestStatus.Loading;
      })
      .addMatcher(isActionRejected(todosSlice.name), (state) => {
        state.status = RequestStatus.Faled;
      });
  },
  selectors: {
    todos: (state: StateTodos) => state.todos,
    filter: (state: StateTodos) => state.filter,
    status: (state: StateTodos) => state.status,
  },
});

export const todoSelector = todosSlice.selectors;
export const todoAction = {
  ...todosSlice.actions,
  fetchTodos,
  fetchAddTodo,
  fetchDeleteTodo,
  fetchUpdateTodo,
};
