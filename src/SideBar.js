import { Button } from "@mui/material";
import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./css/Sidebar.css";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import SideBarOptions from "./SideBarOptions";
import StarIcon from "@mui/icons-material/Star";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import CategoryIcon from "@mui/icons-material/Category";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { open } from "./features/MailSlice";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const email = localStorage.getItem("email");
  const box = useSelector((state) => state.mail.box);
  const box1 = useSelector((state) => state.mail.box1);

  const Nav = useNavigate();
  const dispatch = useDispatch();

  const handleCompose = () => {
    dispatch(open());
  };

  const handleInbox = () => {
    Nav("/mail");
  };
  const handleSent = () => {
    Nav("/sentmail");
  };
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="compose_btn"
        onClick={handleCompose}
      >
        Compose
      </Button>
      <SideBarOptions
        icon={SendIcon}
        title={"Sent"}
        number={box.length}
        onClick={handleInbox}
      />
      <SideBarOptions icon={StarIcon} title={"Starred"} number={""} />
      <SideBarOptions
        icon={NotificationsPausedIcon}
        title={"Snoozed"}
        number={""}
      />
      <SideBarOptions
        icon={LabelImportantIcon}
        title={"Important"}
        number={0}
      />
      <SideBarOptions
        icon={MoveToInboxIcon}
        title={"Inbox"}
        number={box1.length}
        onClick={handleSent}
      />
      <SideBarOptions icon={DraftsIcon} title={"Draft"} number={0} />
      <SideBarOptions icon={CategoryIcon} title={"Category"} number={""} />
      <SideBarOptions icon={DeleteIcon} title={"Trash"} number={0} />
      <SideBarOptions icon={FindInPageIcon} title={"Docs"} number={""} />
      <SideBarOptions icon={ExpandMoreIcon} title={"More"} number={""} />
    </div>
  );
};

export default SideBar;
