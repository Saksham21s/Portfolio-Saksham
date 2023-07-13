import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourcesCard from "./ResourcesCard";
import Python from "../../Assets/python-r.png";
import Alpha from "../../Assets/alpha.jpeg";
import lovebabbar from "../../Assets/lovebabbar.jpg";
import "./Card.css"



function Projects() {
  return (
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ResourcesCard
              imgPath={Alpha}
              isBlog={false}
              title="Alpha Batch Resources"
              ghLink="https://github.com/Saksham21s/Apna-College-Alpha-Batch"
            />
          </Col>
          <Col md={4} className="project-card">
            <ResourcesCard
              imgPath={Python}
              isBlog={false}
              title="Python Programming Resources"
              ghLink="https://github.com/Saksham21s/Python-Problems"
            />
          </Col>
          <Col md={4} className="project-card">
            <ResourcesCard
              imgPath={lovebabbar}
              isBlog={false}
              title="Love Babbar Resources"
              ghLink="https://github.com/Saksham21s/"
            />
          </Col>
        </Row>
       
      </Container>
  );
}

export default Projects;

