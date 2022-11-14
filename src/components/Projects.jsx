import React from "react";
// Syles
import "./Projects.css";
// Project Image
import img1 from "../assets/image/project-img1.png";
import img2 from "../assets/image/project-img2.png";
import img3 from "../assets/image/project-img3.png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import colorSharp from "../assets/image/color-sharp2.png";

function Projects() {
  const projects = [
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img1,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img2,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img3,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img1,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img2,
    },
    {
      title: "Portfolio",
      description: "This is my portfolio website",
      img: img3,
    },
  ];

  // Return JSX
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque euismod, nisi eu consectetur consectetur, nisl
            </p>
            <Tab.Container defaultActiveKey="first" id="projects-tabs">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Second</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tap Third</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectsCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="background-image-right" alt="" />
    </section>
  );
}

export default Projects;
