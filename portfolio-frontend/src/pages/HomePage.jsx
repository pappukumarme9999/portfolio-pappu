// src/pages/HomePage.jsx
import React from 'react';
import Navigation from '../components/layout/Navbar';
import Banner from '../components/specific/Banner';
import CarouselComponent from '../components/layout/Carousel';
import VerticalProjectsSection from '../components/layout/VerticalProjectsSection';
import WideProjectsSection from '../components/layout/WideProjectsSection';
import Footer from '../components/layout/Footer';
import '../styles/global.scss';

// import { ToastContainer } from 'react-toastify';
// import HomepageHero from '../components/specific/HomepageHero';
// import { useTranslation } from 'react-i18next';
// import projectsData from '../data/projects.json';
// import ProjectCard from '../components/specific/ProjectCard';
// import { getProjects } from '../api/projectApi';
//  import { Container, Row, Col, Button } from 'react-bootstrap';
//  import { skills } from '../data/skills';
 

 const HomePage = () => {
  // const { t } = useTranslation();
 

  //take only the first 3 projects
  // const featuredProjects = projectsData.slice(0, 3);
 

  return (
    <div>
      <Navigation />
      <Banner />
      <CarouselComponent />  
      <VerticalProjectsSection />
      <WideProjectsSection />
      {/* <Container fluid className="hero-container">
        <Row className="justify-content-center align-items-center h-100">
          <Col md={8} className="text-center hero-content">
            <h1 className="hero-title">{t('home.title')}</h1>
            <p className="hero-subtitle">{t('home.subtitle')}</p>
            <p className="hero-description">{t('home.description')}</p>
            <Button variant="primary" size="lg" href="/projects">
              See My Projects
            </Button>
          </Col>
        </Row>
      </Container>
 

      <Container className="projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <Row className="g-4">
          {featuredProjects.map((project) => (
            <Col md={4} key={project.id}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
        <div className="text-center mt-4">
          <Button variant="outline-primary" href="/projects">
            View All Projects
          </Button>
        </div>
      </Container>
 

      <Container className="skills-section">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge bg-secondary">
              {skill}
            </span>
          ))}
        </div>
      </Container>
 

      <Container className="contact-section text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p>I'd love to hear about your project. Let's connect!</p>
        <Button variant="success" size="lg" href="/contact">
          Contact Me
        </Button>
      </Container> */}
      <Footer />
    </div>
  );
 };
 

 export default HomePage;