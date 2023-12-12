import { CheckBoxOutlineBlank, StarBorder } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMsg } from "./features/MailSlice";
const EmailBody = (props) => {
  const dispatch = useDispatch();

  const deletenail = async () => {
    try {
      const response = await fetch(
        `https://mailbox-f86ab-default-rtdb.firebaseio.com/email/${props.id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
    } catch (error) {
      alert(error);
    }
  };
  const nav = useNavigate();

  const openMsgFn = () => {
    dispatch(
      openMsg({
        name: props.to,
        subject: props.sub,
        message: props.msg,
      })
    );
    nav("/maildetails");
  };
  return (
    <div>
      <div className="emailbody" onClick={openMsgFn}>
        <div className="emailbody_left">
          <IconButton>
            <CheckBoxOutlineBlank />
          </IconButton>
          <IconButton>
            <StarBorder />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <h6>{props.to}</h6>
        </div>
        <div className="emailbody_middle">
          <span>
            <strong>{props.sub} :- </strong>
          </span>{" "}
          <span> {props.msg}</span>
        </div>
      </div>
      <div className="emailbody_right">
        <IconButton onClick={deletenail}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default EmailBody;
