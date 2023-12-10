import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setInboxCount } from "../../Store/Counts";

const Inbox = () => {
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();

  const getSent = async () => {
    const user = localStorage
      .getItem("email")
      .replace("@", "")
      .replace(".", "");
    try {
      const response = await fetch(
        `https://mailbox-f86ab-default-rtdb.firebaseio.com/${user}/inbox.json`
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      const data = await response.json();
      let updatedData = [];
      for (const key in data) {
        updatedData.push({
          sender: data[key].sender,
          subject: data[key].subject,
          message: data[key].message,
          read: data[key].read,
        });
      }
      setArr(updatedData);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getSent();
  }, [dispatch]);

  const list = arr.map((item, index) => (
    <li
      key={index}
      style={{
        borderBottom: "1px solid #ccc",
        padding: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1 }}>
        <span style={{ fontWeight: "bold" }}>{item.sender}</span>
      </div>
      <div style={{ flex: 2 }}>
        <div style={{ marginBottom: "5px" }}>
          <span style={{ fontWeight: "bold" }}>Subject: </span>
          <span>{item.subject}</span>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>Message: </span>
          <span>{item.message}</span>
        </div>
      </div>
      <div>
        <span style={{ fontWeight: "bold", color: "red" }}>
          {item.read ? "Read" : "Unread"}
        </span>
      </div>
    </li>
  ));
  console.log(list.length);
  dispatch(setInboxCount(list.length));
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Inbox Emails</h2>
      <ul
        style={{
          listStyleType: "none",
          width: "800px",
        }}
      >
        {list}
      </ul>
    </div>
  );
};

export default Inbox;
