import {
  AppsRounded,
  Help,
  Reorder,
  Search,
  Settings,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./css/Header.css";
import { useDispatch } from "react-redux";
import { logout } from "./features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Reorder></Reorder>
        </IconButton>
        <img
          src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0-852x479.jpg"
          alt=""
          height="50px"
        />
      </div>
      <div className="header__middle">
        <div className="search_mail">
          <IconButton>
            <Search></Search>
          </IconButton>
          <input type="text" placeholder="Search Mail" />
          <IconButton>
            <ExpandMoreIcon></ExpandMoreIcon>
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <Help></Help>
        </IconButton>
        <IconButton>
          <Settings></Settings>
        </IconButton>
        <IconButton>
          <AppsRounded></AppsRounded>
        </IconButton>
        <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVTnA9z7EwBr5PEEFtObg4PWrhyfvAB8SmPoJ91myLUBTx8zXFd7SlcSzuf97z3swkgks&usqp=CAU"
          onClick={() => {
            dispatch(logout());
            nav("/");
          }}
        ></Avatar>
      </div>
    </div>
  );
};

export default Header;
