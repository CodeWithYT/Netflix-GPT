import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    gptSearch: gptReducer,
    config: configReducer,
  },
});

export default appStore;
