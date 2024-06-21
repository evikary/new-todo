import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { todoAction } from "../../storage/slice/todo-slice";

const SortButtonGroup = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState("all");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: "all" | "work" | "person" | "done"
  ) => {
    dispatch(todoAction.sortTodos(newValue));
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="wrapped label tabs example"
    >
      <Tab
        value="all"
        label="Все"
        wrapped
        sx={{
          color: "rgb(41 39 39)",
          fontSize: "18px",
        }}
      />
      <Tab
        value="work"
        label="Рабочие"
        sx={{
          color: "rgb(41 39 39)",
          fontSize: "18px",
        }}
      />
      <Tab
        value="person"
        label="Личные"
        sx={{
          color: "rgb(41 39 39)",
          fontSize: "18px",
        }}
      />
      <Tab
        value="done"
        label="Сделанные"
        sx={{
          color: "rgb(41 39 39)",
          fontSize: "18px",
        }}
      />
    </Tabs>
  );
};

export default SortButtonGroup;
