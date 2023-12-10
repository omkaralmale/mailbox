import React, { useEffect, useState } from "react";
import { setSentCount } from "../../Store/Counts";
import { useDispatch } from "react-redux";

const Sent = () => {
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();
  const getSent = async () => {
    const user = localStorage
      .getItem("email")
      .replace("@", "")
      .replace(".", "");
    try {
      const response = await fetch(
        `https://mailbox-f86ab-default-rtdb.firebaseio.com/${user}/sent.json`
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
    </li>
  ));
  dispatch(setSentCount(list.length));
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Sent Emails</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>{list}</ul>
    </div>
  );
};

export default Sent;
