import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="h-auto">
        <Container fluid className="border px-5 py-3 mt-2 h-100  ">
          <Row className="d-flex justify-content-between px-5">
            <Col>
              <img
                className="w-50 h-20"
                src="https://codeit.com.np/storage/01JJ6HWH8RP35HYNCEBFXVYZKF.png"
                alt="codeit.img"
              />
              <br />
              <ul className="list-unstyled">
                <li>
                  <a href="tel:025-575163">025-575163</a>,
                  <a href="tel:9867187098">9867187098</a>
                </li>
                <li>
                  {" "}
                  <a href="mailto:info@codeit.com.np">info@codeit.com.np</a>
                </li>
                <li> Prithvi path ,Dhran</li>
                <li>
                  <span className="fw-bold">Reg No.</span>
                  117345678
                </li>
                <li>
                  <span className="fw-bold">PAN No.</span>
                  117345678
                </li>
                <br />
                <span className="fw-bold">We are on </span>
                <div className="d-flex gap-3">
                  <FaFacebookSquare />
                  <FaYoutube />
                  <FaTwitter />
                </div>
              </ul>
            </Col>
            <Col>
              <span className="fw-bold  fs-5 p-1">Quick Links</span>
              <div className="list-group border-0  ">
                <a
                  href="#1"
                  className="list-group-item list-group-item-action border-0  py-0"
                >
                  Home
                </a>
                <a
                  href="#2"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Why 14 days?
                </a>
                <a
                  href="#3"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  About Us
                </a>
                <a
                  href="#4"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Voice of Students
                </a>
                <a
                  href="#5"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Gallery
                </a>
                <a
                  href="#6"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Blog
                </a>
                <a
                  href="#7"
                  className="list-group-item list-group-item-action
                border-0 py-0"
                >
                  Contact Us
                </a>
                <a
                  href="#8"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Student Portal
                </a>
              </div>
            </Col>
            <Col>
              <span className="fw-bold fs-5">We Accept</span>
              <br />
              

              <div className="container  ">
                <div className="row d-flex  ">
                  <div className="col-9 bg-white  ">
                    <img
                      className="w-75"
                      src="https://codeit.com.np/asset/img/esewa.png"
                      alt="esewa.png"
                    />
                    <span className="fs-6">esewa /bank</span>
                  </div>
                  <div className="col-3 bg-white   p-1 m-0">
                    <img
                      className="w-75"
                      src="https://codeit.com.np/asset/img/smartphone.png"
                      alt="fonepay.png"
                    />
                    <span className="fs-6">Mobile banking</span>
                  </div>
                </div>
              </div>
              <br />
              <div className="container">
                <div className="row d-flex justify-content-between">
                  <div className="col-3 bg-white p-1 ">
                    <img
                      className="w-75"
                      src="https://codeit.com.np/asset/img/bank.png"
                      alt="bank.png"
                    />
                    <span className="fs-6">Bank transfer</span>
                  </div>
                  <div className="col-9 bg-white">
                    <img
                      className="w-100"
                      src="https://codeit.com.np/asset/img/khalti.png"
                      alt="khalti.png"
                    />
                    <span className="fs-6">Khalti/Global IME</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <span className="fw-bold  p-1 fs-5">Code IT Support </span>
              <div className="list-group border-0 ">
                <span className="fw-bold  p-1">Chat Support </span>

                <a
                  href="#1"
                  className="list-group-item list-group-item-action border-0  py-0"
                >
                  Whatsapp:9862130505
                </a>
                <a
                  href="#2"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Viber:9862130505
                </a>
                <a
                  href="#3"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Email:support@codeit.com.np
                </a>
                <span className="fw-bold  p-1">Call support </span>
                <a
                  href="#4"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Landline:025-575163
                </a>
                <a
                  href="#5"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  NTC:98523416789
                </a>
                <span className="fw-bold  p-1">Sales and Marketing</span>

                <a
                  href="#6"
                  className="list-group-item list-group-item-action border-0 py-0"
                >
                  Whatsapp:9707776595
                </a>
                <a
                  href="#7"
                  className="list-group-item list-group-item-action
                border-0 py-0"
                >
                  Viber:9707776595
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
