import { configureStore } from "@reduxjs/toolkit";
import noteS from "../slices/note";

const store = configureStore({
    reducer: { note: noteS,},
  });
  
  export default store;