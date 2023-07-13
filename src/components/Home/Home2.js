import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Particle from "../Particle";
import CardMain from "./CardMain";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Github from "./Github";
import Resources from "./Resources"
import pdf from "../../Assets/../Assets/main-res.pdf";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Particle />
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.9em" }}>
              KNOW  WHO I'M
            </h1>
            <p className="home-about-body">
              Hii Everyone, I am
              <b className="purple">
                <big> Saksham Pandey</big>
              </b>
              <br />
              <br />I am a full stack developer skilled in{" "}
              <b className="purple">
                {" "}
                DevOps, digital marketing, SEO, database management, and data
                analysis
              </b>
              . My portfolio demonstrates expertise in streamlining software
              development processes, optimizing websites for search engines,
              managing databases effectively, and extracting valuable insights
              from data. With a focus on efficiency and results.
              <br />
              <br />
              <b className="purple"> My field of Interest's are : &nbsp;</b>
              <br />
              <ul>
                <li className="about-activity">
                  <ImPointRight />
                  Full stack development
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ImPointRight />
                  DevOps
                  <br />
                  <ImPointRight />
                  Digital marketing
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ImPointRight />
                  SEO optimization
                  <br />
                  <ImPointRight />
                  SQL and NoSQL
                  databases&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ImPointRight />
                  Data analysis
                  <br />
                </li>
              </ul>

              <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>

              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} id="image" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

       <Row>

       <h1 style={{ fontSize: "2.9em" ,color:"white"}}>
           <strong> Here's some Coding Resources you may like</strong>
            </h1>
        <Resources/>

       <h1 style={{ fontSize: "2.9em" ,color:"white"}}>
            Here's my Internships Experience Companies
            </h1>
  <CardMain/>
 
  </Row>
<Github/>



{/* CONNECT WITH US  */}
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
export default Home2;

