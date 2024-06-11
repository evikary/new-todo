import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";

const actions = [
  { icon: <DeleteIcon />, name: "Удалить" },
  { icon: <CheckIcon />, name: "Сделано" },
  { icon: <EditIcon />, name: "Редактировать" },
];

const ToolBar = () => {
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
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ToolBar;
