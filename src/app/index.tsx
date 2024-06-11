import { Container, Paper } from "@mui/material";
import TitleToDo from "../components/title-todo/title-todo";
import SortButtonGroup from "../components/sort-button-group/sort-button-group";
import AddToDoButton from "../components/add-todo-button/add-todo-button";
import ToDoList from "../components/todo-list/todo-list";

function App() {
  return (
    <Container
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: "30px",
      }}
    >
      <TitleToDo />
      <SortButtonGroup />
      <Paper
        elevation={3}
        square={false}
        sx={{
          display: "flex",
          justifyContent: "center",
          p: "40px 30px",
          borderRadius: "20px",
        }}
      >
        <ToDoList />
      </Paper>
      <AddToDoButton />
    </Container>
  );
}

export default App;
