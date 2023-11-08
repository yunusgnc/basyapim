// store.js
import { configureStore } from "@reduxjs/toolkit";
import getDataFromRemote from "../action/getDataFromRemote";

const store = configureStore({
  reducer: {
    getData: getDataFromRemote,
  },
});

export default store;
