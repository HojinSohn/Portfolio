import {
    Col,
    Container,
    Image,
    Row,
    Form,
    FormText,
    Button,
    Carousel,
    Tabs,
    Tab,
    ListGroup,
    Badge
} from 'react-bootstrap';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";
import ReactCardFlip from 'react-card-flip';
import {useState} from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import AboutMe from "../Components/AboutMe";
import PreviousExperienceCard from "../Components/PreviousExperienceCard";
import { FaArrowRotateLeft } from "react-icons/fa6";

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
                >
                    <Tab eventKey="home" title="Home">
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100vh',
                            backgroundImage: "url('/grey.jpg')",
                        }}>
                            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                                <Card className="shadow-lg  d-flex justify-content-center align-content-center"
                                      style={{ width: '70em', height: '40em', background: '#FFFFFE', border: '1px',
                                          boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.5)' }} onClick={flipCard}>
                                    <Row className="justify-content-center w-100">
                                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                            {/* Centering image within the column */}
                                            <Image src="/Profile.jpeg" alt="Image description" width={350} height={350} roundedCircle />
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
                                                        <FaLinkedin size={40}/>
                                                    </button>
                                                    <button
                                                        className=" btn me-5"
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                                        onMouseOver={(e) => e.target.style.color = '#007bff'}
                                                        onMouseOut={(e) => e.target.style.color = ''}
                                                        onClick={githubClicked}
                                                    >
                                                        <IoLogoGithub size={40}/>
                                                    </button>
                                                    <button
                                                        className="btn me-5"
                                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                                        onMouseOver={(e) => e.target.style.color = '#007bff'}
                                                        onMouseOut={(e) => e.target.style.color = ''}
                                                        onClick={resumeClicked}
                                                    >
                                                        <IoIosDocument size={40}/>
                                                    </button>
                                                </Container>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card>
                                <Card className="shadow-lg d-flex justify-content-center align-content-center"
                                      style={{
                                          width: '70em',
                                          height: '40em',
                                          background: '#FFFFFE',
                                          border: '1px solid #ddd',
                                          borderRadius: '15px',
                                          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                          padding: '2rem',
                                          textAlign: 'center',
                                          margin: '2rem auto',
                                      }}
                                      onClick={flipCard}>

                                    <Row className="justify-content-center">
                                        <Col className="d-flex  align-items-center">

                                            {/* Column for Education and Interest */}
                                            <Col className="">
                                                {/* Interest Section */}
                                                <Card className="shadow-lg mb-5" style={{ width: '100%', maxWidth: '500px', background: '#FFFFFE', border: '1px', boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.1)' }}>
                                                    <Card.Body>
                                                        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Interest</Card.Title>
                                                        <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.5', color: '#666' }}>
                                                            <Col className="d-flex justify-content-center">
                                                                <Badge bg="primary" className="p-2 mb-2 me-5" style={{ fontSize: '1rem' }}>Machine Learning</Badge>
                                                                <Badge bg="primary" className="p-2 mb-2" style={{ fontSize: '1rem' }}>Software Engineering</Badge>
                                                            </Col>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>

                                                {/* Education Section */}
                                                <Card className="shadow-lg" style={{ width: '100%', maxWidth: '500px', background: '#FFFFFE', border: '1px', boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.1)' }}>
                                                    <Card.Body className="p-4">
                                                        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>
                                                            Education
                                                        </Card.Title>
                                                        <Card.Text style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#666' }}>
                                                            <strong>Purdue University</strong> <br />
                                                            Bachelor’s of Science and Master’s in Computer Science <br />
                                                            <em>Expected Graduation: December 2026</em> <br />
                                                            <strong>GPA:</strong> 3.9/4.0
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                            {/* Column for Previous Experience */}
                                            <Col className="">
                                                {/* Previous Experience Section */}
                                                <PreviousExperienceCard />
                                            </Col>

                                        </Col>
                                    </Row>
                                </Card>
                            </ReactCardFlip>
                        </div>
                    </Tab>
                    <Tab eventKey="about me" title="About Me">
                        <AboutMe/>
                    </Tab>
                </Tabs>
    );
}


// <Card className="shadow-lg d-flex justify-content-center align-content-center"
//       style={{ width: '70em', height: '40em', background: '#FFFFFE', border: '1px', boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.5)' }}
//       onClick={flipCard}>
//
//     <Row className="w-100">
//         {/* Sub-card 1 */}
//         <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
//             <Card style={{ width: '18rem' }} className="shadow-sm">
//                 <Card.Body>
//                     <Card.Title>Project 1</Card.Title>
//                     <Card.Text>
//                         Description of Project 1. This could be a brief overview of the project, the technologies used, and its purpose.
//                     </Card.Text>
//                     <Button variant="primary" onClick={() => window.open('https://link-to-project.com', '_blank')}>View Project</Button>
//                 </Card.Body>
//             </Card>
//         </Col>
//
//         {/* Sub-card 2 */}
//         <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
//             <Card style={{ width: '18rem' }} className="shadow-sm">
//                 <Card.Body>
//                     <Card.Title>Project 2</Card.Title>
//                     <Card.Text>
//                         Description of Project 2. This could include the project's goals, challenges, and results achieved.
//                     </Card.Text>
//                     <Button variant="primary" onClick={() => window.open('https://link-to-project.com', '_blank')}>View Project</Button>
//                 </Card.Body>
//             </Card>
//         </Col>
//
//         {/* Sub-card 3 */}
//         <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
//             <Card style={{ width: '18rem' }} className="shadow-sm">
//                 <Card.Body>
//                     <Card.Title>Project 3</Card.Title>
//                     <Card.Text>
//                         Description of Project 3. It could cover the challenges faced, solutions implemented, and any technologies involved.
//                     </Card.Text>
//                     <Button variant="primary" onClick={() => window.open('https://link-to-project.com', '_blank')}>View Project</Button>
//                 </Card.Body>
//             </Card>
//         </Col>
//     </Row>
// </Card>

export default HomePage;