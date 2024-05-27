// src/components/Header.js
import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import "./components.css";
import "./hover.css";
import Card from "react-bootstrap/Card";
import AttentionSeeker from "react-awesome-reveal";

const CardExperience = (props) => {
  return (
    <div  className="hvr-shrink" onClick={()=>{window.location.href =props.url}}>
    <AttentionSeeker className="lexend shadowWhite " style={{backgroundColor:"white", borderRadius:"25px", height:props.isActual && '90%',padding:40, marginTop:'4%', marginBottom:'4%',backgroundColor:"#354656", cursor:"pointer"}}  effect={"tada"}>
    <Container>
        <Row>
            <Col md={props.isActual ? 1 : 2}>
            <img alt="logo" width={70} height={80}  style={{ objectFit:"contain"}} src={props.logo}></img> 
            </Col>
            <Col className="text-left" style={{alignSelf:"center"}}>
            <h4 className="white">{props.name}</h4>
            </Col>
        
        </Row>
        <Row className="p-md-3">
            <h1 className="" style={{color:"#D93D3D", fontSize:"30px"}}>{props.rol}</h1>
            <h5 className="white">
            {props.time}
            </h5>
            <p className="white">
            {props.description}
            </p>
        </Row>
    </Container>
    </AttentionSeeker>
    </div>
  );
};

export default CardExperience;
