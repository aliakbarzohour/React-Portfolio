import React from "react";
import { Col } from "react-bootstrap";

function ProjectsCard({ title, description, img }) {
  return (
    <>
      <Col sm={6} md={4}>
        <div className="project-image-box">
          <img src={img} alt="project" />
          <div className="text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ProjectsCard;
