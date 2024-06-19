import { RootState } from "./store";

export const todosSelector = (store: RootState) => store.todosReducer;
