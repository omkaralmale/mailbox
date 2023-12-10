import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useDispatch } from "react-redux";

const Write = () => {
  const dispatch = useDispatch();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(null);

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const toUser = to.replace("@", "").replace(".", "");
    const bodyText = editorState
      ? editorState.getCurrentContent().getPlainText()
      : "";
    try {
      const response = await fetch(
        `https://mailbox-f86ab-default-rtdb.firebaseio.com/${toUser}/inbox.json`,
        {
          method: "POST",
          body: JSON.stringify({
            sender: to,
            subject: subject,
            message: bodyText,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      alert("send mail");
    } catch (error) {
      alert(error);
    }
    setTo("");
    setSubject("");
    setEditorState(null);
    const addMysent = async () => {
      const user = localStorage
        .getItem("email")
        .replace("@", "")
        .replace(".", "");
      //   console.log(user);
      try {
        const response = await fetch(
          `https://mailbox-f86ab-default-rtdb.firebaseio.com/${user}/sent.json`,
          {
            method: "POST",
            body: JSON.stringify({
              sender: to,
              subject: subject,
              message: bodyText,
            }),
            headers: {
              "Content-Type": "application/json",
            },
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
    addMysent();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        width: "90%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            id="to"
            value={to}
            placeholder="To"
            onChange={(event) => setTo(event.target.value)}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "50px",
              width: "90%",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            id="subject"
            value={subject}
            placeholder="subject"
            onChange={(event) => setSubject(event.target.value)}
            style={{
              marginLeft: "10px",
              padding: "5px",
              borderRadius: "50px",
              width: "90%",
            }}
          />
        </div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={handleEditorStateChange}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "list",
              "textAlign",
              "link",
              "emoji",
              "remove",
              "history",
            ],
            inline: {
              options: ["bold", "italic", "underline", "strikethrough"],
            },
          }}
          wrapperStyle={{
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            padding: "8px",
          }}
          editorStyle={{ minHeight: "200px", padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
