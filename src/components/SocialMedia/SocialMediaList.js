import React, { useEffect, useState } from "react";
import StyledCard from "./UI/StyledCard";
import useSocialMedia from "../../hooks/useSocialMedia";
import SOCIAL_MEDIA_TYPES from "../../constants/index";
import getIcon from "../../utils/getIcon";
import {
  Button,
  Grid,
  Item,
  List,
  ListItem,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  useTheme,
} from "@mui/material";
import useCollapse from "./../../hooks/useCollapse";
import {
  getSocialMedia,
} from "../../api/getSocialMedia";
import TableCellItem from "./UI/TableCellItem";
import { removeSocialMedia } from "../../api/removeSocialMedia";

const SocialMediaList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    onAddSocialMedia,
    onEditSocialMedia,
    onRemoveSocialMedia,
    onSelectedTask,
    onList,
    getSocialMedia: socialMedia,
    getSelectedSocialMedia: selectedSocialMedia,
    getShouldRefetch: shouldRefetch,
  } = useSocialMedia();

  const {
    onCollapseOpen,
    onCollapseClose,
    toggleOpenForm,
    getCollapseOpen: collapseOpen,
  } = useCollapse();

  const theme = useTheme();

  const [data, setData] = useState(...socialMedia);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await getSocialMedia();
      console.log("result", result);
      setIsLoading(false);
      // const arr = [{a:1}, {a:2}, {a:3}]
      onList(result);
    }
    fetchData();
  }, [shouldRefetch]);

  const editHandler = (data) => {
    onCollapseOpen();
    console.log("data", data);
    onSelectedTask(data);
  };

  const removeHandler = (data) => {
    onRemoveSocialMedia(data);
    removeSocialMedia(data);
  };

  console.log("selectedSocialMedia", selectedSocialMedia);

  console.log("socialMedia", socialMedia);

  // const socialMediaLists = [...socialMedia[0], socialMedia]
  // console.log("socialList", socialMediaLists)

  return (
    <StyledCard>
      <TableContainer>
        <Table>
          <TableBody>
          {socialMedia.length > 0 ? (
          socialMedia.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell scope="row">
                  <TableCellItem>
                    {getIcon(item.type)}
                    {SOCIAL_MEDIA_TYPES[item.type]}
                  </TableCellItem>
                </TableCell>
                <TableCell scope="row">
                  <TableCellItem>
                    <span>آی دی (ID):</span>
                    {/* <p>{item.id}</p> */}
                    <p>{item.socialMediaId}</p>
                  </TableCellItem>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <TableCellItem>
                    <span>لینک:</span>
                    <a href={item.link}>{item.link}</a>
                  </TableCellItem>
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <TableCellItem>
                    <Button variant="text" onClick={() => editHandler(item)}>
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
          ))
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
