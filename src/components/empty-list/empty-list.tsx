import { Container, Divider, Typography } from "@mui/material";

const EmptyList = () => {
  return (
    <Container component="div" sx={{ width: "700px" }}>
      <Divider />
      <Typography
        component="h3"
        fontSize="20px"
        fontWeight="500"
        mt="30px"
        textAlign="center"
      >
        У вас пока нет ни одной задачи!
      </Typography>
    </Container>
  );
};

export default EmptyList;
