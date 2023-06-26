import { createSlice } from "@reduxjs/toolkit";

export const socialMediaSlice = createSlice({
  name: "socialMedia",
  initialState: {
    socialMedia: [],
    selectedSocialMedia: {},
    shouldRefetch: false,
  },
  reducers: {
    listItem: (state, { payload }) => {
      state.socialMedia = payload;
      state.shouldRefetch = false;
    },
    selectedItem: (state, { payload: { id: payloadId } }) => {
      state.selectedSocialMedia = state.socialMedia.find(
        ({ id }) => id === payloadId
      );
    },
    addItem: (state, { payload }) => {
      const {
        type: payloadType,
        link: payloadLink,
        socialMediaId: payloadSocialMediaId,
      } = payload;
      const found = state.socialMedia.find(
        ({ type, link, socsocialMediaId }) =>
          type === payloadType ||
          link === payloadLink ||
          socsocialMediaId === payloadSocialMediaId
      );
      if (!found) {
        state.socialMedia = [...state.socialMedia, payload];
        state.shouldRefetch = true;
      } else {
        return state;
      }
    },
    removeItem: (state, action) => {
      const {
        payload: { id: payloadId },
      } = action;
      state.socialMedia = state.socialMedia.filter(
        ({ id }) => id !== payloadId
      );
      state.shouldRefetch = true;
    },

    editItem: (state, { payload }) => {
      const { id: payloadId } = payload;
      state.socialMedia = state.socialMedia.map((item) => {
        const { id } = item;
        return id === payloadId ? payload : item;
      });
      state.shouldRefetch = true;
    },
  },
});

export const { listItem, selectedItem, addItem, removeItem, editItem } =
  socialMediaSlice.actions;

export default socialMediaSlice.reducer;
