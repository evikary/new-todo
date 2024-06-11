import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddToDoButton = () => {
  return (
    <Button
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
  );
};

export default AddToDoButton;
