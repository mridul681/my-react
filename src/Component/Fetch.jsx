
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import './Products.css';

const Fetch = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return (
            <div className="text-center">
                <Spinner animation="border" role="status" />
                <span className="ms-2">Loading...</span>
            </div>
        );
    }

    if (error) {
        return <div className="text-danger text-center">{error}</div>;
    }

    return (
        <Container className="my-4">
            <h2 className="text-center mb-4">Products</h2>
            <Row>
                {products.map(product => (
                    <Col md={4} key={product.id} className="mb-4">
                        <Card className="product-card h-100">
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body className="d-flex flex-column"> 
                                <Card.Title className="flex-grow-0">{product.title}</Card.Title>
                                <Card.Text className="flex-grow-1">
                                    <strong>Price:</strong> ${product.price}
                                </Card.Text>
                                <Card.Text className="flex-grow-1 text-truncate">
                                    {product.description}
                                </Card.Text>
                                <Card.Text className="flex-grow-0">
                                    <strong>Rating:</strong> {product.rating.rate} ({product.rating.count} reviews)
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Fetch;
