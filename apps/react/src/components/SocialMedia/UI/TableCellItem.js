import { Box, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";

const TableCellItem = styled(Box)(() => {
  const theme = useTheme();
  return {
    display: 'flex',
    justifyContent: {
      sm: "center",
      md: "start",
    },
    alignItems: 'center',
    gap: "10px",
    fontSize: "13px",
    "& span": {
      color: theme.palette.primary.gray,
    },
    "& p": {
        color: theme.palette.primary.text,
        fontSize: "14px",
        direction: "ltr",
    },
    "& a": {
      color: theme.palette.primary.main,
      fontSize: "14px",
    },
  };
});

export default TableCellItem;
