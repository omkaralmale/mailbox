import React from "react";
import { Card } from "react-bootstrap";
import SignUpPageForm from "./SignUpPageForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
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
              <h5>Sign In with</h5>
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                alt="logo"
                width="90px"
              />
            </div>
          </Card.Title>
          <SignUpPageForm />
          <br />
          <span> Already an Account ? </span>
          <Link to="/LogIn">LogIn</Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SignUpPage;
