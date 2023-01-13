import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  open: false,
};

const ValidationSlice = createSlice({
  name: "validation",
  initialState,
  reducers: {
    setOpen: (state, action) => {
      const { payload } = action;
      state.open = payload;
    },
  },
});

export const { setOpen } = ValidationSlice.actions;
export const getValidationState = (state) => state.validation;
export default ValidationSlice;
