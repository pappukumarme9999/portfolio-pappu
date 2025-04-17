// src/pages/ProjectsPage.jsx
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from '../components/specific/ProjectCard';
import { getProjects } from '../api/projectApi';
import Navigation from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <Container>
      <Navigation />
      <h1>Projects</h1>
      <Row>
        {projects.map(project => (
          <Col md={4} key={project.id}>
            <ProjectCard {...project} />
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  );
};

export default ProjectsPage;
