import React, { useState } from "react";
import gitIco from  "../../Assets/githubIco.png";
import liveIco from  "../../Assets/live.png";

export default function Project2() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [boot, setBoot] = useState("");
  const [react, setReact] = useState("");
  const [three, setThree] = useState("");
  const [firebase, setFirebase] = useState("");

  const handleMouseEnter = (e) => {
    if (e.target.id == "HTML") {
      setHtml(true);
    } else if (e.target.id == "CSS") {
      setCss(true);
    } else if (e.target.id == "JavaScript") {
      setJs(true);
    } else if (e.target.id == "Bootstrap") {
      setBoot(true);
    } else if (e.target.id == "React") {
      setReact(true);
    } else if (e.target.id == "Three.js") {
      setThree(true);
    } else if (e.target.id == "Firebase") {
      setFirebase(true);
    }
  };
  const handleMouseLeave = () => {
    setHtml();
    setCss();
    setJs();
    setBoot();
    setReact();
    setThree();
    setFirebase();
  };
  return (
    <div className="project-box">
      <div className="right-container">
        <h1>Pizza Event</h1>
        <div className="description">
          "Pizza Event" is an application used to sign up for an event for pizza
          lovers. The user can create an account and log in to it.
          Authentication is performed by Firebase. Subsequently, the
          authenticated user has the option to sign up for the event through the
          submission form. User data is stored in local storage. A list of
          enrolled users is also available in the application. The application
          is written for mobile and desktop users.
           
      </div>
     </div>
    </div>
  );
}