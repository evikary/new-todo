import { combineReducers } from "redux";
import { todosSlice } from "./slice/todo-slice";

export const rootReducer = combineReducers({
  [todosSlice.name]: todosSlice.reducer,
});
