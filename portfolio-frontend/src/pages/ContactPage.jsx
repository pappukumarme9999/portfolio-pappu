// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { sendContactMessage } from '../api/contactApi';
import Navigation from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendContactMessage(formData);
    setSubmitted(true);
  };

  return (
    <Container>
      <Navigation />
      <h1>Contact Me</h1>
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={5} onChange={handleChange} required />
          </Form.Group>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      )}
      <Footer />
    </Container>
  );
};

export default ContactPage;
