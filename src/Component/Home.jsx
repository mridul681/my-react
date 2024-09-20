// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
    const forestImages = [
        {
            title: "Beautiful Redwood",
            description: "Explore the majestic redwoods in California.",
            image: "https://i.postimg.cc/90XHJK4S/Whats-App-Image-2024-07-10-at-13-54-43-17e7fa07.jpg", // Replace with a valid image URL
        },
        {
            title: "Serene Lake",
            description: "Discover the tranquility of lake views.",
            image: "https://i.postimg.cc/tT5LZkrz/Whats-App-Image-2024-08-21-at-12-41-44-8cca6c04.jpg", // Replace with a valid image URL
        },
        {
            title: "Mountain Trail",
            description: "Hike through breathtaking mountain trails.",
            image: "https://example.com/mountain.jpg", // Replace with a valid image URL
        },
        {
            title: "Lush Forest",
            description: "Immerse yourself in a vibrant green forest.",
            image: "https://example.com/forest.jpg", // Replace with a valid image URL
        },
    ];

    return (
        <Container>
            <h2 className="text-center my-4">Welcome to Our Forest Visiting Site</h2>
            <Row>
                {forestImages.map((image, index) => (
                    <Col md={3} key={index} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={image.image} />
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                                <Card.Text>{image.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
