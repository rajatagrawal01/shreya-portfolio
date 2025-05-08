import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdEmail,MdCall  } from "react-icons/md";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row style={{"fontFamily":"sans-serif","fontStyle":"italic"}}>
        <Col md="6" className="footer-copywright">
        <MdEmail style={{"color": "white","fontSize":"x-large"}} />
          <h3>shreyaa0115@gmail.com</h3>
        </Col>
        <Col md="6">
        <MdCall style={{"color": "white","fontSize":"x-large"}} />
          <h3>+91 97132-94456</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
