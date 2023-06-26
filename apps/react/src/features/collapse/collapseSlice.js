import { createSlice } from "@reduxjs/toolkit";

export const collapseSlice = createSlice({
  name: "collapse",
  initialState: {
    collapseOpen: false,
  },
  reducers: {
    setCollapseOpen: (state, action) => {
      state.collapseOpen = action.payload;
    },
  },
});

export const { setCollapseOpen } = collapseSlice.actions;

export default collapseSlice.reducer;
