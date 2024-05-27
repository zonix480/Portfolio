// src/components/Header.js
import React from 'react';
import {useState, useEffect, useRef} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './components.css';
const Header = () => {
  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
  return (
    <Navbar fixed='top' className='p-3 lexend navbar-fixed-top' style={{ transition: '1s ease', backgroundColor: navBackground ? 'rgba(74, 157, 156, 1)' : 'transparent'}} variant="dark" expand="lg">
      <Navbar.Brand className='pl-4' style={{paddingLeft:'50px'}} href="#home">J</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
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