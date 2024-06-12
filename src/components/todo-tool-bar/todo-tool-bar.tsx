import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteTodoAction } from "../../storage/actions";

interface ToolBarProps {
  idTodo: string;
}

const ToolBar = ({ idTodo }: ToolBarProps) => {
  const dispatch = useDispatch();

  const deleteTask = (id: string) => {
    console.log("deleteTask");
    dispatch(deleteTodoAction(id));
  };

  const editTask = () => {
    console.log("editTask");
  };

  const taskIsDone = () => {
    console.log("taskIsDone");
  };

  const actions = [
    {
      icon: <DeleteIcon />,
      name: "Удалить",
      onClick: () => deleteTask(idTodo),
    },
    { icon: <CheckIcon />, name: "Сделано", onClick: taskIsDone },
    { icon: <EditIcon />, name: "Редактировать", onClick: editTask },
  ];

  return (
    <Box sx={{ height: 65, transform: "translateY(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial playground example"
        icon={<MenuIcon fontSize="small" />}
        direction="left"
        sx={{ position: "absolute", bottom: 10, right: 10 }}
        FabProps={{
          sx: {
            bgcolor: "gray",
            width: "35px",
            height: "35px",
          },
        }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ToolBar;
