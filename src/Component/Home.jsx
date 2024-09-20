
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
    const forestImages = [
        {
            title: "Beautiful Redwood",
            description: "Explore the majestic redwoods in California.",
            image: "https://i.postimg.cc/tCTNHkFH/pexels-hikaique-775201.jpg", 
        },
        {
            title: "Serene Lake",
            description: "Discover the tranquility of lake views.",
            image: "https://i.postimg.cc/NMDm32MM/pexels-creative-vix-9754.jpg",
        },
        {
            title: "Mountain Trail",
            description: "Hike through breathtaking mountain trails.",
            image: "https://i.postimg.cc/vHcfKBdY/pexels-elisa-g-1775301047-28495638.jpg", 
        },
        {
            title: "Lush Forest",
            description: "Immerse yourself in a vibrant green forest.",
            image: "https://i.postimg.cc/FFnJ04k2/pexels-nejc-kosir-108379-338936.jpg",
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
