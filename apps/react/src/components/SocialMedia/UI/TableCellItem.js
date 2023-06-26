import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const TableCellItem = styled(Box)(() => {
  const {
    palette: {
      primary: { gray: grayColor },
    },
    palette: {
      primary: { text: textColor },
    },
    palette: {
      primary: { main: primaryColor },
    },
} = useTheme();  return {
    display: 'flex',
    justifyContent: {
      sm: "center",
      md: "start",
    },
    alignItems: 'center',
    gap: "10px",
    fontSize: "13px",
    "& span": {
      color: grayColor,
      fontSize: "13px",
    },
    "& p": {
        color: textColor,
        fontSize: "14px",
        direction: "ltr",
    },
    "& a": {
      color: primaryColor,
      fontSize: "14px",
    },
  };
});

export default TableCellItem;
