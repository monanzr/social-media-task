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
    onRemoveSocialMedia,
    onSelectedTask,
    onList,
    getSocialMedia: socialMedia,
    getSelectedSocialMedia: selectedSocialMedia,
    getShouldRefetch: shouldRefetch,
  } = useSocialMedia();

  const {
    onCollapseOpen,
    getCollapseOpen: collapseOpen,
  } = useCollapse();

  const theme = useTheme();
  
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await getSocialMedia();
      setIsLoading(false);
      onList(result);
    }
    fetchData();
  }, [shouldRefetch]);

  const editHandler = (data) => {
    onCollapseOpen();
    onSelectedTask(data);
  };

  const removeHandler = (data) => {
    onRemoveSocialMedia(data);
    removeSocialMedia(data);
  };

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
