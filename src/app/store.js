import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "../dataSlice/DataSlice";
export const store = configureStore({
  reducer: {
    dataslice: DataSlice,
  },
});
