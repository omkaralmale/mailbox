import { createSlice } from "@reduxjs/toolkit";
const isLogInLocal = localStorage.getItem("isLogInLocal");
const initialState = {
  token: "",
  isLogin: isLogInLocal ? parseInt(isLogInLocal, 10) === 1 : false,
  email: "",
};
const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, actions) {
      state.token = actions.payload;
      state.isLogIn = true;
      localStorage.setItem("token", actions.payload.token);
      localStorage.setItem("email", actions.payload.email);
      localStorage.setItem("isLogInLocal", "1");
      state.email = actions.payload.email;
    },
    logout(state) {
      state.token = "";
      state.isLogIn = false;
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.setItem("isLogInLocal", "0");
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
