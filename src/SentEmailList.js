import React, { useCallback, useEffect } from "react";
import "./css/EmailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody.js";
import { useDispatch, useSelector } from "react-redux";
import { fillbox1 } from "./features/MailSlice.js";
const SentEmailList = () => {
  const dispatch = useDispatch();
  const arr = useSelector((state) => state.mail.box1);

  const getInbox = useCallback(() => {
    fetch(`https://mailbox-f86ab-default-rtdb.firebaseio.com/email.json`)
      .then((response) => response.json())
      .then((data) => {
        const updatedData = [];
        const curr = localStorage.getItem("email");
        for (const key in data) {
          if (curr === data[key].to) {
            updatedData.push({
              id: key,
              to: data[key].to,
              sub: data[key].sub,
              msg: data[key].msg,
              sender: data[key].sender,
              tick: data[key].blueTick,
            });
          }
        }
        dispatch(fillbox1(updatedData));
      })
      .catch((error) => {
        console.error("Error fetching inbox:", error);
      });
  }, [arr]);

  useEffect(() => {
    getInbox();
  }, [getInbox]);

  const list = arr.map((items) => {
    return (
      <EmailBody
        key={items.id}
        id={items.id}
        to={items.to}
        sub={items.sub}
        msg={items.msg}
        sender={items.sender}
        tick={items.tick}
      />
    );
  });
  return (
    <div className="emaillist">
      <EmailListSetting />
      <EmailType />
      {list}
    </div>
  );
};

export default SentEmailList;
