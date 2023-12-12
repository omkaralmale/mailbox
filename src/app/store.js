import { configureStore } from "@reduxjs/toolkit";
import MailSlice from "../features/MailSlice";
import AuthSlice from "../features/auth/AuthSlice";
export const store = configureStore({
  reducer: { mail: MailSlice, auth: AuthSlice },
});
