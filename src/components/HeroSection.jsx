import React, { useState, useEffect } from "react";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Bootstrap Icons
import * as Icon from "react-bootstrap-icons";
// Hero Section image
import headerImg from "../assets/image/header-img.svg";
// Style for the Hero Section
import "./HeroSection.css";

function HeroSection() {
  // Hooks for the Hero Section
  // Loop for To Rotate the text
  const [loopNum, setLoopNum] = useState(0);
  // Define the state for the deleting text
  const [deleting, setDeleting] = useState(false);
  // Define to rotate the text
  const toRotate = ["Web Developer", "Front-End Teacher", "DevOps Engineer"];
  // Define the state for the replaced text
  const [Text, setText] = useState("");
  // Make delte the text
  const [Delta, setDelta] = useState(300 - Math.random() * 100);
  // Loop Delay in milliseconds
  const period = 2000;
  // UseEffect to rotate the text
  useEffect(() => {
    // When the loopNum is greater than the length of the text, set it to 0
    let ticker = setInterval(() => {
      // run the loop
      tick();
    }, Delta);
    // When the component is unmounted, remove the interval
    return () => clearInterval(ticker);
  }, [Text]);
  // difine the consept of the loop
  const tick = () => {
    // give the text a new value
    let i = loopNum % toRotate.length;
    // set the text to the new value
    let fullText = toRotate[i];
    // set the state of the text
    let updatedText = deleting
      ? fullText.substring(0, Text.length - 1)
      : fullText.substring(0, Text.length + 1);
    // set the state of the text
    setText(updatedText);
    // check if the text is deleting
    if (deleting) {
      setDelta((pervDelta) => pervDelta / 2);
    }
    // check if the text is not deleting
    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
      // set the state of the loop
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  };
  // And return the Hero Section with JSX
  return (
    <>
      <section className="banner" id="home">
        {/* Bootstrap Grid System */}
        {/* Container */}
        <Container className="align-items-center">
          {/* Row */}
          <Row>
            {/* Col */}
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome To My Portfolio</span>
              <h1>
                {/* My Name */}
                {`Hi Im Aliakbar Zohour`}
                <br />
                {/* Typed Effect */}
                <span className="wrap">{Text}</span>
              </h1>
              {/* Description */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
                repellendus esse voluptatem nobis iste totam! Quia sed,
                voluptatum ea excepturi alias possimus dolore adipisci omnis
                corporis ullam beatae maiores totam.
              </p>
              <button
                onClick={() => {
                  console.log("home btn is clicked .");
                }}
              >
                Let's Connect <Icon.ArrowRightCircle size={25} />{" "}
              </button>
            </Col>
            {/* Col */}
            <Col xs={12} md={6} xl={5}>
              {/* Image For Hero Section */}
              <img src={headerImg} alt="herosection" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default HeroSection;
