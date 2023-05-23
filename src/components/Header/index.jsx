import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <>
       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/" className="head-icon">GOLDEN MANAGEMENT</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">HOME</Nav.Link>
      <Nav.Link as={Link} to="/properties">PROPERTIES</Nav.Link>
      <Nav.Link as={Link} to="/owners">OWNERS</Nav.Link>
      <Nav.Link as={Link} to="/residents">RESIDENTS</Nav.Link>
       <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
        <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
      
            </Nav>
            
    <Nav>
       
       {
        
        <Nav.Link as={Link} to="/login">LOGIN</Nav.Link> 
         
         
        
       }
      
            </Nav>
            
  </Navbar.Collapse>
  </Container>
</Navbar>
     </>
  )
}

export default Header