import React from "react";
import { Card } from "react-bootstrap";
import LogInPageForm from "./LogInForm";
import { Link } from "react-router-dom";

const LogInPage = () => {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
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
            </div>
          </Card.Title>
          <LogInPageForm />
          <br />
          <span> Already an Account ? </span>
          <Link to="/signup">Sign Up</Link>
          <br />
          <span> Forgot Password ? </span>
          <Link to="/forgot-password">forgot password</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LogInPage;
