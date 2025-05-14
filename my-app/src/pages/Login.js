import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ">
        <div className="container d-flex align-items-center  justify-content-center p-2  m-5  w-50 border shadow p-3 mb-5 bg-body-tertiary rounded">
          <Form className="w-50 h-50">
            <img
              className="w-100 h-100"
              src="https://codeit.com.np/asset/img/codeitlogo.webp"
              alt="codeit.png"
            />
            <p className="fw-bold fs-4">Student Portal</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group
              className="mb-3 position-relative "
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control  type="password" placeholder="Password" />
              <FaEyeSlash className="position-absolute top-50 end-0 translate-middle-y ms-3" />
            </Form.Group>
            <Button className="w-100" variant="secondary" type="submit">
              Login
            </Button>{" "}
            <br /> <br />
            <span style={{ color: "red" }}>forget password?</span>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
