import React from "react";
import { Card, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const nav = useNavigate();
  const API_KEY = "AIzaSyDjbT5nCnlMy92WAq1qWTCJXib11oX2J6c";
  const userEmail = localStorage.getItem("userEmail");
  const handleForgot = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: userEmail,
          }),
          "Content-Type": "application/json",
        }
      );

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data);
      }

      const data = await response.json();
      alert("Check your  Mail", data);
      nav("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          fontFamily: "Quicksand",
        }}
      >
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title
              style={{
                fontSize: "28px",
                fontFamily: "Quicksand",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={divStyle}>
                <h5>Log In with</h5>
                <img
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                  alt="logo"
                  width="90px"
                />
                <p style={{ fontSize: "16px", marginTop: "20px" }}>
                  To continue, first verify that it's you
                </p>
              </div>
            </Card.Title>
            <Form onSubmit={handleForgot}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="Email" placeholder="Email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Link
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ForgotPassword;
