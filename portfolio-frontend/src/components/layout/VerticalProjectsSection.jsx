import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../../data/projects.json";
import WideProjectCard from "../specific/ProjectCard";

const VerticalProjectsSection = () => {
  return (
    <section className="pt-5 pb-5">
      <Container>
        <Row>
          {projects.map((project) => {
            const imgFile = project.img.split("/").pop(); 
            return (
              <Col md={4} key={project.id}>
                <WideProjectCard
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  imgName={imgFile}
                  lastUpdated="3 mins ago"
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default VerticalProjectsSection;
