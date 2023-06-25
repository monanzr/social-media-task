import React, { useContext, useMemo } from "react";
import DataContext from "../context/provider";

const useSocialMedia = () => {
  const { socialMediaState, socialMediaDispatch } = useContext(DataContext);

  return {
    getSocialMedia: useMemo(() => socialMediaState.socialMedia, [socialMediaState]),

    getSelectedSocialMedia: useMemo(() => socialMediaState.selectedSocialMedia, [socialMediaState]),

    getShouldRefetch: useMemo(() => socialMediaState.shouldRefetch, [socialMediaState]),

    onList: (data) => {
      socialMediaDispatch({ type: "LIST_ITEM", payload: data });
    },

    onSelectedTask: (data) => {
      socialMediaDispatch({ type: "SELECTED_ITEM", payload: data });
    },
    
    onAddSocialMedia: (data) => {
      socialMediaDispatch({ type: "ADD_ITEM", payload: data });
    },

    onRemoveSocialMedia: (data) => {
      socialMediaDispatch({ type: "REMOVE_ITEM", payload: data });
      // closeAlertBox();
    },

    onEditSocialMedia: (data) => {
      socialMediaDispatch({ type: "EDIT_ITEM", payload: data });
    },
  };
};

export default useSocialMedia;
