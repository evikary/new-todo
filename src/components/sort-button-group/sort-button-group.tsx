import { Button, ButtonGroup } from "@mui/material";

const SortButtonGroup = () => {
  return (
    <ButtonGroup>
      <Button
        variant="text"
        sx={{
          color: "rgb(41 39 39)",
          fontSize: "18px",
        }}
      >
        Все
      </Button>
      <Button
        disabled
        variant="text"
        sx={{
          color: "rgb(41 39 39)",
          fontSize: "18px",
        }}
      >
        Самые новые
      </Button>
      <Button
        disabled
        variant="text"
        sx={{
          color: "rgb(41 39 39)",
          fontSize: "18px",
        }}
      >
        Самые старые
      </Button>
      <Button
        disabled
        variant="text"
        sx={{
          color: "rgb(41 39 39)",
          fontSize: "18px",
        }}
      >
        Сделанные
      </Button>
    </ButtonGroup>
  );
};

export default SortButtonGroup;
