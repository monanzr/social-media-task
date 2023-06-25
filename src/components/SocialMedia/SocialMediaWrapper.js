import React from "react";
import { Box, Typography, Button, useTheme, Alert } from "@mui/material";
import getIcon from "../../utils/getIcon";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";
import { isEmpty } from "../../utils/function.util";
import useSocialMedia from "./../../hooks/useSocialMedia";
import { grid } from "@mui/system";
import useCollapse from "./../../hooks/useCollapse";

const SocialMediaWrapper = () => {
  const theme = useTheme();
  const { getSelectedSocialMedia: selectedSocialMedia } = useSocialMedia();

  const { toggleOpenForm } = useCollapse();

  const checkSelectedSocialMediaEmpty = isEmpty(selectedSocialMedia);

  return (
    <Box
      sx={{
        background: theme.palette.neutral.dark,
        boxShadow:
          "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        padding: 5,
        display: "grid",
        gap: "1rem",
        width: "80%",
        margin: "5rem auto",
        borderRadius: "1rem",
      }}
    >
      <Typography>مسیر های ارتباطی</Typography>
      <Button
        startIcon={getIcon(checkSelectedSocialMediaEmpty ? "add" : "edit")}
        variant="text"
        onClick={toggleOpenForm}
        sx={{ justifyContent: "start", width: "fit-content" }}
      >
        {checkSelectedSocialMediaEmpty ? (
          <Typography>افزودن مسیر ارتباطی</Typography>
        ) : (
          <Typography>ویرایش مسیر ارتباطی</Typography>
        )}
      </Button>
      <SocialMediaForm />
      <SocialMediaList />
    </Box>
  );
};

export default SocialMediaWrapper;
