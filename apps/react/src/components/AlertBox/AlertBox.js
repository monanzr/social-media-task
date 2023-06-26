import React, { useState, useCallback } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import useSocialMedia from "../../hooks/useSocialMedia";
import { removeSocialMedia } from "../../api/removeSocialMedia";

const AlertBox = ({
  title,
  open,
  confirmWord = "تایید",
  dismiss,
  removeSelected,
  children,
}) => {
  const [word, setWord] = useState("");

  const { onRemoveSocialMedia } = useSocialMedia();

  const wordChangeHandler = ({ target: { value: targetValue } }) => {
    setWord(targetValue);
  };

  const onConfirm = useCallback(async () => {
    setWord("");
    try {
      await removeSocialMedia(removeSelected);
      onRemoveSocialMedia(removeSelected);
      dismiss();
    } catch (err) {}
  }, [removeSelected, removeSocialMedia, onRemoveSocialMedia]);

  return (
    <Dialog open={open} onClose={dismiss}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ direction: "rtl" }}>
          {children}
        </DialogContentText>
        <TextField
          fullWidth
          placeholder={confirmWord}
          value={word}
          onChange={wordChangeHandler}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="text" onClick={dismiss}>
          انصراف
        </Button>
        <Button
          color="error"
          disabled={word !== confirmWord}
          variant="text"
          onClick={onConfirm}
        >
          حذف
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertBox;
