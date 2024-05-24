// src/components/Header.js
import React from "react";
import { Navbar, Nav, Container, Col, Row, Button } from "react-bootstrap";
import "./components.css";
import memoji from "../assets/images/memo.png";
import Card from "react-bootstrap/Card";
import CardExperience from "./cardExperience";
import angular from "../assets/images/angular.png";
import AttentionSeeker from "react-awesome-reveal";
import * as Icon from 'react-bootstrap-icons';
import { Fade } from "react-awesome-reveal";


const Technologies = (props) => {
  return (
    <Fade>
    <Container className="lexend mt-5 pt-5 mb-5 pb-5">
      <h1 className="white">Tecnologias</h1>
      <Row style={{backgroundColor:"white", borderRadius:30, marginTop:40}}>
        <Col>
        <h1 className="text-center">Web</h1>
        </Col>
        <Col>
        <h1 className="text-center">Mobile</h1>
        </Col>
      </Row>
     
      <Row className="text-center mt-5">
       
        <Col> <h5 className="white">Nodejs</h5></Col>
        <Col> <h5 className="white">React Native</h5></Col>
      </Row>
      <Row className="text-center mt-5">
        <Col> <h5 className="white">JAVA</h5></Col>
        <Col> <h5 className="white">Ionic</h5></Col>
      </Row>
      <Row className="text-center mt-5">
        <Col> <h5 className="white">Javascript</h5></Col>
        <Col><h5 className="white">Apache</h5></Col>
      </Row>
      <Row className="text-center mt-5">
        <Col> <h5 className="white">Dart</h5></Col>
        <Col><h5 className="white">Flutter</h5></Col>
      </Row>
      <Row className="text-center mt-5">
        <Col> <h5 className="white">Laravel</h5></Col>
        <Col><h5 className="white"></h5></Col>
      </Row>
      <Row className="text-center mt-5">
        <Col> <h5 className="white">Nodejs</h5></Col>
        <Col><h5 className="white"></h5></Col>
      </Row>
      <Row className="text-center mt-5">
        <Col> <h5 className="white">Angular</h5></Col>
        <Col><h5 className="white"></h5></Col>
      </Row>
    </Container>
    </Fade>
  );
};

export default Technologies;
