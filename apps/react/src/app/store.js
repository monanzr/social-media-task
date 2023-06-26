import { configureStore } from "@reduxjs/toolkit";
import socialMediaReducer from "./../features/social-media/socialMediaSlice";
import collapseReducer from "../features/collapse/collapseSlice";

export default configureStore({
  reducer: {
    socialMedia: socialMediaReducer,
    collapse: collapseReducer,
  },
});
