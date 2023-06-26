import { Card, useTheme } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(() => {
  const {
    palette: {
      tertiary: { main: tertiaryColor },
    },
} = useTheme();  return {
    width: "100%",
    padding: "1rem",
    background: tertiaryColor
  };
});

export default StyledCard;
