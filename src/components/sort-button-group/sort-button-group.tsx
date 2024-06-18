import { Tab, Tabs } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  getTodosAllAction,
  getTodosDoneAction,
  getTodosPersonAction,
  getTodosWorkAction,
} from "../../storage/actions";
import { useState } from "react";

const SortButtonGroup = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    if (newValue === "all") {
      dispatch(getTodosAllAction());
    } else if (newValue === "work") {
      dispatch(getTodosWorkAction());
    } else if (newValue === "person") {
      dispatch(getTodosPersonAction());
    } else {
      dispatch(getTodosDoneAction());
    }
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
