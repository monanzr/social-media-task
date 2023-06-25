import React from "react";
import { Card, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(() => {
  const theme = useTheme();
  return {
    width: "100%",
    padding: "1rem",
    background: theme.palette.neutral.gray,
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

export default StyledCard;
