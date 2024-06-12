export const setFirstLetter = (task: string) => {
  return task.slice(0, 1).toLocaleUpperCase() + task.slice(1, task.length);
};
