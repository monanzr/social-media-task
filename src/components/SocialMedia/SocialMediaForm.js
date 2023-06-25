import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Typography,
  Collapse,
  CardHeader,
  CardContent,
  CardActions,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  Grid,
} from "@mui/material";
import useSocialMedia from "../../hooks/useSocialMedia";
import useCollapse from "../../hooks/useCollapse";
import SOCIAL_MEDIA_TYPES from "../../constants/index";
import StyledCard from "./UI/StyledCard";
import { isEmpty } from "../../utils/function.util";
import getIcon from "../../utils/getIcon";
import { postSocialMedia } from './../../api/postSocialMedia';
import {putSocialMedia} from "../../api/putSocialMedia";

const SocialMediaForm = () => {
  const {
    onAddSocialMedia,
    onEditSocialMedia,
    onSelectedTask,
    getSocialMedia: socialMedia,
    getSelectedSocialMedia: selectedSocialMedia,
  } = useSocialMedia();

  const {
    onCollapseClose,
    getCollapseOpen: collapseOpen,
  } = useCollapse();

  console.log("collapseOpen", collapseOpen);

  let defaultValues = {
    type: "",
    link: "",
    socialMediaId: "",
    id: "",
  };

  const {
    register,
    getValues,
    setValue,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: defaultValues,
  });

  let values = getValues();
  console.log("values", values);

  const checkSelectedSocialMediaEmpty = isEmpty(selectedSocialMedia);

  const onSubmit = async (data) => {
    console.log("onSubmit", data);
    if (checkSelectedSocialMediaEmpty) {
      onAddSocialMedia(data);
      await postSocialMedia(data);
    } else {
      onEditSocialMedia({
        ...selectedSocialMedia,
        type: data.type,
        link: data.link,
        socialMediaId: data.socialMediaId,
      });
      await putSocialMedia(selectedSocialMedia, data);
      onSelectedTask({});
    }
  };

  console.log("socialMedia", socialMedia);

  const onCancel = () => {
    reset(defaultValues);
    onCollapseClose();
    onSelectedTask({});
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [formState, reset]);

  useEffect(() => {
    if (!checkSelectedSocialMediaEmpty) {
      setValue("type", selectedSocialMedia.type);
      setValue("link", selectedSocialMedia.link);
      setValue("socialMediaId", selectedSocialMedia.socialMediaId);
    }
  }, [setValue, formState]);

  return (
    <div>
      <Collapse in={collapseOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledCard>
            <CardHeader
              title={
                checkSelectedSocialMediaEmpty
                  ? "افزودن مسیر ارتباطی"
                  : `ویرایش مسیر ارتباطی ${
                      SOCIAL_MEDIA_TYPES[selectedSocialMedia.type]
                    }`
              }
            />
            <CardContent>
              <Grid container justifyContent="space-evenly" spacing={2}>
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth sx={{ minWidth: 120 }}>
                    <InputLabel id="type-value-select-label">نوع*</InputLabel>
                    <Select
                      fullWidth
                      error={errors.type}
                      label="نوع"
                      name="type"
                      {...register("type", { required: true })}
                      renderValue={(value) => (
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "3px",
                          }}
                        >
                          {getIcon(value)}
                          {SOCIAL_MEDIA_TYPES[value]}
                        </div>
                      )}
                    >
                      <MenuItem value="instagram">
                        <Typography>{SOCIAL_MEDIA_TYPES.instagram}</Typography>
                      </MenuItem>
                      <MenuItem value="facebook">
                        <Typography>{SOCIAL_MEDIA_TYPES.facebook}</Typography>
                      </MenuItem>
                      <MenuItem value="telegram">
                        <Typography>{SOCIAL_MEDIA_TYPES.telegram}</Typography>
                      </MenuItem>
                      <MenuItem value="twitter">
                        <Typography>{SOCIAL_MEDIA_TYPES.twitter}</Typography>
                      </MenuItem>
                      <MenuItem value="linkedin">
                        <Typography>{SOCIAL_MEDIA_TYPES.linkedin}</Typography>
                      </MenuItem>
                      <MenuItem value="website">
                        <Typography>{SOCIAL_MEDIA_TYPES.website}</Typography>
                      </MenuItem>
                    </Select>
                  </FormControl>
                  {errors.type && <span>این فیلد اجباری است</span>}
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    error={errors.link}
                    label="لینک"
                    name="link"
                    {...register("link", { required: true })}
                  />
                  {errors.link && <span>این فیلد اجباری است</span>}
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    fullWidth
                    error={errors.socialMediaId}
                    label="(ID) آی دی"
                    name="id"
                    {...register("socialMediaId", { required: true })}
                  />
                  {errors.socialMediaId && <span>این فیلد اجباری است</span>}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions
              sx={{
                justifyContent: {
                  sm: "flex-end",
                  xs: "center",
                },
                flexWrap: {
                  sm: "nowrap",
                  xs: "wrap-reverse",
                },
                gap: {
                  xs: "1rem",
                  sm: "0",
                },
              }}
            >
              <Button variant="outlined" onClick={onCancel}>
                انصراف
              </Button>
              <Button type="submit" variant="contained">
                {checkSelectedSocialMediaEmpty ? (
                  <Typography>افزودن مسیر ارتباطی</Typography>
                ) : (
                  <Typography>
                    {`ویرایش مسیر ارتباطی ${
                      SOCIAL_MEDIA_TYPES[selectedSocialMedia.type]
                    }`}
                  </Typography>
                )}
              </Button>
            </CardActions>
          </StyledCard>
        </form>
        {/* )} */}
      </Collapse>
    </div>
  );
};

export default SocialMediaForm;
