// src/components/Header.js
import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import "./components.css";
import memoji from "../assets/images/memo.png";
import Card from "react-bootstrap/Card";
import CardExperience from "./cardExperience";
import colombia from "../assets/images/colombia.webp";
import AttentionSeeker from "react-awesome-reveal";
import * as Icon from "react-bootstrap-icons";

const Contact = (props) => {
  const handleDownload = () => {
    // Ruta al archivo en la carpeta public
    const fileUrl = process.env.PUBLIC_URL + '/CV.pdf';
    
    // Crea un enlace temporal y haz clic en él
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'CV.pdf'; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Container className="lexend mt-5 pt-5 mb-5 pb-5">
      <h1 className="white">Contacto</h1>
      <Row>
        <div>
          <AttentionSeeker
            className="lexend shadowWhite "
            style={{
              borderBottom:"5px solid #4A9D9C",
              backgroundColor: "white",
              borderRadius: "25px",
              height: props.isActual && "90%",
              padding: 40,
              marginTop: "4%",
              marginBottom: "4%",
              backgroundColor: "#354656",
            }}
            effect={"tada"}
          >
            <Container  >
                <div className="d-grid justify-content-end">
                    <a alt="Download CV" onClick={handleDownload}>
                <Icon.Download style={{position:"absolute",right:30, cursor:"pointer"}} size={30} color="white"></Icon.Download></a>
                </div>
                
              <Row>
                <Col md={props.isActual ? 1 : 2} className="mb-4">
                  <img alt="Bandera Colombia"
                    width={70}
                    height={80}
                    style={{ objectFit: "contain" }}
                    src={colombia}
                  ></img>
                </Col>
                <Col className="text-left" style={{ alignSelf: "center" }}>
                  <h4 className="white">{"Julian Andres Cruz Gonzalez"}</h4>
                </Col>
              </Row>
              <Row className="p-md-3">
                <Col>
                  <h1
                    className=""
                    style={{ color: "#D93D3D", fontSize: "30px" }}
                  >
                    Email:
                  </h1>
                  <h5 className="white">
                    {" "}
                    <a
                      style={{ color: "white" }}
                      href="mailto:juliancruz300@gmail.com"
                    >
                      {"Enviar correo"}
                    </a>{" "}
                  </h5>
                </Col>
                <Col>
                  <h1
                    className=""
                    style={{ color: "#D93D3D", fontSize: "30px" }}
                  >
                    Redes:
                  </h1>
                  <Icon.Linkedin
                    onClick={() => {
                      window.location.href =
                        "https://www.linkedin.com/in/julian-andres-cruz-gonzalez-9349a817a/";
                    }}
                    color="white"
                    size={27}
                    style={{ marginRight: 10, cursor: "pointer" }}
                  />

                  <Icon.Github
                    onClick={() => {
                      window.location.href = "https://github.com/zonix480";
                    }}
                    style={{ cursor: "pointer" }}
                    color="white"
                    size={27}
                  />
                </Col>
              </Row>
            </Container>
          </AttentionSeeker>
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
