import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sentCount: 0,
  inboxCount: 0,
};

const countsSlice = createSlice({
  name: "counts",
  initialState,
  reducers: {
    setSentCount(state, action) {
      state.sentCount = action.payload;
    },
    setInboxCount(state, action) {
      state.inboxCount = action.payload;
    },
  },
});

export const { setSentCount, setInboxCount } = countsSlice.actions;
export default countsSlice.reducer;
