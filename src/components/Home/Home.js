import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Home = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [editorState, setEditorState] = useState(null);
  const [activeTab, setActiveTab] = useState("send");
  const [navPosition, setNavPosition] = useState("static");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 60) {
      setNavPosition("fixed");
    } else {
      setNavPosition("static");
    }
  };

  const handleTabSelect = (tab) => {
    setActiveTab(tab);
  };

  const handleSend = () => {
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Mail Body:", editorState.getCurrentContent().getPlainText());

    setTo("");
    setSubject("");
    setEditorState(null);
  };

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Row>
        <Col
          md={2}
          style={{
            backgroundColor: "#fff",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            position: navPosition,
            top: 0,
            left: 0,
            zIndex: 1000,
          }}
        >
          <Nav className="flex-column">
            <Nav.Link
              href="#send"
              style={{
                padding: "10px",
                color: "#333",
                textDecoration: "none",
                backgroundColor: activeTab === "send" ? "#e6e6e6" : "",
              }}
              onClick={() => handleTabSelect("send")}
            >
              Send
            </Nav.Link>
            <Nav.Link
              href="#inbox"
              style={{
                padding: "10px",
                color: "#333",
                textDecoration: "none",
                backgroundColor: activeTab === "inbox" ? "#e6e6e6" : "",
              }}
              onClick={() => handleTabSelect("inbox")}
            >
              Inbox
            </Nav.Link>
            {/* Add more tabs as needed */}
          </Nav>
        </Col>
        <Col md={{ span: 8, offset: 2 }}>
          <Form
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
              marginLeft: "220px",
            }}
          >
            <Form.Group controlId="toField">
              <Form.Label>To:</Form.Label>
              <Form.Control
                type="text"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                style={{
                  marginBottom: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "8px",
                }}
              />
            </Form.Group>

            {/* Other form fields and components */}

            <Button
              variant="primary"
              onClick={handleSend}
              style={{ width: "100%", marginTop: "15px", borderRadius: "4px" }}
            >
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
