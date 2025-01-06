import React, { useState } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import './CardFlip.css';
import ReactCardFlip from "react-card-flip"; // Make sure to import the CSS file for flip effect

const PreviousExperienceCard = () => {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => setFlipped(!flipped);

    return (
        <Col xs={12} md={6} className="justify-content-center align-items-center">
            <Card className="shadow-lg" style={{ width: '500px', maxWidth: '500px', background: '#FFFFFE', border: '1px', boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.1)' }}>
                <Card.Body className="p-4">
                    <Row className="align-items-center">
                        {/* Company Logo */}
                        <Col xs={12} className="d-flex justify-content-center mb-3">
                            <Image
                                src="/lge-ku.jpeg" // Add the correct path to your logo
                                alt="LG&E and KU logo"
                                rounded
                                style={{
                                    width: '120px', height: '120px', objectFit: 'contain', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                                }}
                            />
                        </Col>

                        {/* Title and Duration */}
                        <Col xs={12} className="text-center">
                            <strong style={{ fontSize: '1.3rem', color: '#333' }}>IT Intern at LG&E and KU</strong>
                            <p style={{ fontSize: '1rem', color: '#666', fontStyle: 'italic' }}>May 2024 - August 2024</p>
                        </Col>
                    </Row>

                    {/* Description */}
                    <Card.Text style={{ fontSize: '1.1rem', color: '#333', lineHeight: '1.6' }}>
                        <strong>Description:</strong> <br />
                        Developed API integrations for outage management and built data pipelines with Java and Microsoft SQL Server.
                        Streamlined processes, resulting in increased efficiency and reliability.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PreviousExperienceCard;
