import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sendMessageIsOpen: false,
  selectedMsg: null,
  box: [],
  box1: [],
};
const MailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    open(state) {
      state.sendMessageIsOpen = true;
    },
    close(state) {
      state.sendMessageIsOpen = false;
    },
    openMsg(state, actions) {
      state.selectedMsg = actions.payload;
    },
    fillbox(state, action) {
      state.box = action.payload;
    },
    emptybox(state, action) {
      state.box = [];
    },
    fillbox1(state, action) {
      state.box1 = action.payload;
    },
    emptybox1(state, action) {
      state.box1 = [];
    },
  },
});
export const { open, close, openMsg, emptybox, fillbox, fillbox1, emptybox1 } =
  MailSlice.actions;
export default MailSlice.reducer;
