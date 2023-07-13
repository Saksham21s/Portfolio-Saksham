import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Beyond my technical acumen ,my arsenal includes a comprehensive command of <strong> Digital Marketing  </strong>Strategies, propelling buisnesses to new heights.
            <br />
            <br />
           Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Digital Marketing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Search Engine Optimization
            </li>
          </ul>

          {/* <p style={{ color: "red" }}>
            ""{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "yellow" }}>Saksham</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
