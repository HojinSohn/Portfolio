import {
    Col,
    Container,
    Image,
    Row,
    FormText,
    Tabs,
    Tab,
    Badge,
    Button
} from 'react-bootstrap';
import { FaPhone } from "react-icons/fa6";
import {useState} from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';


const ProfileCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [rotated, setRotated] = useState(false);
    const [key, setKey] = useState('home');
    const [scale, setScale] = useState(1);

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


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
                    <Card
                        onClick={flipCard}
                        style={{
                            width: '70em',
                            height: '40em',
                            background: `radial-gradient(circle at top left, #fff 88%, #333 80%)`,
                            color: '#ffffff',
                            boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.5)',
                            scale: scale
                        }}
                        className="border-0 d-flex justify-content-center align-items-center"
                    >
                        <Row className="justify-content-center">
                            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                {/* Centering image within the column */}
                                <div style = {{
                                    position: 'relative',
                                    width: '350px',
                                    height: '350px',
                                    overflow: 'hidden',
                                    borderRadius: '50%',
                                }}>
                                    <Image src={`${process.env.PUBLIC_URL}/images/hojin2.jpeg`} 
                                            alt="Behind Circle"
                                            style={{
                                                position: 'absolute',
                                                top: '0px',
                                                left: '-30px',
                                                width: '400px',
                                                height: '400px',
                                                objectFit: 'cover'
                                                }}/>
                                </div>
                            </Col>
                            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
                                <Row>
                                    <Container >
                                        <FormText style={{ fontSize: '3em', color: '#000' , textDecoration: 'underline' }}>Hojin Sohn</FormText>
                                        <FormText style={{ fontSize: '1em', color: '#666' }}>
                                            <Row>
                                                <i>Computer Science @ Purdue</i>
                                                <i>IT Intern @ LGE KU</i>
                                                <i>Software / ML Enthusiast</i>
                                            </Row>
                                            
                                        </FormText>
                                    </Container>
                                    

                                    <Container className="mt-3" style={{ fontSize: '1.1em', color: '#666' }}>
                                        <Row xs="auto" style={{ fontSize: '1.1em', color: '#000' }}>
                                            <Col xs="auto" style={{ fontSize: '1em', color: '#000' }}>
                                                <FaPhone/>
                                            </Col>
                                            <FormText style={{ fontSize: '1em' }}> (+1) 669-252-5398 </FormText>
                                        </Row>
                                        <Row xs="auto" style={{ fontSize: '1.1em', color: '#000' }}>
                                            <Col xs="auto" style={{ fontSize: '1em', color: '#000' }}>
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
                                    <Container className="mt-3" style={{ fontSize: '1.1em', color: '#666' }}>
                                        <Row xs="auto" style={{ fontSize: '1.1em', color: '#000' }}>
                                            <Button
                                                variant="link"
                                                className="me-5 p-0"
                                                style={{ textDecoration: 'none', color: '#000' }}
                                                onMouseOver={(e) => e.target.style.color = '#666'}
                                                onMouseOut={(e) => e.target.style.color = '#000'}
                                                onClick={linkedInClicked}
                                            >
                                                <FaLinkedin size={55} />
                                            </Button>
                                            <Button
                                                variant="link"
                                                className="me-5 p-0"
                                                style={{ textDecoration: 'none', color: '#000' }}
                                                onMouseOver={(e) => e.target.style.color = '#666'}
                                                onMouseOut={(e) => e.target.style.color = '#000'}
                                                onClick={githubClicked}
                                            >
                                                <IoLogoGithub size={55}/>
                                            </Button>
                                        </Row>
                                    </Container>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        onClick={flipCard}
                        style={{
                            width: '70em',
                            height: '40em',
                            background: `radial-gradient(circle at top left, #fff 88%, #333 80%)`,
                            color: '#ffffff',
                            boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.5)',
                            scale: scale
                        }}
                        className="border-0 d-flex justify-content-center align-items-center"
                    >
                        <div className="text-center">
                            <FormText style={{ fontSize: '2em', color: '#000', fontWeight: 'bold' }}>Skills</FormText>
                            <Row className="justify-content-center mt-4" style={{ fontSize: '1.5em', color: '#222' }}>
                            <Col xs="auto">Java</Col>
                            <Col xs="auto">Python</Col>
                            <Col xs="auto">JavaScript</Col>
                            <Col xs="auto">C</Col>
                            <Col xs="auto">C++</Col>
                            <Col xs="auto">Git</Col>
                            </Row>
                        </div>
                    </Card>
                </ReactCardFlip>
    )
};

export default ProfileCard;