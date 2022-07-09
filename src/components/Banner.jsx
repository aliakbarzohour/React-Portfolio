import React, { useState, useEffect } from "react";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Bootstrap Icons
import * as Icon from "react-bootstrap-icons";
// Hero Section image
import headerImg from "../assets/image/header-img.svg";
import "./Banner.css";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  // Define to rotate the text
  const toRotate = ["Web Developer", "Front-End Teacher", "DevOps Engineer"];
  const [Text, setText] = useState("");
  const [Delta, setDelta] = useState(300 - Math.random() * 100);
  // Loop Delay in milliseconds
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, Delta);
    return () => clearInterval(ticker);
  }, [Text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleting
      ? fullText.substring(0, Text.length - 1)
      : fullText.substring(0,Text.length + 1);
    setText(updatedText);
    if (deleting) {
      setDelta(pervDelta => pervDelta / 2);
    }
    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setDelta(500);
      setLoopNum(loopNum + 1);
    }
  };
  return (
    <>
      <section className="banner" id="home">
        <Container className="align-items-center">
          <Row>
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome To My Portfolio</span>
              <h1>
                {`Hi Im Aliakbar Zohour`}
                <br />
                <span className="wrap">{Text}</span>
              </h1>
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
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="herosection" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Banner;
