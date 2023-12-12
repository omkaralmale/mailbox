import React, { useState } from "react";
import "./css/Compose.css";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { close } from "./features/MailSlice";

const Compose = () => {
  const sender = localStorage.getItem("email");
  const [to, setTo] = useState("");
  const [sub, setSub] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(close());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (to === "" || sub === "" || msg === "") {
      alert("Fill all fields");
      return;
    }
    fetch("https://mailbox-f86ab-default-rtdb.firebaseio.com/email.json", {
      method: "POST",
      body: JSON.stringify({
        to: to,
        sub: sub,
        msg: msg,
        sender: sender,
        blueTick: true,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then(() => {
        alert("Email sent successfully!");
        setTo("");
        setSub("");
        setMsg("");
        dispatch(close());
      })
      .catch((error) => {
        console.error("Error sending email: ", error);
      });
  };

  return (
    <div className="compose">
      <div className="compose_header">
        <div className="compose_header_left">
          <span>New Message</span>
        </div>
        <div className="compose_header_right">
          <IconButton>
            <RemoveIcon />
          </IconButton>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="compose_body">
          <div className="compose_body_form">
            <input
              type="text"
              placeholder="recipients"
              value={to}
              onChange={(e) => {
                setTo(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="subject"
              value={sub}
              onChange={(e) => {
                setSub(e.target.value);
              }}
            />
            <textarea
              rows="20"
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            >
              {msg}
            </textarea>
          </div>
        </div>

        <div className="compose_footer">
          <div className="compose_footer_left">
            <button type="submit">Send</button>
          </div>
          <div className="compose_footer_right"></div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
