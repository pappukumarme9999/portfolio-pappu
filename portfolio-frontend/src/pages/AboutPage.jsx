// src/pages/AboutPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const AboutPage = () => (
  <Container className="w-full">
    <Navigation />
    <h1>About Me</h1>
    <p>Brief introduction, skills, background etc.</p>
    <Footer />
  </Container>
);

export default AboutPage;
