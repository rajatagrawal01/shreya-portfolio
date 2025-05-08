import React from "react";
import Card from "react-bootstrap/Card";
import "./projectCard.css";


function ProjectCards(props) {
  return (
    <Card className="project-card-view" style={{ textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Card.Img variant="top" src={props.imgPath1} alt="card-img" style={{ width: "20rem" }} />
        <Card.Img variant="top" src={props.imgPath2} alt="card-img" className="hide-on-small-screen"  style={{ width: "20rem" }} />
      </div>
      <Card.Body> 
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <b className="purple">Project / Client :</b> <div>{props.projectName}</div>
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          <b className="purple">Role:</b> <div>{props.role}</div>
        </Card.Text>
        
        <Card.Text style={{ textAlign: "justify" }}>
        <b className="purple">Responsibilities:</b> <div>{props.responsibilities}</div>
        </Card.Text>
        
        <Card.Text style={{ textAlign: "justify" }}>
        <b className="purple">Tech Skills:</b> <div>{props.techSkills}</div>
        </Card.Text>
        
        <Card.Text style={{ textAlign: "justify" }}>
        <b className="purple">Achievements:</b> <div>{props.achievements}</div>
        </Card.Text>
      
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
