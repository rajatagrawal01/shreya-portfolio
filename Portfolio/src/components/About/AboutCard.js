import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shreya Agrawal </span>
            from <span className="purple"> Indore, India.</span>
            <br />
            I am currently employed as a <span className="purple">Senior Salesforce Developer</span>  at Lowe's India.
            <br />
            I have completed my Bachelors of Technology (B.Tech) in Electronics and Communication from Medicaps University,
            Indore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Always be eager to learn something new"{" "}
          </p>
          <footer className="blockquote-footer">Shreya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
