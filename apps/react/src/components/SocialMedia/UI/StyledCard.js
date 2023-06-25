import React from "react";
import { Card, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(() => {
  const theme = useTheme();
  return {
    width: "100%",
    padding: "1rem",
    background: theme.palette.neutral.gray,
  };
});

export default StyledCard;
