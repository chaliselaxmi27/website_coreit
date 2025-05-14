import React, {  useState } from "react";
import { ListGroup, Offcanvas } from "react-bootstrap";

import Main from "./Main";


const Menubar = () => {
  
  const [sidebar, setSidebar] = useState(true);

  const handleClose = () => setSidebar(false); 
  
  return (
    <>
      <Main />

      <Offcanvas show={sidebar} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              className="w-100 h-100"
              src="https://codeit.com.np/storage/01JJ6HWH8RP35HYNCEBFXVYZKF.png"
              alt="codeit.png"
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
              Home
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              About Us
            </ListGroup.Item>
            <ListGroup.Item action href="#link3">
              Gallery
            </ListGroup.Item>
            <ListGroup.Item action href="#link4">
              Blog
            </ListGroup.Item>
            <ListGroup.Item action href="#link5">
              Voice of Studet
            </ListGroup.Item>
            <ListGroup.Item action href="#link6">
              Contact us
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Menubar;
