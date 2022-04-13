import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "",
};

export const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeLocales: (state, { payload }) => {
      state.lang = payload;
    },
  },
  extraReducers: {},
});

export const { changeLocales } = configSlice.actions;

export default configSlice.reducer;
