import React, { useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataContext from "../context/provider";
import { addItem, editItem, listItem, removeItem, selectedItem } from "../features/social-media/socialMediaSlice";

const useSocialMedia = () => {
  // const { socialMediaState, socialMediaDispatch } = useContext(DataContext);

  const socialMediaDispatch = useDispatch()

  return {
    // getSocialMedia: useMemo(() => socialMediaState.socialMedia, [socialMediaState]),

    // getSelectedSocialMedia: useMemo(() => socialMediaState.selectedSocialMedia, [socialMediaState]),

    // getShouldRefetch: useMemo(() => socialMediaState.shouldRefetch, [socialMediaState]),

    // onList: (data) => {
    //   socialMediaDispatch({ type: "LIST_ITEM", payload: data });
    // },

    // onSelectedTask: (data) => {
    //   socialMediaDispatch({ type: "SELECTED_ITEM", payload: data });
    // },
    
    // onAddSocialMedia: (data) => {
    //   socialMediaDispatch({ type: "ADD_ITEM", payload: data });
    // },

    // onRemoveSocialMedia: (data) => {
    //   socialMediaDispatch({ type: "REMOVE_ITEM", payload: data });
    //   // closeAlertBox();
    // },

    // onEditSocialMedia: (data) => {
    //   socialMediaDispatch({ type: "EDIT_ITEM", payload: data });
    
    // },
    getSocialMedia: useSelector(state => state.socialMedia.socialMedia),

    getSelectedSocialMedia: useSelector(state => state.socialMedia.selectedSocialMedia),

    getShouldRefetch: useSelector(state => state.socialMedia.shouldRefetch),

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
