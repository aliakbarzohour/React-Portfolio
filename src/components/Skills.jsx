import React from "react";
// Styles
import "./Skills.css";
// Multi Carousel Component
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// React Bootstrap
import { Col, Container, Row } from "react-bootstrap";
// Skills meter Svg
import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
// Background Image
import colorSharp from '../assets/image/color-sharp.png';

function Skills() {
  // Carousel Responsive Settings
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    // React Fragment
    <>
      <section id="skills" className="skills">
        <Container>
          <Row>
            <Col>
              <div className="skills-box">
                <h2>Skills</h2>
                <p>
                  I have a passion for learning new things and I am always
                  looking for new ways to improve my skills. <br /> I have a
                  strong background in web development and I am always looking
                  to learn new things and improve my skills.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="skills-slider"
                >
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter2} alt="" />
                    <h5>DevOps</h5>
                  </div>
                  <div className="item">
                    <img src={meter3} alt="" />
                    <h5>FullStack Development</h5>
                  </div>
                  <div className="item">
                    <img src={meter1} alt="" />
                    <h5>Front-End Teacher</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Background Image */}
        <img src={colorSharp} className="background-image-left"/>
      </section>
    </>
  );
}

export default Skills;
