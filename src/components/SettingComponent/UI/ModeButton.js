import React from "react";
import { Button, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

const ModeButton = styled(Button)(() => {
  const theme = useTheme();
  return {
    width: "4rem",
    height: "4rem",
    padding: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px"
    // '& .MuiSlider-thumb': {
    //   '&:hover, &.Mui-focusVisible': {
    //     boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
    //   },
    //   '&.Mui-active': {
    //     boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
    //   },
    // },
  };
});

export default ModeButton;
