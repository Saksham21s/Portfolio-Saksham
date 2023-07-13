import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCard from "./Card";
import phn from "../../Assets/phn.jpg";
import CodeClause from "../../Assets/codeClause.jpg";
import oasis from "../../Assets/oasis.jpg";
import "./Card.css"



function Projects() {
  return (
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={CodeClause}
              isBlog={false}
              title="CodeClause"
             description="Role - Java Development Intern "
              ghLink="https://github.com/Saksham21s/WeatherCheck.github.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={oasis}
              isBlog={false}
              title="Oasis Infobyte"
               description="Role - Data Science Intern "
              ghLink="https://github.com/Saksham21s/WeatherCheck.github.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={phn}
              isBlog={false}
              title="PHN Technology"
               description="Role - Web Development Intern"
              ghLink="https://github.com/Saksham21s/WeatherCheck.github.io"
            />
          </Col>
        </Row>
       
      </Container>
  );
}

export default Projects;

