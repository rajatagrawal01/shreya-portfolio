import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJira,
  SiJenkins 
} from "react-icons/si";

import { DiGit} from "react-icons/di";
import { BsMicrosoftTeams } from "react-icons/bs";
import workBenchLogo from "../../Assets/workbench-logo.png";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsMicrosoftTeams  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={workBenchLogo} style={{"width":"150px"}} alt="WorkbenchLogo"/>
        
      </Col>
    </Row>
  );
}

export default Toolstack;
