
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './About.css'; 

const About = () => {
    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">About Us</h2>
            <Row>
                <Col md={6}>
                    <Card className="about-card mb-4">
                        <Card.Body>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                                We aim to connect people with nature, providing them with unforgettable experiences in the great outdoors.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="about-card mb-4">
                        <Card.Body>
                            <Card.Title>Our Vision</Card.Title>
                            <Card.Text>
                                We envision a world where everyone appreciates the beauty of forests and the importance of conservation.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h4 className="text-center my-4">Why Choose Us?</h4>
            <Row>
                <Col md={4}>
                    <Card className="about-card mb-4">
                        <Card.Body>
                            <Card.Title>Experienced Guides</Card.Title>
                            <Card.Text>
                                Our guides are experts in their fields, ready to share their knowledge and passion.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="about-card mb-4">
                        <Card.Body>
                            <Card.Title>Sustainable Practices</Card.Title>
                            <Card.Text>
                                We prioritize eco-friendly practices to preserve the beauty of nature for future generations.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="about-card mb-4">
                        <Card.Body>
                            <Card.Title>Community Focused</Card.Title>
                            <Card.Text>
                                We believe in giving back to the communities we operate in through various initiatives.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
