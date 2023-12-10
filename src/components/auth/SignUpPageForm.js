import { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const SignUpPageForm = () => {
  const navigate = useNavigate();
  const [errorMSG, setMSG] = useState("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      setMSG("Password Not Matching");
      return;
    }
    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDjbT5nCnlMy92WAq1qWTCJXib11oX2J6c",
      {
        method: "POST",
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
          returnSecureToken: true,
        }),
        "Content-type": "application/json",
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            const errorMessage = data.error.message;
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
    email.current.value = "";
    password.current.value = "";
    confirmPassword.current.value = "";
    setMSG("");
    alert("SignUp Successful");
    navigate("/login");
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" ref={email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" ref={password} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          ref={confirmPassword}
        />
      </Form.Group>
      <span style={{ color: "red" }}>{errorMSG}</span>
      <br />
      <Button variant="primary" type="submit">
        SignUp
      </Button>
    </Form>
  );
};

export default SignUpPageForm;
