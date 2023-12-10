import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Store/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

const LogInPageForm = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [errorMSG, setMSG] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjbT5nCnlMy92WAq1qWTCJXib11oX2J6c",
        {
          method: "POST",
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const data = await response.json();
        const errorMessage = data.error.message || "Failed to log in";
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setMSG("");
      dispatch(login({ email: data.email, token: data.idToken }));
      nav("/home");
    } catch (error) {
      alert(error.message);
      setMSG("Failed to log in");
    }
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <span style={{ color: "red" }}>{errorMSG}</span>
    </Form>
  );
};

export default LogInPageForm;
