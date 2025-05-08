import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import lowesLogo from "../../Assets/Projects/lowes.png"
import ibmLogo from "../../Assets/Projects/ibm.png"
import accentureLogo from "../../Assets/Projects/accenture.png"
import tcsLogo from "../../Assets/Projects/tcs.png"
import salesForceLogo from "../../Assets/salesforceLogo.png"
import selenuimLogo from "../../Assets/seleniumLogo.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath1={lowesLogo}
              imgPath2={salesForceLogo}
              isBlog={false}
              title="Lowes"
              projectName="Lowes ERP System"
              role="Senior Salesforce Developer"
              responsibilities=" Working as a Senior Salesforce Developer. Responsible for working with Product Manager and team to handle the requirements and also participate in release activities and data management in production along with other team members. Also, give guidance to the fellow team members in the sprint work"
              techSkills=" Lightning Web Components, Apex classes, Triggers, Territory Model, Flow builders."
              achievements="  Got appreciation from India’s manager and also product Manager for good client demos as well as completing and managing work on time within the sprints."
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath1={ibmLogo}
              imgPath2={salesForceLogo}
              isBlog={false}
              title="IBM"
              projectName="Lowes India"
              role="Salesforce Developer"
              responsibilities="Worked as a Salesforce Developer for Lowes as a contractor. Responsible for working on the sprint related activities and also handle the activity of QA counter parts. Project involved requirenments related to Territory management mainly dealing with Apex, trigger, async classes, LWC and flows."
              techSkills="Lightning Web Components, Apex classes, Triggers, Territory Model, Flow builders."
              achievements="Successfully delivered Salesforce Territory Management solutions using Apex, Triggers, LWC, and Flows while coordinating sprint and QA activities for Lowe's."
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath1={accentureLogo}
              imgPath2={salesForceLogo}
              isBlog={false}
              title="Accenture"
              projectName="City of Phoenix"
              role="Salesforce Developer"
              responsibilities="Working as a Salesforce Developer, responsible for engaging directly with clients to gather and analyze business requirements, and subsequently designing, developing, and enhancing features for the Salesforce Community Portal. This includes implementing custom solutions using Apex, Lightning Web Components (LWC), and Flows ensuring optimized user experience and meet evolving business needs."
              techSkills="Lightning Communities, Lightning Web Components, Apex classes, Lightning Components, Triggers, Automation flows, DRE’s."
              achievements="Got appreciation for different assignments from lead."
              />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath1={tcsLogo}
              imgPath2={salesForceLogo}
              isBlog={false}
              title="TCS Salesforce"
              projectName="Bayer, AmTrak"
              role="Salesforce Developer"
              responsibilities="To develop different community screens using LWC, lightning components and Apex classes. To create workflows and process builders according to the functionalities."
              techSkills="Apex classes and Test classes, Lightning Components, Triggers."
              achievements="Successfully delivered phase 1 of the project also received appreciations from the lead."
              />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath1={tcsLogo}
              imgPath2={selenuimLogo}
              isBlog={false}
              title="TCS Testing"
              projectName="YBS – Yorkshire Building Society, Canadian Imperial Bank of Commerce (CIBC)"
              role="Help to Buy (HTB) & Customer Experience Transformation Mortgage (CETM), Automation and Functional Tester"
              responsibilities="To develop different test cases and scenarios for the project. To create the test data and execute the test cases. To create the automation scripts using Selenium and Java.To test the end-to-end functionality of mortgage loan process and log defects in ALM."
              techSkills="Selenium, Java, ALM, SQL, JIRA."
              achievements={
                <>
                <ul>
                  <li>
                  <p><strong>Won Fast Starter awards</strong> during the two client visits.</p>
                  </li>
                  <li>
                  <p>Received <strong>Gems rewards</strong> from the team lead and onshore team leads.</p>
                  </li>
                  <li>
                  <p>Received a <strong>Technical Excellence Award</strong>, and my profile was displayed in the cafeteria.</p>
                  </li>
                </ul>
                </>
              }
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
