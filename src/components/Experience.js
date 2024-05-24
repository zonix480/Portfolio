// src/components/Header.js
import React from "react";
import { Navbar, Nav, Container, Col, Row } from "react-bootstrap";
import "./components.css";
import memoji from "../assets/images/memo.png";
import Card from "react-bootstrap/Card";
import CardExperience from "./cardExperience";
import davicol from "../assets/images/davivienda.png";
import kloustr from "../assets/images/kloustr.png";
import oet from "../assets/images/oet.png";
import freelance from "../assets/images/freelance.png";

const Experience = () => {
  return (
    <Container className="lexend mt-5 pt-5 mb-5 pb-5">
      <h1 className="white">Experiencia</h1>
      <Row>
        <Col>
          <CardExperience
            url={"https://www.davivienda.com/"}
            isActual
            name={"Davivienda"}
            logo={davicol}
            rol={"Especialista IT I"}
            time={"Enero 2022 - actualidad"}
            description={
              "Apoyo sobre apps de la empresa, apoyo sobre integraciones continuas y mejoras sobre procesos existentes."
            }
          ></CardExperience>
        </Col>
      </Row>

      <Row>
        <Col>
          <CardExperience
          url={"https://www.kloustrlabs.co/"}
            name="Kloustr Labs"
            logo={kloustr}
            rol={"Senior Developer"}
            time={"2022"}
            description={
              "Apoyo sobre apps de la empresa, apoyo sobre integraciones continuas y mejoras sobre procesos existentes."
            }
          ></CardExperience>
          <CardExperience
          url={"https://www.kloustrlabs.co/"}
            name="Kloustr Labs"
            logo={kloustr}
            rol={"Semi Senior Developer"}
            time={"2018-2021"}
            description={
              "Apoyo sobre apps de la empresa, apoyo sobre integraciones continuas y mejoras sobre procesos existentes."
            }
          ></CardExperience>
        </Col>
        <Col>
          <CardExperience
          url={"https://www.grupooet.com/"}
            name="Grupo OET"
            logo={oet}
            rol={"Semi Senior Developer"}
            time={"2021-2022"}
            description={
              "Apoyo sobre apps de la empresa, apoyo sobre integraciones continuas y mejoras sobre procesos existentes."
            }
          ></CardExperience>
          <CardExperience
           url={"https://www.linkedin.com/in/julian-andres-cruz-gonzalez-9349a817a/"}
            name="Freelance"
            logo={freelance}
            rol={"Semi Senior Developer"}
            time={"2021-2022"}
            description={
              "Apoyo sobre apps de la empresa, apoyo sobre integraciones continuas y mejoras sobre procesos existentes."
            }
          ></CardExperience>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
