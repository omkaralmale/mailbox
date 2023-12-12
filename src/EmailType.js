import { IconButton } from "@mui/material";
import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import InboxIcon from "@mui/icons-material/Inbox";
import "./css/EmailType.css";

const EmailType = () => {
  return (
    <div className="emailtype">
      <div className="emailtype_option emailtype_option--active">
        <IconButton>
          <InboxIcon />
          <p>Primary</p>
        </IconButton>
      </div>
      <div className="emailtype_option">
        <IconButton>
          <PeopleIcon />
          <p>Social</p>
        </IconButton>
      </div>
      <div className="emailtype_option">
        <IconButton>
          <SellIcon />
          <p>Promotion</p>
        </IconButton>
      </div>
    </div>
  );
};

export default EmailType;
