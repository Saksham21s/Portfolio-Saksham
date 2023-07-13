import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import Particle from "../Particle";
import language from "../../Assets/Projects/language.png";
import portfolio from "../../Assets/Projects/portfolio.png";
import food from "../../Assets/Projects/food.jpg";
import hotel from "../../Assets/Projects/hotel.jpg";
import weather from "../../Assets/Projects/weather.png";
import vendingkart from "../../Assets/Projects/vendingkart.jpg";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my <strong >Good Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Take a look on it
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={weather}
              isBlog={false}
              title="WeatherCheck App"
             description="A web application that checks Weather of the location we want to check and also provide the feature of forecasts."
              ghLink="https://github.com/Saksham21s/Weather-App"
              demoLink="https://weather-app-alpha-gilt.vercel.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={food}
              isBlog={false}
              title="Food Ordering System"
               description="A web application that helps us to order food online.It has feature of Online as well as COD Payment."
              ghLink="https://github.com/Saksham21s/Food-Store-main"
              demoLink="https://food-store-main.vercel.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A Portfolio website made using React js and Tailwind CSS to showcase my work."
              ghLink="https://github.com/Saksham21s/portfolio.github.io"
              demoLink="https://portfolio-github-io-alpha.vercel.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={language}
              isBlog={false}
              title="Language Translator"
              description="Language Translator app made using reactjs as frontend ."
              ghLink="https://github.com/Saksham21s/TRANSLATOR-APP/tree/main/translatoe-app"
              demoLink="https://translator-app-lime.vercel.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel SunRise"
              description="A website of Hotel Sunrise which contains frontend made by html,css,js and backend with PHP with MySql Database."
              ghLink="https://github.com/Saksham21s/sunrisehotel.github.io"
              demoLink="https://github.com/Saksham21s/sunrisehotel.github.io/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={vendingkart}
              isBlog={false}
              title="Vendingkart Solution"
              description="Frontend for Startup of Banglore."
              ghLink="https://github.com/Saksham21s/vendingkart.github.io"
              demoLink="https://vendingkart-github-io.vercel.app/" 
            />
          </Col>
        </Row>
       
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect With Me</h1>
            <p>
              Feel free to talk
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Saksham21s"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/saksham-pandey-206a43210/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/saksham_pandey07k?igshid=OGQ2MjdiOTE"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;

