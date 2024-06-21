import {
  Box,
  Button,
  Modal,
  SpeedDial,
  SpeedDialAction,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import { ChangeEvent, useState } from "react";
import { setFirstLetter } from "../../utils/common-utils";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { todoAction } from "../../storage/slice/todo-slice";

interface ToolBarProps {
  idTodo: string;
  titleTodo: string;
  done: boolean;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "18px",
  boxShadow: 44,
  p: 4,
};

const ToolBar = ({ idTodo, titleTodo, done }: ToolBarProps) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ title: titleTodo });
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: setFirstLetter(e.target.value.trim()),
    });
  };

  const deleteTask = (id: string) => dispatch(todoAction.fetchDeleteTodo(id));
  const editTask = () => handleOpen();
  const taskIsDone = (id: string) =>
    dispatch(todoAction.fetchUpdateTodo({ id, data: { done: !done } }));

  const saveTask = (id: string) => {
    if (form.title === "") {
      setForm({ title: titleTodo });
      handleClose();
    } else {
      dispatch(todoAction.fetchUpdateTodo({ id, data: { title: form.title } }));
      handleClose();
    }
  };

  const actions = [
    {
      icon: <DeleteIcon />,
      name: "Удалить",
      onClick: () => deleteTask(idTodo),
    },
    {
      icon: <CheckIcon />,
      name: "Сделано",
      onClick: () => taskIsDone(idTodo),
    },
    { icon: <EditIcon />, name: "Редактировать", onClick: editTask },
  ];

  return (
    <>
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
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={style}
        >
          <Box display="flex" alignItems="center">
            <Typography
              id="modal-modal-title"
              component="h2"
              fontSize="24px"
              fontWeight="500"
            >
              Редактировать задачу
            </Typography>
          </Box>
          <Stack m="30px 0" minWidth="400px">
            <TextField
              id="filled-multiline-flexible"
              label="Название"
              multiline
              maxRows={4}
              variant="filled"
              name="title"
              onChange={onChange}
              defaultValue={form.title}
            />
          </Stack>
          <Button onClick={() => saveTask(idTodo)} sx={{ color: "black" }}>
            Сохранить
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ToolBar;
