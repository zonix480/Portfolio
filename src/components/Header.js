// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './components.css';
const Header = () => {
  return (
    <Navbar className='p-3 lexend' bg="#2E2E2E" variant="dark" expand="lg">
      <Navbar.Brand className='pl-4' style={{paddingLeft:'50px'}} href="#home">J</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center">
          <Nav.Link className='white' href="#about" >INICIO</Nav.Link>
          <Nav.Link href="#experience">EXPERIENCIA</Nav.Link>
          <Nav.Link href="#technology">TECNOLOGIAS</Nav.Link>
          <Nav.Link href="#contact">CONTACTO</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;