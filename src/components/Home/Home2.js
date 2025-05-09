import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { FaLinkedinIn,FaGoogleDrive  } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Senior Salesforce Developer </b>  with 8+ years of experience delivering scalable solutions using  I'm certified in Salesforce Platform Developer I & II, App Builder, and Administrator.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Lightning Web Components (LWC), Apex, Triggers, Flows, and Sales Cloud. </b>
              </i>
              <br />
              <br />
              I’ve worked with top firms like &nbsp;
              <b className="purple">Lowe’s , IBM , Accenture , and TCS</b>  building everything from community portals to territory management systems while leading{" "}
              <b className="purple">
                agile sprints and mentoring teams.
              </b>
              <br />
              <br />
              I enjoy creating robust CRM solutions that improve business processes and customer experience, using tools like <b className="purple">JIRA</b> and
              <i>
                <b className="purple">
                  {" "}
                  Git, VS Code, and Selenium
                </b>
              </i>
              &nbsp; I'm passionate about automation, clean architecture, and staying ahead in the Salesforce ecosystem.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar"/>
            </Tilt>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shreyaagrawal01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://drive.google.com/file/d/16nczlxAu8UdCB_OoZqE-YMqVLToGWGkY/view?usp=sharing" // Replace with your resume link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                <FaGoogleDrive />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
