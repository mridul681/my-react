
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css'; 

const Contact = () => {
    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">Contact Us</h2>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Form>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Your message" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;
