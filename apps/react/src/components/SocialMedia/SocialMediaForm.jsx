import React, { useCallback, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
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
import { postSocialMedia } from "../../api/postSocialMedia";
import { putSocialMedia } from "../../api/putSocialMedia";
import { AddOrEditRouthingPathButton } from "./UI/AddOrEditRouthingPathButton";

const defaultValues = {
  type: "",
  link: "",
  socialMediaId: "",
  id: "",
};

const SocialMediaForm = () => {
  const {
    onAddSocialMedia,
    onEditSocialMedia,
    onSelectedTask,
    getSelectedSocialMedia: selectedSocialMedia,
  } = useSocialMedia();

  const { onCollapseClose, getCollapseOpen: collapseOpen } = useCollapse();

  const {
    getValues,
    setValue,
    handleSubmit,
    reset,
    control,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: defaultValues,
  });

  const checkSelectedSocialMediaEmpty = isEmpty(selectedSocialMedia);

  const onSubmit = useCallback(
    async (data) => {
      if (checkSelectedSocialMediaEmpty) {
        try {
          await postSocialMedia(data);
          onAddSocialMedia(data);
        } catch (err) {}
      } else {
        try {
          await putSocialMedia(selectedSocialMedia, data);
          onEditSocialMedia({
            ...selectedSocialMedia,
            type: data.type,
            link: data.link,
            socialMediaId: data.socialMediaId,
          });
          onSelectedTask({});
        } catch (err) {}
      }
    },
    [
      checkSelectedSocialMediaEmpty,
      selectedSocialMedia,
      onAddSocialMedia,
      postSocialMedia,
      onEditSocialMedia,
      putSocialMedia,
    ]
  );

  const onCancel = useCallback(() => {
    reset(defaultValues);
    onCollapseClose();
    onSelectedTask({});
  }, [reset, onCollapseClose, onSelectedTask]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(defaultValues);
    }
  }, [formState, reset]);

  useEffect(() => {
    if (!checkSelectedSocialMediaEmpty) {
      setValue("type", selectedSocialMedia.type, { shouldTouch: true });
      setValue("link", selectedSocialMedia.link, { shouldTouch: true });
      setValue("socialMediaId", selectedSocialMedia.socialMediaId, {
        shouldTouch: true,
      });
    }
  }, [selectedSocialMedia, checkSelectedSocialMediaEmpty]);

  return (
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
                <Controller
                  name="type"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <FormControl fullWidth sx={{ minWidth: 120 }}>
                      <InputLabel id="type-value-select-label">نوع*</InputLabel>
                      <Select
                        {...field}
                        fullWidth
                        error={errors.type}
                        label="نوع"
                        name="type"
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
                        {Object.keys(SOCIAL_MEDIA_TYPES).map((key, i) => (
                          <MenuItem key={i} value={key}>
                            <Typography>{SOCIAL_MEDIA_TYPES[key]}</Typography>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  )}
                />
                {errors.type && <span>این فیلد اجباری است</span>}
              </Grid>
              <Grid item xs={12} md={4}>
                <Controller
                  name="link"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      error={errors.link}
                      label="لینک"
                      // InputLabelProps={{ shrink: field.value }}
                    />
                  )}
                />
                {errors.link && <span>این فیلد اجباری است</span>}
              </Grid>
              <Grid item xs={12} md={4}>
                <Controller
                  name="socialMediaId"
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      error={errors.socialMediaId}
                      label="(ID) آی دی"
                      // InputLabelProps={{ shrink: field.value }}
                    />
                  )}
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
            <AddOrEditRouthingPathButton
              isAdd={checkSelectedSocialMediaEmpty}
              typeName={SOCIAL_MEDIA_TYPES[selectedSocialMedia.type]}
              type="submit"
              variant="contained"
            />
          </CardActions>
        </StyledCard>
      </form>
      {/* )} */}
    </Collapse>
  );
};

export default SocialMediaForm;
