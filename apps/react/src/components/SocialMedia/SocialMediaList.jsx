import React, { useEffect, useState } from "react";
import StyledCard from "./UI/StyledCard";
import useSocialMedia from "../../hooks/useSocialMedia";
import SOCIAL_MEDIA_TYPES from "../../constants/index";
import getIcon from "../../utils/getIcon";
import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Link,
  Typography,
} from "@mui/material";
import useCollapse from "../../hooks/useCollapse";
import TableCellItem from "./UI/TableCellItem";
import { useGetSocialMedia } from "./../../hooks/useGetSocialMedia";
import AlertBox from "../AlertBox/AlertBox";

const SocialMediaList = () => {
  const {
    onSelectedTask,
    onList,
    getSocialMedia: socialMedia,
  } = useSocialMedia();

  const { onCollapseOpen } = useCollapse();

  const [removeSelected, setRemoveSelected] = useState();
  const [openAlertBox, setOpenAlertBox] = useState(false);

  const { data: list } = useGetSocialMedia();

  useEffect(() => onList(list), [list]);

  const editHandler = (data) => {
    onCollapseOpen();
    onSelectedTask(data);
  };

  const removeHandler = (data) => {
    setOpenAlertBox(true);
    setRemoveSelected(data);
  };

  const closeAlertBox = () => {
    setOpenAlertBox(false);
  };

  return (
    <StyledCard>
      <AlertBox
        removeSelected={removeSelected}
        dismiss={closeAlertBox}
        open={openAlertBox}
        title="آیا از تصمیم خود مطمئن هستید؟"
      ></AlertBox>
      <TableContainer>
        <Table>
          <TableBody>
            {socialMedia.length > 0 ? (
              socialMedia.map((item) => {
                const { id, type, link, socialMediaId } = item;
                return (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell scope="row">
                      <TableCellItem>
                        {getIcon(type)}
                        {SOCIAL_MEDIA_TYPES[type]}
                      </TableCellItem>
                    </TableCell>
                    <TableCell scope="row">
                      <TableCellItem>
                        <Typography component="span">آی دی (ID):</Typography>
                        <Typography component="p">{socialMediaId}</Typography>
                      </TableCellItem>
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <TableCellItem>
                        <Typography component="span">لینک:</Typography>
                        <Link href={link}>{link}</Link>
                      </TableCellItem>
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <TableCellItem>
                        <Button
                          variant="text"
                          onClick={() => editHandler(item)}
                        >
                          ویرایش
                        </Button>
                      </TableCellItem>
                    </TableCell>
                    <TableCell align="right">
                      {" "}
                      <TableCellItem>
                        <Button
                          color="error"
                          variant="text"
                          onClick={() => removeHandler(item)}
                        >
                          حذف
                        </Button>
                      </TableCellItem>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <div>لیست خالی است</div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledCard>
  );
};

export default SocialMediaList;
