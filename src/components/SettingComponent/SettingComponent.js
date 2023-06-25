import React, { useState, useContext } from "react";
import {
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  Box,
  useTheme,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeButton from "./UI/ModeButton";
import { ColorModeContext, useMode } from "./../../theme/index";

const SettingComponent = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const drawerOpenHandler = () => {
    setOpen(true);
  };

  const drawerCloseHandler = () => {
    setOpen(false);
  };

  return (
    <Box position="absolute" right="0px" sx={{top: {
        md: "50%",
        xs: "3%"
    }}}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={drawerOpenHandler}
        edge="end"
        sx={{ mr: 2, ...(open && { display: "none" }) }}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={open}
        sx={{
          "& .MuiDrawer-paper": {
            background: theme.palette.neutral.dark,
          },
        }}
      >
        <List>
          <ListItem
            sx={{
              gap: "1rem",
              justifyContent: "space-between",
              borderBottom: "1px solid gray",
            }}
          >
            <Typography padding="8px">Setting</Typography>
            <IconButton onClick={drawerCloseHandler}>
              <CloseIcon />
            </IconButton>
          </ListItem>
          <ListItem sx={{ gap: "1.5rem", padding: "1rem" }}>
            <ModeButton
              sx={{ background: "black" }}
              onClick={colorMode.toggleColorMode}
            >
              <DarkModeIcon />
            </ModeButton>
            <ModeButton
              sx={{ background: "white", color: "gray" }}
              onClick={colorMode.toggleColorMode}
            >
              <LightModeIcon />
            </ModeButton>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </Box>
  );
};

export default SettingComponent;
