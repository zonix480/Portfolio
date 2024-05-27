// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container, Col, Row } from 'react-bootstrap';
import './components.css';
import memoji from '../assets/images/memo.png';
import { Bounce, Zoom } from "react-awesome-reveal";
import down from "../assets/images/down.gif";

const Home = () => {
  return (
    <Container fluid className='lexend back'>
        
        <Row className='mt-sm-0 pt-sm-0' style={{height:'100vh'}}>
           
            <Col xs={{order:2}} className='ms-5 d-flex flex-column justify-content-md-center order-sm-2 order-md-2 mt-sm-5 pt-sm-0' style={{marginTop: 122}} >
            <Zoom>
                <h1 className='white'>Julian Cruz </h1>
                <h1 className='white'>Desarrollador Full Stack</h1>
                <span className='white'>
                +6 años de experiencia<br/>
Solida experiencia en la creación de aplicaciones mobiles y web dínamicas y escalables.
                </span>
            </Zoom>

            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center order-sm-1 order-xs-1'>
            <Bounce cascade>
            <img  className='text-center ' width={300} src={memoji} alt="JulianMemoji" />
            </Bounce>
            </Col>
        </Row>
    </Container>
  );
};

export default Home;