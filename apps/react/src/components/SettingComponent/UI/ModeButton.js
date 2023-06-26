import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ModeButton = styled(Button)(() => {
  return {
    width: "4rem",
    height: "4rem",
    padding: "1rem",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
  };
});

export default ModeButton;
