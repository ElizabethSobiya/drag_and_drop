import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './description.css'


function BasicExample() {
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{fontSize:'30px'}}> <b>PRODUCT COLLAPSE</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{fontSize:'20px' , margin:'20px'}}>Home</Nav.Link>
            <Nav.Link  style={{fontSize:'20px', margin:'20px'}}>Link</Nav.Link>
            <NavDropdown style={{fontSize:'20px', margin:'20px'}} title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{fontSize:'20px'}}>
                Products
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{fontSize:'20px'}}>Final Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{fontSize:'20px'}}>
                Mixed Products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;