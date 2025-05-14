import React, { useState } from "react";
import { Button, Dropdown, Form } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";

import Menubar from "../pages/Menubar";
import Main from "../pages/Main";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleShow = () =>{ 
  setSidebar(true);
  
  console.log(sidebar)
  if (sidebar === "true") {
    <Menubar />;
  } else  if (sidebar==="false"){
    <Main />;
  }
}

  return (
    <>
      <div className="container-fluid  shadow px-5 py-3 mt-2 d-flex justify-content-center align-items-center gap-5">
        <img
          style={{ maxWidth: "100%", height: "40px" }}
          src="https://codeit.com.np/storage/01JJ6HWH8RP35HYNCEBFXVYZKF.png"
          alt="image.png"
        />
<Link to ="/menubar">
        <FiMenu
          onClick={handleShow}
          style={{ height: "50px", width: "30px" }}
        />
</Link>
        <Form className="d-flex flex-grow-1">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <div className="position-relative  d-flex align-items-center justify-content-center">
          <h6>Upcoming Classes</h6>
          <span
            style={{
              height: "16px",
              width: "16px",
              fontSize: "10px",
              padding: "3px",
              marginBottom: "3px",
              fontWeight: "bold",
              display: "flex",
            }}
            className=" position-absolute bottom-100 end-0 bg-danger text-light"
          >
            5
          </span>
        </div>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Courses
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Programming</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Web Development </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Networking</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="secondary" href="#">
          Student Portal <FaGraduationCap />
        </Button>
      </div>
    </>
  );
};

export default Navbar;
