import { Box, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const TitleToDo = () => {
  return (
    <Box display="flex" alignItems="baseline" mb="30px">
      <DoneAllIcon fontSize="large" />
      <Typography
        component="h1"
        fontSize="34px"
        fontWeight="800"
        color="#4b4545"
      >
        TO_DO
      </Typography>
    </Box>
  );
};

export default TitleToDo;
