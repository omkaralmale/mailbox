import { IconButton } from "@mui/material";
import React from "react";
import "./css/EmailList.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MailDetails = () => {
  const data = useSelector((state) => state.mail.selectedMsg);
  // console.log(data);
  const Nav = useNavigate();
  return (
    <>
      <div className="emaildetails__header">
        <div className="emaildetails__header_left">
          <div style={{ width: "50px", borderBottom: "2px solid lightgrey" }}>
            <IconButton
              onClick={() => {
                Nav("/mail");
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          </div>
          <div style={{ marginTop: "20px" }}>
            <h4>From: {data.name}</h4>
            <h4>Subject: {data.subject}</h4>
            <p>{data.message}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailDetails;
