import {
    Col,
    Container,
    Image,
    Row,
    FormText,
    Tabs,
    Tab,
    Badge
} from 'react-bootstrap';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import ReactCardFlip from 'react-card-flip';
import {useState} from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import PreviousExperienceCard from "../Components/PreviousExperienceCard";
import Projects from "../Components/Projects";

function HomePage() {
    const navigate = useNavigate();
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotated, setRotated] = useState(false);
    const [key, setKey] = useState('home');

    function rotateCard() {
        setRotated(!rotated); // Toggle the rotation state
    }

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    function linkedInClicked() {
        window.open('https://www.linkedin.com/in/hojinsohn820/', '_blank');
    }

    function githubClicked() {
        window.open('https://github.com/HojinSohn', '_blank');
    }

    function resumeClicked() {
        navigate('/resume');
    }

    return (
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                    transition={true}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 1000, // Ensures it stays above other content
                        background: 'white',
                    }}
                >
                    <Tab eventKey="home" title="Home">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100vh',
                            marginTop: 10
                        }}>
                            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                                <Card className="shadow-lg  d-flex justify-content-center align-content-center"
                                      style={{ width: '70em', height: '40em', background: '#FFFFFE', border: '1px',
                                          boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.5)' }} onClick={flipCard}>
                                    <Row className="justify-content-center w-100">
                                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                            {/* Centering image within the column */}
                                            <Image src={`${process.env.PUBLIC_URL}/images/Profile.jpeg`} alt="Image description" width={350} height={350} roundedCircle />
                                        </Col>
                                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                            <Row>
                                                <FormText style={{ fontSize: '3em' }}>Hojin Sohn</FormText>

                                                <Container className="mt-3">
                                                    <FaPhone/>
                                                    <FormText style={{ fontSize: '1em' }}> (+1) 669-252-5398 </FormText>
                                                </Container>

                                                <Container className="mt-3">
                                                    <Row>
                                                        <Col xs="auto" className="mt-2 d-flex justify-content-center">
                                                            <MdEmail size={25} /> {/* Email icon */}
                                                        </Col>
                                                        <Col>
                                                            <Row>
                                                                <FormText style={{ fontSize: '1em' }}>sohn5312@gmail.com</FormText>
                                                            </Row>
                                                            <Row>
                                                                <FormText style={{ fontSize: '1em' }}>sohn31@purdue.edu</FormText>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Container>

                                                <Container className="mt-5">
                                                    <button
                                                        className="btn me-5"
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                                        onMouseOver={(e) => e.target.style.color = '#007bff'}
                                                        onMouseOut={(e) => e.target.style.color = ''}
                                                        onClick={linkedInClicked}
                                                    >
                                                        <FaLinkedin size={55}/>
                                                    </button>
                                                    <button
                                                        className=" btn me-5"
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                                        onMouseOver={(e) => e.target.style.color = '#007bff'}
                                                        onMouseOut={(e) => e.target.style.color = ''}
                                                        onClick={githubClicked}
                                                    >
                                                        <IoLogoGithub size={55}/>
                                                    </button>
                                                </Container>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card
                                    className="shadow-lg d-flex justify-content-center align-content-center"
                                    style={{
                                        width: '70em',
                                        height: '40em',
                                        background: '#FFFFFF',
                                        border: '1px solid #ddd',
                                        borderRadius: '15px',
                                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                                        padding: '2rem',
                                        margin: '2rem auto',
                                    }}
                                    onClick={flipCard}
                                >
                                    <Row className="g-4 justify-content-center">
                                        {/* Column for Education and Interest */}
                                        <Col xs={12} md={6}>
                                            {/* Interest Section */}
                                            {/*<Card*/}
                                            {/*    style={{*/}
                                            {/*        background: '#F9FAFB',*/}
                                            {/*        border: '1px solid #E5E7EB',*/}
                                            {/*        borderRadius: '10px',*/}
                                            {/*        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',*/}
                                            {/*        height: '40%'*/}
                                            {/*    }}*/}
                                            {/*>*/}
                                            {/*    <Card.Body>*/}
                                            {/*        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Interest</Card.Title>*/}
                                            {/*        <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">*/}
                                            {/*            <Badge bg="primary" className="px-3 py-2" style={{ fontSize: '1rem' }}>Machine Learning</Badge>*/}
                                            {/*            <Badge bg="secondary" className="px-3 py-2" style={{ fontSize: '1rem' }}>Software Engineering</Badge>*/}
                                            {/*        </div>*/}
                                            {/*    </Card.Body>*/}
                                            {/*</Card>*/}

                                            {/*<Col style={{ height: '5%', maxWidth: '500px'}}>*/}

                                            {/*</Col>*/}

                                            {/* Education Section */}
                                            <Card
                                                style={{
                                                    background: '#FFFFFF',
                                                    border: '0px',
                                                    height: '30%'
                                                }}
                                            >
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Education</Card.Title>
                                                    <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                                                        <strong>Purdue University</strong> <br />
                                                        Bachelor’s of Science in Computer Science <br />
                                                        <em>Expected Graduation: December 2026</em> <br />
                                                        <strong>GPA:</strong> 3.9/4.0
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>

                                            <Card
                                                style={{
                                                    background: '#FFFFFF',
                                                    border: '0px',
                                                    height: '50%',
                                                }}
                                            >
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Courses</Card.Title>
                                                    <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                                                        <ul style={{ paddingLeft: '20px' }}>
                                                            <li><strong>Computer Architecture (TA in Fall 2024)</strong></li>
                                                            <li><strong>System Programming (TA in Spring 2025)</strong></li>
                                                            <li><strong>Programming in C</strong></li>
                                                            <li><strong>Data Mining and Machine Learning</strong></li>
                                                            <li><strong>Introduction to the Analysis of Algorithms</strong></li>
                                                            <li><strong>Introduction to Artificial Intelligence</strong></li>
                                                            <li><strong>Data Structures and Algorithms</strong></li>
                                                            <li><strong>Information Systems</strong></li>
                                                            <li><strong>Compiler Design</strong></li>
                                                            <li><strong>Foundations of Deep Learning</strong></li>
                                                            <li><strong>Introduction to Relational Database Systems</strong></li>
                                                            {/* Add more courses as needed */}
                                                        </ul>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>

                                        </Col>

                                        {/* Column for Previous Experience */}
                                        <Col xs={12} md={6}>
                                            <PreviousExperienceCard />
                                        </Col>
                                    </Row>
                                </Card>
                            </ReactCardFlip>
                        </div>
                    </Tab>
                    <Tab eventKey="Projects" title="Projects">
                        <Projects/>
                    </Tab>
                </Tabs>
    );
}
export default HomePage;