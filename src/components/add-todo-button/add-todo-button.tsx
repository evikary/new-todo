import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { ChangeEvent, useState } from "react";
import { addTodoApi } from "../../services/api";
import { createTodoAction } from "../../storage/actions";
import { useDispatch } from "react-redux";
import { setFirstLetter } from "../../utils/common-utils";

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

const AddToDoButton = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "" });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: setFirstLetter(e.target.value.trim()),
    });
  };

  const createTodo = () => {
    if (form.title === "") {
      handleClose();
    } else {
      dispatch(createTodoAction(form));
      handleClose();
      setForm({ title: "" });
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          borderRadius: "80px",
          p: "14px",
          background: "#292626",
          textTransform: "none",
        }}
      >
        <AddIcon />
        <Typography component="span" fontSize="14px">
          Добавить задачу
        </Typography>
      </Button>
      <Modal
        open={open}
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
            <AssignmentIcon />
            <Typography
              id="modal-modal-title"
              component="h2"
              fontSize="24px"
              fontWeight="500"
            >
              Новая задача
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
          <Button onClick={createTodo} sx={{ color: "black" }}>
            Создать
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default AddToDoButton;
