import {Col, Container, Image, Row, Form, FormText, Button} from 'react-bootstrap';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoIosDocument } from "react-icons/io";
import ReactCardFlip from 'react-card-flip';
import {useState} from "react";
import Card from 'react-bootstrap/Card';

function HomePage() {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh',
            background: "linear-gradient(to right, #808080, #ffffff)"}}>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <Card className="shadow-lg  d-flex justify-content-center align-content-center"
                      style={{ width: '70em', height: '40em', background: '#FFFFFE',
                          boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.5)' }} onClick={flipCard}>
                    <Row className="justify-content-center w-100">
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            {/* Centering image within the column */}
                            <Image src="/Profile.jpeg" alt="Image description" width={350} height={350} roundedCircle />
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            <Row>
                                <FormText style={{ fontSize: '3em' }}>Hojin Sohn</FormText>
                                <FormText style={{ fontSize: '1em' }}>Junior At Computer Science</FormText>

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
                                    >
                                        <FaLinkedin size={40}/>
                                    </button>
                                    <button
                                        className=" btn me-5"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.target.style.color = '#007bff'}
                                        onMouseOut={(e) => e.target.style.color = ''}
                                    >
                                        <IoLogoGithub size={40}/>
                                    </button>
                                    <button
                                        className="btn me-5"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.target.style.color = '#007bff'}
                                        onMouseOut={(e) => e.target.style.color = ''}
                                    >
                                        <IoIosDocument size={40}/>
                                    </button>
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Card>
                <Card className="shadow-lg  d-flex justify-content-center align-content-center"
                      style={{ width: '70em', height: '40em', background: '#FFFFFE',
                          boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.5)' }} onClick={flipCard}>
                    <Row className="justify-content-center w-100">
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            {/* Centering image within the column */}
                            <Image src="/Profile.jpeg" alt="Image description" width={350} height={350} roundedCircle />
                        </Col>
                        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                            <Row>
                                <FormText style={{ fontSize: '3em' }}>Hojin Sohn</FormText>
                                <FormText style={{ fontSize: '1em' }}>Junior At Computer Science</FormText>

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
                                    >
                                        <FaLinkedin size={40}/>
                                    </button>
                                    <button
                                        className=" btn me-5"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.target.style.color = '#007bff'}
                                        onMouseOut={(e) => e.target.style.color = ''}
                                    >
                                        <IoLogoGithub size={40}/>
                                    </button>
                                    <button
                                        className="btn me-5"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                        onMouseOver={(e) => e.target.style.color = '#007bff'}
                                        onMouseOut={(e) => e.target.style.color = ''}
                                    >
                                        <IoIosDocument size={40}/>
                                    </button>
                                </Container>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </ReactCardFlip>
        </div>
    );
}


export default HomePage;