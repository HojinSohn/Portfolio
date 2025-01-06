import Card from "react-bootstrap/Card";
import {Col, Container, Image, Row, ListGroup, Badge, Button} from 'react-bootstrap';

const AboutMe = () => {
    return (
        <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa', minHeight: '93vh' }}>
            <Row className="align-items-center justify-content-center">
                {/* Profile Photo Section */}
                <Col xs={12} md={4} className="d-flex justify-content-center mb-4 mb-md-0">
                    <Image
                        src="/Profile.jpeg"
                        roundedCircle
                        style={{ width: '250px', height: '250px', objectFit: 'cover', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
                        alt="Hojin Sohn"
                    />
                </Col>

                {/* About Me Content */}
                <Col xs={12} md={8}>
                    <Card className="border-0" style={{ backgroundColor: 'transparent' }}>
                        <Card.Body>
                            {/* Description */}
                            <Card.Title className="mb-4" style={{ fontSize: '2rem', fontWeight: 'bold' }}>About Me</Card.Title>
                            <Card.Text style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                Hi! I'm Hojin Sohn, a passionate Computer Science student pursuing both Bachelor's and Master's degrees.
                                I specialize in software engineering and machine learning, and I enjoy creating impactful projects and solving challenging problems.
                            </Card.Text>

                            <hr />

                            {/* Skills */}
                            <Card.Subtitle className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Skills</Card.Subtitle>

                            {/* Programming Languages Box */}
                            <Row className="mb-4">
                                <Col xs={12} md={6}>
                                    <Card className="border-0 shadow-sm" style={{ backgroundColor: '#fff', padding: '1rem' }}>
                                        <Card.Body>
                                            <Card.Title className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Languages</Card.Title>
                                            <Row>
                                                <Col xs={6} md={12} lg={6}>
                                                    <div className="d-flex flex-column">
                                                        <Badge bg="primary" className="p-2 mb-2" style={{ fontSize: '1rem' }}>Java</Badge>
                                                        <Badge bg="primary" className="p-2 mb-2" style={{ fontSize: '1rem' }}>Python</Badge>
                                                        <Badge bg="primary" className="p-2 mb-2" style={{ fontSize: '1rem' }}>R</Badge>
                                                        <Badge bg="primary" className="p-2 mb-2" style={{ fontSize: '1rem' }}>JavaScript</Badge>
                                                    </div>
                                                </Col>
                                                <Col xs={6} md={12} lg={6}>
                                                    <div className="d-flex flex-column">
                                                        <Badge bg="primary" className="p-2 mb-2" style={{ fontSize: '1rem' }}>C</Badge>
                                                        <Badge bg="primary" className="p-2 mb-2" style={{ fontSize: '1rem' }}>C++</Badge>
                                                        <Badge bg="primary" className="p-2 mb-2" style={{ fontSize: '1rem' }}>SQL</Badge>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                {/* Tools Box */}
                                <Col xs={12} md={6}>
                                    <Card className="border-0 shadow-sm" style={{ backgroundColor: '#fff', padding: '1rem' }}>
                                        <Card.Body>
                                            <Card.Title className="mb-3" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Tools/Frameworks</Card.Title>
                                            <Row>
                                                <Col xs={6} md={12} lg={6}>
                                                    <div className="d-flex flex-column">
                                                        <Badge bg="success" className="p-2 mb-2" style={{ fontSize: '1rem' }}>React / React Native</Badge>
                                                        <Badge bg="success" className="p-2 mb-2" style={{ fontSize: '1rem' }}>Git</Badge>
                                                        <Badge bg="success" className="p-2 mb-2" style={{ fontSize: '1rem' }}>Node.js</Badge>
                                                    </div>
                                                </Col>
                                                <Col xs={6} md={12} lg={6}>
                                                    <div className="d-flex flex-column">
                                                        <Badge bg="success" className="p-2 mb-2" style={{ fontSize: '1rem' }}>Firebase</Badge>
                                                        <Badge bg="success" className="p-2 mb-2" style={{ fontSize: '1rem' }}>Azure DevOps</Badge>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

                            <hr />

                            {/* Education */}
                            <Card.Subtitle className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Education</Card.Subtitle>
                            <Card.Text style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                <strong>Purdue University</strong> <br />
                                Bachelor’s of Science and Master’s in Computer Science <br />
                                <em>Expected Graduation: December 2026</em> <br />
                                <strong>GPA:</strong> 3.90/4.00
                            </Card.Text>

                            <hr />

                            {/* Previous Experience */}
                            <Card.Subtitle className="mb-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Previous Experience</Card.Subtitle>
                            <Card.Text style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                                <strong>IT Intern at LG&E and KU</strong> <br />
                                Developed API integrations for outage management and built data pipelines with Java and Microsoft SQL Server.
                                Streamlined processes, resulting in increased efficiency and reliability. <br />
                                <em>May 2024 - August 2024</em>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutMe