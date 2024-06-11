export type ItemToDo = {
  id: number;
  title: string;
};

export type TodosActions = {
  type: string;
  payload: ItemToDo[];
};
