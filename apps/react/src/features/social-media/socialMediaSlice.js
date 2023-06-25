import { createSlice } from "@reduxjs/toolkit";

export const socialMediaSlice = createSlice({
  name: "socialMedia",
  initialState: {
    socialMedia: [],
    selectedSocialMedia: {},
    shouldRefetch: false,
  },
  reducers: {
    listItem: (state, action) => {
      state.socialMedia = action.payload;
      state.shouldRefetch = false;
    },
    selectedItem: (state, action) => {
      state.selectedSocialMedia = state.socialMedia.find(
        (t) => t.id === action.payload.id
      );
    },
    addItem: (state, action) => {
      const found = state.socialMedia.find(
        (item) =>
          item.type === action.payload.type ||
          item.link === action.payload.link ||
          item.socialMediaId === action.payload.socialMediaId
      );
      if (!found) {
        state.socialMedia = [...state.socialMedia, action.payload];
        state.shouldRefetch = true;
      } else {
        return state;
      }
    },
    removeItem: (state, action) => {
      state.socialMedia = state.socialMedia.filter(
        (item) => item.id !== action.payload.id
      );
      state.shouldRefetch = true;
    },
    editItem: (state, action) => {
      state.socialMedia = state.socialMedia.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
      state.shouldRefetch = true;
    },
  },
});

export const { listItem, selectedItem, addItem, removeItem, editItem } =
  socialMediaSlice.actions;

export default socialMediaSlice.reducer;
