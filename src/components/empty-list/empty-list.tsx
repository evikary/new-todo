import { Container, Divider, Typography, useMediaQuery } from "@mui/material";

const EmptyList = () => {
  const matches = useMediaQuery("(min-width:700px)");

  return (
    <Container component="div" sx={{ width: matches ? "700px" : "400" }}>
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
