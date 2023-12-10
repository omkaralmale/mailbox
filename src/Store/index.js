import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/AuthSlice";
import countsReducer from "./Counts"; // Import the countsReducer, not the entire Counts slice

const store = configureStore({
  reducer: {
    auth: authSlice,
    counts: countsReducer, // Use the countsReducer in the store configuration
  },
});

export default store;
