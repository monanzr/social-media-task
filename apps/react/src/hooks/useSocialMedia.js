import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  editItem,
  listItem,
  removeItem,
  selectedItem,
} from "../features/social-media/socialMediaSlice";

const useSocialMedia = () => {
  const socialMediaDispatch = useDispatch();

  return {
    getSocialMedia: useSelector((state) => state.socialMedia.socialMedia),

    getSelectedSocialMedia: useSelector(
      (state) => state.socialMedia.selectedSocialMedia
    ),

    getShouldRefetch: useSelector((state) => state.socialMedia.shouldRefetch),

    onList: (data) => {
      socialMediaDispatch(listItem(data));
    },

    onSelectedTask: (data) => {
      socialMediaDispatch(selectedItem(data));
    },

    onAddSocialMedia: (data) => {
      socialMediaDispatch(addItem(data));
    },

    onRemoveSocialMedia: (data) => {
      socialMediaDispatch(removeItem(data));
    },

    onEditSocialMedia: (data) => {
      socialMediaDispatch(editItem(data));
    },
  };
};

export default useSocialMedia;
