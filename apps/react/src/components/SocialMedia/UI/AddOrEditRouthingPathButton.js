import { Typography, Button } from "@mui/material";
import getIcon from "../../../utils/getIcon";

export const AddOrEditRouthingPathButton = ({
  isAdd,
  onClick,
  variant,
  startIcon,
  typeName,
  type,
  ...restProps
}) => {
  return (
    <Button
      startIcon={startIcon}
      onClick={onClick}
      variant={variant}
      type={type}
      sx={{ justifyContent: "start", width: "fit-content" }}
    >
      <Typography>
        {isAdd ? "افزودن مسیر ارتباطی" : `ویرایش مسیر ارتباطی ${typeName}`}
      </Typography>
    </Button>
  );
};
