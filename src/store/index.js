import { configureStore } from "@reduxjs/toolkit";
import ValidationSlice from "./ValidationSlice";

export const store = configureStore({
  reducer: {
    validation: ValidationSlice.reducer,

  },

});


export default store;
