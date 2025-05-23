import React, { useState } from "react";
import { Card, Row, Col, Image, FormText,Container } from "react-bootstrap";
import './ProjectImage.css';
import { motion } from 'framer-motion';
import { image } from "framer-motion/client";

const WorkExperiences = ({inView}) => {
    const [flipped, setFlipped] = useState(false);

    const flipCard = () => setFlipped(!flipped);

    const experiences = [
        {
            title: "IT Intern III at LG&E and KU",
            duration: "May 2024 - Present",
            description: [
                "● Developed Micronaut microservices (Java) that expose RESTful POST/GET endpoints for outage reporting and status retrieval, backed by Microsoft SQL Server.",
                "● Developed batch jobs triggered by the Automic scheduler to process outage orders and send email notifications to the distribution control center and operation centers.",
                "● Collaborated with SAP Interface team and DCC (Distribution Control Center) to integrate outage management systems with SAP and other internal systems."
            ],
            image: `${process.env.PUBLIC_URL}/images/lge-ku.jpeg`
        },
        {
            title: "Teaching Assistant at Purdue University",
            duration: "August 2024 - May 2025",
            description: [
                "● Manage Lab and Office Hours for CS 250 (Fall 2024) and CS 252 (Spring 2025)"
            ],
            image: `${process.env.PUBLIC_URL}/images/purdueIcon.png`
        }

    ]

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
                <Row className="g-4" style={{marginTop: 10, justifyContent: 'center'}}>
                        {experiences.map((experience, index) => (
                            <Col xs={12} sm={6} md={4} key={index}>
                                <Card className="shadow-lg h-100">
                                    <Card.Header className="d-flex align-items-center justify-content-between">
                                        <Col>
                                        <Image
                                            src={experience.image} // Add the correct path to your logo
                                            rounded
                                            style={{
                                                width: '120px', height: '120px', objectFit: 'contain', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                                            }}
                                        />
                                        </Col>
                                        <Col>
                                        <Row><Card.Text className="mb-2">{experience.title}</Card.Text></Row>
                                        <Row><Card.Text className="mb-2"  style={{ fontSize: '1rem', color: '#666', fontStyle: 'italic' }}>
                                            {experience.duration}
                                        </Card.Text></Row>
                                        </Col>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text style={{ whiteSpace: 'pre-line' }}>{experience.description.join('\n')}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Row>
        </motion.div>
    );
};

export default WorkExperiences;
