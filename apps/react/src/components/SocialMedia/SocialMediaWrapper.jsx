import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import getIcon from "../../utils/getIcon";
import SocialMediaForm from "./SocialMediaForm";
import SocialMediaList from "./SocialMediaList";
import { isEmpty } from "../../utils/function.util";
import useSocialMedia from "../../hooks/useSocialMedia";
import useCollapse from "../../hooks/useCollapse";
import { AddOrEditRouthingPathButton } from "./UI/AddOrEditRouthingPathButton";

const SocialMediaWrapper = () => {
  const { getSelectedSocialMedia: selectedSocialMedia } = useSocialMedia();

  const {
    palette: {
      secondary: { main: secondaryColor },
    },
  } = useTheme();

  const { toggleOpenForm } = useCollapse();

  const checkSelectedSocialMediaEmpty = isEmpty(selectedSocialMedia);

  return (
    <Box
      sx={{
        background: secondaryColor,
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
        padding: 5,
        display: "grid",
        gap: "1rem",
        width: "80%",
        margin: "5rem auto",
        borderRadius: "1rem",
      }}
    >
      <Typography>مسیر های ارتباطی</Typography>
      <AddOrEditRouthingPathButton
        startIcon={getIcon(checkSelectedSocialMediaEmpty ? "add" : "edit")}
        isAdd={checkSelectedSocialMediaEmpty}
        onClick={toggleOpenForm}
        type="submit"
        variant="text"
        typeName=""
      />
      <SocialMediaForm />
      <SocialMediaList />
    </Box>
  );
};

export default SocialMediaWrapper;
