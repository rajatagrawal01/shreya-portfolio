import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiSelenium 
} from "react-icons/si";


import { FaSalesforce,FaHtml5,FaCss3Alt,FaJava  } from "react-icons/fa";
import { AiOutlineConsoleSql } from "react-icons/ai";
import salesForceLWC from "../../Assets/salesforce-lwc.png";
import apexLogo from "../../Assets/apex.png";
import salesCloudLogo from "../../Assets/salescloud.png";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={salesForceLWC} style={{"width":"100px"}} alt="salesForce Logo" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={apexLogo} style={{"width":"120px"}} alt="apex Logo" />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={salesCloudLogo} style={{"width":"150px"}} alt="SalesCloud Logo"/>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineConsoleSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
