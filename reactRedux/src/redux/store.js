import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import modalSlice from "./modalSlice"; // `modalSlice.reducer` default export olarak kullanılabilir.

export const store = configureStore({
  reducer: {
    data: dataSlice,
    modal: modalSlice,
  },
});
