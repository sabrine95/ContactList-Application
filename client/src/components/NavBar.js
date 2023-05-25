import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" style={{width:"100%", marginBottom:"20px"}}>
    <Container >
      <Navbar.Brand href="#home">Contact</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link style={{textDecoration: "none", marginRight: "15px"}} to="/">Home</Link>
          <Link style={{textDecoration: "none", marginRight: "15px"}} to="/add">Add contact</Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar