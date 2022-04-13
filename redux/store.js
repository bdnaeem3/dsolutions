import { configureStore } from "@reduxjs/toolkit";

// Slice
import configSlice from "./slice/configSlice";

const store = configureStore({
  reducer: {
    config: configSlice,
  },
});

export default store;
